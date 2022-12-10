import { FC, useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import DataLine from './DataLine';
import { ShipgirlPageData } from '../../constants';

interface Props {
    data?: ShipgirlPageData;
}

const ObtainedFromData: FC<Props> = ({ data }) => {
    const formatFromMaps = () => {
        const { fromMaps } = data!.obtainedFrom;
        if (typeof fromMaps[0] === 'string') {
            const fromMapsArray = fromMaps.slice(0, 3);
            return fromMapsArray.map((map, _index) => `${_index === 0 ? '' : ' '}${map}`)
        } else {
            const _fromMaps = fromMaps as unknown as { name: string }[];
            const fromMapsArray = _fromMaps.slice(0, 3);
            return fromMapsArray.map((map, _index) => `${_index === 0 ? '' : ' '}${map.name}`)
        }
    }

    const constructionPool = useMemo(() => {
        if (!data) {
            return '';
        }
        const { construction } = data;
        if (construction.availableIn.light)
            return 'Light';
        if (construction.availableIn.heavy)
            return 'Heavy';
        if (construction.availableIn.aviation)
            return 'Special';
        return '';
    }, [data]);


    const additionalData = useMemo(() => {
        if (!data) {
            return '';
        }
        if (data.names.en.includes('META')) {
            const rarity = data.rarity as string;
            if (rarity === 'Elite') {
                return `Obtained from Cruise Missions.`;
            } else {
                return `Obtained from META Showdown.`;
            }
        }
        if (data.obtainedFrom.obtainedFrom) {
            const _data = data.obtainedFrom.obtainedFrom;
            return `${_data}${_data.charAt(_data.length - 1) === '.' ? '' : '.'}`;
        }
        return '';
    }, [data])

    return (
        <Box marginY='0.5rem'>
            <DataLine title='Construction' value={data ? data.construction.constructionTime : undefined} />
            {
                (data && data.obtainedFrom.fromMaps.length > 0) &&
                <DataLine title='Maps' value={`${formatFromMaps()}`} />
            }
            {
                constructionPool !== '' &&
                <DataLine title='Build' value={constructionPool} />
            }
            {
                (data && data.construction.availableIn.exchange) &&
                <DataLine title='Exchange' value={data.construction.availableIn.exchange as unknown as string} />
            }
            {
                additionalData.length > 0 &&
                <Box marginY='0.25rem'>
                    <Typography textAlign='justify'>
                        Additional Notes: {additionalData}
                    </Typography>
                </Box>
            }
        </Box>
    );
}

export default ObtainedFromData;
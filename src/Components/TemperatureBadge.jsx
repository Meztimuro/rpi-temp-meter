import React from 'react';
import { Text, Color } from "ink";

const TemperatureColor = {
    green: 41,
    yellow: 42,
    orange: 44, 
}

export const TemperatureBadge = p => {
    const c = {
        green: p.temperature < TemperatureColor.green,
        yellow: TemperatureColor.green < p.temperature < TemperatureColor.yellow,
        orange: TemperatureColor.yellow < p.temperature < TemperatureColor.orange,
        blue: TemperatureColor.orange < p.temperature,
        bgRed: TemperatureColor.orange < p.temperature
    }

    return (
        <Text><Color {...c} >{p.temperature}</Color></Text>
    )
}

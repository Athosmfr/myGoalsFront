import { ComponentProps } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const stepbarVariants = tv({
    base: 'w-full rounded-[45px] border border-[#191A23] px-16 py-10 flex items-center shadow-[0_5px_0_0_black] mb-9',   // Classes do tailwind que serão iguais entre todos os botões
    variants: {
        variant: {
            first: 'bg-[#B9FF66]',
            second: 'bg-[#191A23] text-white',
            third: 'bg-white'
        }
    },
})

interface StepBarProps extends ComponentProps<'div'>, VariantProps<typeof stepbarVariants> {
    stepNumber: string | number
    text: string
    textColor?: string // Utilizando o ? pois a cor do texto pode ser opcional, caso não inserida sempre sera preta
}

export function StepBar({ stepNumber, text, variant }: StepBarProps) { // caseTextColor
    // const caseTextColor= `text-${textColor}` // Só para ficar como exemplo caso queira usar uma prop diretamente no componente sem relação com variant, nesse caso
    // colocando um prefixo "text-" para que na hora de utilizar o StepBar seja necessario somente passar a cor, como por exemplo: textColor={'white'} ao inves de text-white... 
    return(
    <div className={stepbarVariants({variant})}>
        <h1 className="text-6xl font-medium">{stepNumber}</h1> {/* className={`text-6xl font-medium ${caseTextColor}`} */}
        <p className="text-3xl font-medium mx-5">{text}</p>
    </div>
    )
}
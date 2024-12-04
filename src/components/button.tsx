import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'border border-[#191A23] rounded-xl border-spacing-7 px-8 py-5',   // Classes do tailwind que serão iguais entre todos os botões
    variants: {
        variant: {
            primary: 'bg-[#191A23] text-white hover:bg-zinc-900 transition-colors duration-300',
            secondary: 'bg-[#B9FF66] hover:bg-[#749E42] transition-colors duration-300',
            secondaryBold: 'bg-[#B9FF66] border-none hover:bg-[#749E42] transition-colors duration-300 font-bold text-2xl',
            default: 'hover:bg-zinc-50 transition-colors duration-300',
            whiteBold: 'bg-zinc-300 hover:bg-zinc-500 transition-colors duration-300 font-bold text-2xl'
        }
    },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant })}>
            {children}
        </button>
    )
}
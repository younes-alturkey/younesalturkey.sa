import { useAppSelector } from '@/src/app/hooks'

export default function Toggle() {
    const { darkMode } = useAppSelector(state => state.ui.settings)
    return (
        <div className="relative inline-block w-9 align-middle ltr">
            <input
                type="checkbox"
                name="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-dark border-6 appearance-none"
                checked={darkMode}
            />
            <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
            />
        </div>
    )
}

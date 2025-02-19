export default function Logo({ className = '' } : { className?: string } ) {
    return (
        <span className={`text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 ${className}`}>
            SebKy
        </span>
    );
}

import Link from "next/link"
const NotFound = () => {
    return (
        <div>
            <h2>Página não encontrada!</h2>
            <p>A página que você está procurando não existe!</p>
            <Link href='/'>Homepage</Link>
        </div>
    )
}
export default NotFound



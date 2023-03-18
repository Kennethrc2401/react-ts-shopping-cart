import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import featuredItems from '../data/featuredItems.json'

export function Home() {
    return (
        <>
        <Row md={2} xs={1} lg={3} className="g-3">
            {featuredItems.map(item => (
                <Col><StoreItem key={item.id} {...item} /></Col>
            ))}
            
        </Row>

        </>
    )
}
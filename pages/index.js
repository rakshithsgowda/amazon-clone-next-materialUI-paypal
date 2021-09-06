import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        <li>product1</li>
        <li>product2</li>
        <li>product3</li>
      </ul>
    </Layout>
  )
}

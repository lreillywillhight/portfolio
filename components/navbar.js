import Head from 'next/Head'
import Link from 'next/Link'
import {useEffect} from 'react'

export default function Navbar() {

  useEffect(() => {}, [])

  return (
    <div class="parent">
      <Head>
        <title>Louis' Totally Awesome Portfolio</title>
      </Head>
      <navbar>
        <ul>
          <li>
            <Link href="">
              Home
            </Link>
          </li>
          <li>
            <Link href="">
              About
            </Link>
          </li>
          <li>
            <Link href="">
              Be Amazed
            </Link>
          </li>
        </ul>
      </navbar>
    </div>
  )
}
import React from 'react'
import Seo from '../../components/seo'
import { ReactComponent as Pelorus } from '../../images/pelorus.svg'
import CommunityLinks from '../../components/community-links'
import IconBox from '../../components/iconbox'
import Banner from '../../components/banner.js'

export default function PelorusPage() {
  const title = 'Konveyor Pelorus'

  const subheadingStyle =
    'font-headings text-xl lg:text-3xl text-base-800 mt-4 mb-2 lg:mt-8 lg:mb-4'
  const pStyle = 'mb-4 text-base lg:text-lg text-base-600 lg:leading-relaxed'
  const aStyle =
    'underline text-primary-700 visited:text-primary-900 focus:ring-2 focus:ring-primary-600 hover:text-warning-700'

  return (
    <>
      <Seo title={title} />

      <Banner
        title={title}
        header="Measure Software Delivery Performance on Kubernetes"
        text="Prove the value of modernization. With the Pelorus tool, you
        can measure the key metrics to software delivery performance
        (lead time for change, deployment frequency, mean time to
        restore, and change failure rate) and enable metrics driven
        transformation."
        img={<Pelorus alt="" />}
      >
        <p className={`${pStyle} italic`}>
          Only compatible with OpenShift at the moment. Work in progress to
          support upstream Kubernetes compatibility. See why compatibility
          hasn’t been established yet and what the status is in this{' '}
          <a
            href="https://github.com/konveyor/pelorus/projects/9"
            className={aStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub issue
          </a>
          .
        </p>
        <IconBox title="Documentation" url="#" />
        <IconBox title="Get Started" url="#" dark="true" />
      </Banner>

      <section className="z-0 py-12 md:pt-32 md:pb-40 lg:pt-40 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:z-[-1] after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="mb-8 md:mb-0 flex flex-col items-center page-wrapper">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:order-2 md:w-2/5 flex justify-center">
              <Pelorus
                alt=""
                className="max-w-[10rem] text-primary-800 dark:text-white"
              />
            </div>
            <div className="md:w-3/5">
              <h3 className={subheadingStyle}>
                Key metrics Pelorus can focus around Software Delivery
                Performance are:
              </h3>
              <ul className="list">
                <li>Lead time for change</li>
                <li>Deployment frequency</li>
                <li>Mean time to restore</li>
                <li>Change failure rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CommunityLinks />
    </>
  )
}

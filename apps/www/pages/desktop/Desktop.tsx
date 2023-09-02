import { Badge, Button, IconArrowUpRight, IconX, Tabs } from 'ui'
// data
import ApiExamplesData from 'data/products/desktop/api-examples'
import ExtensionsExamplesData from 'data/products/desktop/extensions-examples'
import SqlViewCarouselData from 'data/products/desktop/sql-view-carousel.json'
import SqlViewCarouselData2 from 'data/products/desktop/sql-view-carousel2.json'
import TableViewCarouselData from 'data/products/desktop/table-view-carousel.json'
import Solutions from 'data/Solutions'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.min.css'
import ImageCarousel from '~/components/Carousels/ImageCarousel'
import SplitCodeBlockCarousel from '~/components/Carousels/SplitCodeBlockCarousel'
import FeatureColumn from '~/components/FeatureColumn'
import FloatingIcons from '~/components/FloatingIcons'
import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import ProductIcon from '~/components/ProductIcon'
import APISection from '~/components/Sections/APISection'
import GithubExamples from '~/components/Sections/GithubExamples'
import DesktopContactUs from '~/components/Sections/DesktopContactUs'
import ProductHeader from '~/components/Sections/ProductHeader'
import TweetCard from '~/components/TweetCard'

// install Swiper's Controller component
// SwiperCore.use([Controller])

function Database() {
  // base path for images
  const { basePath } = useRouter()

  const [dashboardSwiper, setDashboardSwiper] = useState(undefined)
  const [dashboardSwiperActiveIndex, setDashboardSwiperActiveIndex] = useState(0)

  function handleDashboardSwiperNav(e: number) {
    setDashboardSwiperActiveIndex(e)
    // @ts-ignore
    dashboardSwiper.slideTo(e)
  }

  const meta_title = 'Hosted Desktop | Store your data on the cloud'
  const meta_description =
    'With computify hosted desktops you can store your data, programs either in windows or linux on the cloud and access it from anywhere.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `https://computify.cloud/database`,
          images: [
            {
              url: `https://computify.cloud${basePath}/images/product/database/database-og.jpg`,
            },
          ],
        }}
      />
      <DefaultLayout>
        <ProductHeader
          icon={Solutions['desktop'].icon}
          title={Solutions['desktop'].name}
          h2={[
            <span key={'database-h1'}>
              Your storage, programs and desktop 
              <br />  - on the cloud ☁️
            </span>,
          ]}
          subheader={[
            'Hosted desktops, whether Windows or Linux systems, reside in the cloud and provide the convenience of accessing a fully functional computer from anywhere via a remote desktop connection',
            'These virtual desktops allow users to run applications, access data, and perform tasks just as they would on a physical computer, offering seamless mobility and productivity while eliminating the need for on-site hardware maintenance.',
          ]}
          image={[
            <div className="header--light block w-full" key="light">
              <Image
                src={`${basePath}/images/product/database/all-server-dark-1.jpg`}
                alt="server header"
                layout="responsive"
                width="1680"
                height="1116"
              />
            </div>,
            <div className="header--dark mr-0 w-full dark:block rounded-lg" key="dark">
              <Image
                src={`${basePath}/images/product/database/all-server-dark-1.jpg`}
                alt="server header"
                layout="responsive"
                width="1680"
                height="1116"
              />
            </div>,
          ]}
          documentation_url={'/docs/guides/desktop'}
        />

        <SectionContainer>
          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-10 lg:col-span-3 lg:mb-0">
              {/* <div className="p mb-4 flex items-center space-x-2">
                <ProductIcon icon={Solutions['desktop'].icon} />
                <IconX />
                <div className="flex w-fit items-center">
                  <Image
                    src={`${basePath}/images/product/database/postgresql-icon.svg`}
                    width={30}
                    height={30}
                    alt="postgresql icon"
                  />
                </div>
              </div> */}
              <h4 className="h4">Scalable</h4>
              {/* <p className="p">Every desktop can be accessible from any computer</p> */}
              <p className="p text-sm">
                Hosted desktop solutions can scale easily to accommodate the changing needs of your business, whether you're adding more users or expanding your computing resources.
              </p>
            </div>
            <div className="col-span-12 mb-10 lg:col-span-3 lg:col-start-5 lg:mb-0">
              {/* <div className="p mb-4 flex items-center space-x-2">
                <ProductIcon icon={Solutions['desktop'].icon} />
                <IconX />
                <ProductIcon icon={Solutions['backup'].icon} />
              </div> */}

              <h4 className="h4">Flexible</h4>
              {/* <p className="p">Leveraging PostgreSQL's proven Row Level Security.</p> */}
              <p className="p text-sm">
                These desktops offer flexibility, enabling users to work from various devices and locations while maintaining the same computing environment and data access.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-9">
              {/* <div className="p mb-4 flex items-center space-x-2">
                <ProductIcon icon={Solutions['desktop'].icon} />
                <IconX />
                <ProductIcon icon={'M13 10V3L4 14h7v7l9-11h-7z'} />
              </div> */}

              <h4 className="h4">Efficient</h4>
              {/* <p className="p">Data-change listeners over websockets.</p> */}
              <p className="p text-sm">
                Hosted desktops streamline operations and make tasks more efficient by allowing users to access their desktop and applications from anywhere with an internet connection.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* <SectionContainer>÷ */}
        <SectionContainer className="text-center md:pb-0 lg:pb-0">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <h2 className="h3">Easy to access your server</h2>

              <p className="p">
                The simplicity to use Remote Desktop Connection or mRemoteNG. Your choice.
              </p>
            </div>
          </div>
        </SectionContainer>
        <div className="grid">
          <div className={'dashboard-tabs sbui-tabs--underline-alt'}>
            <Tabs
              size="xlarge"
              activeId={dashboardSwiperActiveIndex.toString()}
              onChange={(e: string) => handleDashboardSwiperNav(Number(e))}
              type="underlined"
              tabBarStyle={{
                marginBottom: 0,
                // borderBottom: '1px solid #dedede',
              }}
              // block
            >
              <Tabs.Panel id="0" label="Remote Desktop Connection (RDP)">
                <span></span>
              </Tabs.Panel>
              <Tabs.Panel id="1" label="mRemoteNG">
                <span></span>
              </Tabs.Panel>
              <Tabs.Panel id="2" label="RDP for MAC">
                <span></span>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>

        <Swiper
          // @ts-ignore
          onSwiper={setDashboardSwiper}
          style={{ overflow: 'hidden' }}
          initialSlide={0}
          spaceBetween={0}
          slidesPerView={1}
          speed={300}
          allowTouchMove={false}
        >
          <div className="grid grid-cols-12">
            <SwiperSlide key={0}>
              <SectionContainer className="pt-16 pb-0">
                <ImageCarousel
                  content={TableViewCarouselData}
                  footer={[
                    // <TweetCard
                    //   handle="@Elsolo244"
                    //   key="@Elsolo244"
                    //   img_url={`${basePath}/images/twitter-profiles/v6citnk33y2wpeyzrq05_400x400.jpeg`}
                    //   quote="Where has @supabase been all my life? 😍"
                    // />,
                  ]}
                />
              </SectionContainer>
            </SwiperSlide>
            <SwiperSlide key={1}>
              <SectionContainer className="pt-16 pb-0">
                <ImageCarousel
                  content={SqlViewCarouselData}
                  footer={[
                    // <TweetCard
                    //   handle="@jim_bisenius"
                    //   key="@jim_bisenius"
                    //   img_url={`${basePath}/images/twitter-profiles/rLgwUZSB_400x400.jpg`}
                    //   quote="@MongoDB or @MySQL?!?! Please, let me introduce you to @supabase and the wonderful world of @PostgreSQL before it's too late!!"
                    // />,
                  ]}
                />
              </SectionContainer>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <SectionContainer className="pt-16 pb-0">
                <ImageCarousel
                  content={SqlViewCarouselData2}
                  footer={[
                    // <TweetCard
                    //   handle="@jim_bisenius"
                    //   key="@jim_bisenius"
                    //   img_url={`${basePath}/images/twitter-profiles/rLgwUZSB_400x400.jpg`}
                    //   quote="@MongoDB or @MySQL?!?! Please, let me introduce you to @supabase and the wonderful world of @PostgreSQL before it's too late!!"
                    // />,
                  ]}
                />
              </SectionContainer>
            </SwiperSlide>
          </div>
        </Swiper>

        <div className="relative">
          <div className="section--masked">
            <div className="section--bg-masked">
              <div className="section--bg border-t border-b border-gray-100 dark:border-gray-600"></div>
            </div>
            <div className="section-container pt-12 pb-0">
              {/* <FloatingIcons /> */}
              <div className="overflow-x-hidden">
                <SectionContainer className="mb-0 pb-8 lg:pt-32">
                  <DesktopContactUs />
                </SectionContainer>
              </div>
            </div>
          </div>
        </div>

        <SectionContainer className="lg:py-48">
          <div className="grid grid-cols-12 lg:gap-16">
            <div className="col-span-12 mb-8 lg:col-span-6 xl:col-span-5">
              <h2 className="h3">Extend your database</h2>

              <p className="p">Supabase works natively with Postgres extensions.</p>
              <p className="p">
                Choose from a huge collection of Postgres extensions, enabled with a single click.
              </p>

              <FeatureColumn
                title="40+ preinstalled extensions"
                text="We only show a few of the extensions supported by supabase here, but we preinstall many more that you can use right away."
              />
              <Link href="/docs/guides/database" passHref>
                <a>
                  <Button size="small" type="default" icon={<IconArrowUpRight />}>
                    Explore documentation
                  </Button>
                </a>
              </Link>
            </div>
            <div className="col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
              <SplitCodeBlockCarousel
                // @ts-ignore
                content={ExtensionsExamplesData}
              />
            </div>
          </div>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default Database

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Lorenzo Zaccagnini.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Home'

    },

  ],
  postFooter: (
    <div style={{ display: 'block', marginTop: '8rem' }}>
      ciao
    </div>
  )


}

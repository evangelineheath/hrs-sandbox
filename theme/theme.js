const palette = {
  white: '#ffffff',
  white50: '#ffffff80',
  white80: '#ffffffCC',
  gray: '#36393D',
  lightGray: '#35353A80',
  offBlack: '#161616',
  offBlack20: '#16161633',
  offBlack50: '#16161680',
  offBlack80: '#161616CC',
  black: '#000000',
  bone: '#F5F3F3',
  darkBone: '#F6F1EE',
  funnyName: '#ff0000',
}

const theme = {
  breakpoints: ['648px', '960px', '1280px', '1920px'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 72, 80, 128, 256, 512],
  fonts: {
    body: 'GranbyEF, system-ui, sans-serif',
    heading: 'inherit',
    accent: 'Playfair Display, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    tight: 1.0,
    body: 1.3125,
    heading: 1.125,
    expanded: 1.5,
  },
  initialColorModeName: 'light',
  colors: {
    ...palette,
    text: palette.offBlack,
    background: palette.bone,
    primary: palette.offBlack,
    accent: palette.white,
    muted: palette.gray,
    superMuted: palette.lightGray,
    softPrimary: palette.offBlack20,
    softSecondary: palette.offBlack50,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    title: {
      fontFamily: 'heading',
      fontSize: [4, 5, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontFamily: 'accent',
      fontSize: [3, 3, 3, 4],
      fontStyle: 'italic',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
    emphasis: {
      fontWeight: 'bold',
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'light',
      fontSize: 2,
      lineHeight: 'body',
      textTransform: 'uppercase',
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'expanded',
    },
    tiny: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
    },
    tinyLight: {
      variant: 'text.tiny',
      fontWeight: 'light',
    },
    micro: {
      fontFamily: 'body',
      fontWeight: 'light',
      fontSize: 0,
      lineHeight: 'heading',
      textTransform: 'uppercase'
    },
    microBold: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
      textTransform: 'uppercase'
    }
  },
  shadows: {
    0: 'none',
    cardHover: 'inset 8px 8px 0px 0 #FFFFFF, inset -8px -8px 0px 0 #FFFFFF, 0px 3px 22px #00000059',
  },
  transitions: {
    perk: '0.1s transform ease-out',
    slide: '0.25s transform ease-in-out',
  },
  styles: {
    root: {
      color: 'text',
      backgroundColor: 'background',
      fontFamily: 'body',
      fontSize: '1rem',
      fontWeight: 'body',
      lineHeight: 'body',
      margin: 0,
      minHeight: '100%',
      padding: 0,
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      'a': {
        color: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'none',
      },
      'svg': {
        display: 'block',
      },
      'body': {
        overflowY: 'auto',
        overflowX: 'hidden',
      },
      ['.slide-enter section']: {
        transform: 'translateX(100%)',
      },
      ['.slide-enter.slide-enter-active section']: {
        transform: 'translateX(0%)',
        transition: 'slide',
      },
      ['.slide-leave section']: {
        transform: 'translateX(0%)',
      },
      ['.slide-leave.slide-leave-active section']: {
        transform: 'translateX(100%)',
        transition: 'slide',
      }
    },
    p: {
      marginBlockStart: 0,
      marginBlockEnd: 2,
      mt: 0,
      mb: 2,
    },
    ul: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 5, 6],
      textTransform: 'uppercase',
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 4, 5],
      textTransform: 'uppercase',
    },
    h3: {
      variant: 'text.heading',
      fontSize: [3, 3, 4],
      textTransform: 'uppercase',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
      textTransform: 'uppercase',
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
      textTransform: 'uppercase',
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    hr: {
      width: '100%',
      height: '1px',
      my: 2,
      opacity: 0.5,
    }
  },
  layout: {
    footer: {
      color: 'accent',
      backgroundColor: 'primary',
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 'heading',
      a: {
        cursor: 'pointer',
      }
    },
    header: {
      color: ['darkBone', 'darkBone', 'white'],
      fontSize: 2,
      fontWeight: '700',
      lineHeight: 'tight',
      textTransform: 'uppercase',
      dark: {
        backgroundColor: 'black',
      },
      links: {
        borderBottom: '2px solid',
        borderColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
          borderBottom: '2px solid',
          borderColor: 'white',
          cursor: 'pointer',
        },
        active: {
          borderBottom: '2px solid',
          borderColor: 'white',
          cursor: 'default',
        },
        accent: {
          backgroundColor: 'white',
          borderBottom: '2px solid',
          borderColor: 'transparent',
          borderRadius: '2px 0px 0px 2px',
          color: 'black',
          cursor: 'pointer',
          position: 'relative',
          '&:hover': {
            backgroundColor: 'white80',
            '&::after': {
              backgroundColor: 'white80',
            },
          },
          '&:active': {
            backgroundColor: 'white50',
            '&::after': {
              backgroundColor: 'white50',
            },
          },
          '&::after': {
            width: 'auto',
            height: 'calc(100% - 2px)',
            backgroundColor: 'white',
            borderBottom: '2px solid',
            borderColor: 'transparent',
            borderRadius: '0px 2px 2px 0px',
            content: '"→"',
            display: 'block',
            ml: '100%',
            position: 'absolute',
            top: 0, left: 0,
            pr: '2px',
            pt: '2px'
          },
          active: {
            backgroundColor: 'white',
            borderBottom: '2px solid',
            borderColor: 'transparent',
            color: 'black',
            cursor: 'default',
          },
        },
        outline: {
          border: '1px solid white',
          borderRadius: '2px',
          cursor: 'pointer',
          '&:hover': {
            bg: '#FFFFFF33',
            cursor: 'pointer',
          },
          active: {
            bg: '#FFFFFF50',
            border: '1px solid white',
            borderRadius: '2px',
          }
        }
      },
      menu: {
        backgroundColor: 'black',
        fontSize: 3,
        fontWeight: 'body',
        lineHeight: 'expanded',
        opacity: '1',
        transition: 'slide',
        a: {
          cursor: 'pointer',
        },
        count: {
          backgroundColor: 'accent',
          color: 'primary',
          fontSize: '9px',
        },
      },
    },
    hero: {
      color: 'accent',
      homepage: {
        h1: {
          variant: 'text.title',
          textAlign: 'center',
        },
        span: {
          variant: 'text.subtitle',
          textAlign: 'center',
        }
      },
      collection: {
        h1: {
          variant: 'text.heading',
          fontSize: [5, 5, 6],
          textAlign: 'center',
          textTransform: 'uppercase',
        },
        span: {
          variant: 'text.subtitle',
          textAlign: 'center',
        }
      }
    },
    main: {
      color: 'muted',
      fontSize: 1,
      fontWeight: 400,
    },
    dark: {
      backgroundColor: 'offBlack',
      color: 'accent',
    },
    sidebar: {
      transition: 'slide',
      background: {
        backgroundColor: 'black',
        opacity: 0.3,
      },
      cart: {
        backgroundColor: 'white',
        empty: {
          backgroundImage: "url('/campaign/fw21/301.jpg')",
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'white',
        },
        header: {
          color: 'white',
          backgroundColor: 'black',
          '& > div > span': {
            variant: 'text.small',
            opacity: 0.5,
          }
        },
        content: {
          color: 'offBlack',
          light: {
            fontSize: [1, 2],
            fontWeight: 'light',
          },
          note: {
            variant: 'text.tiny',
            color: 'offBlack50',
            a: {
              textDecoration: 'underline',
              cursor: 'pointer',
            }
          }
        }
      },
    },
    /** PAGES */
    product: {
      backgroundColor: ['offBlack', 'white'],
      borderLeft: '1px solid',
      borderColor: 'offBlack20',
      color: ['white', 'inherit'],
      description: {
        title: {
          variant: 'styles.h1',
          fontSize: [4, 5, 5, 6],
        },
        notice: {
          borderTop: ['none', '1px solid'],
          borderBottom: ['none', '1px solid'],
          borderColor: 'offBlack20',
          color: 'offBlack50',
        },
        reminder: {
          variant: 'text.tiny',  
        },
        details: {
          fontSize: 1,
          textTransform: 'uppercase',
        },
        '& p, ul': {
          mb: 2,
          marginBlockStart: 0,
          marginBlockEnd: 2,
          mt: 0,
        }
      },
      card: {
        details: {
          fontSize: 1,
          fontWeight: 'body',
          textTransform: 'uppercase',
        },
      },
    },
    collection: {
      card: {
        backgroundColor: 'background',
        borderLeft: '1px solid',
        borderTop: '1px solid',
        borderColor: '#16161620',
        position: 'relative',
        transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        '&::after': {
          boxShadow: [0, 'cardHover'],
          content: '""',
          display: ['none', 'block'],
          height: '100%',
          left: 0,
          opacity: 0,
          position: 'absolute',
          top: 0,
          transition: 'opacity 0.5s ease-in',
          width: '100%',
          zIndex: '-1',
        },
        '&:hover': {
          borderColor: ['#16161620', '#16161600'],
          transform: ['none', 'scale(1.05, 1.05)'],
          zIndex: [null, '5'],
        },
        '&:hover::after': {
          opacity: 1,
        },
        a: {
          '&:hover': {
            opacity: 1,
          },
        },
        description: {
          color: 'superMuted',
        }
      },
    },
    selector: {
      borders: {
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'offBlack20'
      },
      size: {
        cursor: 'pointer',
        fontSize: 2,
        '&:hover': {
          borderBottom: '1px solid',
          borderColor: 'offBlack',
          fontSize: 2,
        },
        active: {
          cursor: 'default',
          borderBottom: '1px solid',
          borderColor: 'offBlack',
          fontSize: 2,
        },
        disabled: {
          cursor: 'default',
          color: 'offBlack20',
          fontSize: 2,
        }
      },
      swatch: {
        border: '1px solid #ffffff00',
        boxShadow: '1px 1px 1px #00000040',
        transition: 'perk',
        cursor: 'pointer',
        '&:hover': {
          border: '1px solid #ffffff40',
          boxShadow: '1px 1px 1px #00000040, 0px 2px 4px #00000029',
          transform: 'translateY(-1px)',
        },
        active: {
          border: '1px solid white',
          boxShadow: '0px 3px 6px #00000029',
          cursor: 'default',
        }
      }
    },
  },
  pages: {
    contact: {
      list: {
        lineHeight: 'expanded',
        'a': {
          opacity: 0.5,
        },
      }
    },
    // todo: move product & collection page-specific styles here
  },
  // todo: create cards: {} styles & move all product card, etc.
  // todo: create ui styles & move selector, etc.
  affirm: {
    primary: {
      color: 'offBlack80',
    }
  },
  badges: {
    primary: {
      bg: 'primary',
      px: 2,
      py: 1,
      textTransform: 'uppercase',
    },
    outline: {
      bg: 'transparent',
      color: 'offBlack80',
      border: '1px solid',
      px: 2,
      py: 1,
      textTransform: 'uppercase',
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      border: 0,
      borderRadius: 0,
      color: 'accent',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'tight',
      outline: 'none',
      textTransform: 'uppercase',
      small: {
        fontSize: 0,
      },
      disabled: {
        opacity: 0.2,
        '&:hover': {
          bg: 'offBlack',
        },
        '&:active': {
          bg: 'offBlack',
        },
      },
      '&:hover': {
        bg: 'offBlack80',
      },
      '&:active': {
        bg: 'offBlack50',
      }
    },
    accent: {
      backdropFilter: 'blur(31px)',
      backgroundColor: '#FFFFFF33',
      border: '1px solid',
      borderRadius: 0,
      color: 'accent',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'tight',
      outline: 'none',
      textTransform: 'uppercase',
      small: {
        fontSize: 0,
      },
      disabled: {
        opacity: 0.2,
      },
      '&:hover': {
        bg: '#FFFFFF50',
      },
      '&:active': {
        bg: '#FFFFFF50',
      },
    },
    transparent: {
      variant: 'buttons.accent',
      bg: 'transparent',
      backdropFilter: 'none',
      small: {
        fontSize: 0,
      },
      disabled: {
        opacity: 0.2,
      },
      '&:hover': {
        bg: '#FFFFFF33',
      },
      '&:active': {
        bg: '#FFFFFF33',
      },
    },
  },
  forms: {
    input: {
      border: 'none',
      background: 'none',
      lineHeight: 1,
      '&:focus': {
        outlineColor: 'lightGray',
      },
      search: {
        background: '#1A1A1A',
        border: '2px solid #1A1A1A',
        borderRadius: '50px',
        fontWeight: 'light',
        lineHeight: 1,
        variant: 'text.tiny',
        '&:focus': {
          borderColor: 'gray',
          outline: 'none',
        },
      }
    },
    label: {
      display: 'none',
    },
    newsletter: {
      color: 'accent',
      textAlign: 'center',
      subtitle: {
        fontFamily: 'accent',
        fontSize: 2,
        fontStyle: 'italic',
        fontWeight: 'body',
      },
      input: {
        borderBottom: '1px solid',
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderRadius: 0,
        fontWeight: 'light',
        mt: '1px',
        textAlign: 'center',
        variant: 'text.tiny',
        '&::placeholder': {
          color: 'inherit',
          opacity: 0.5,
        },
        '&:focus': {
          border: '1px solid',
          mt: 0,
          outline: 'none',
        },
      },
      modal: {
        backdropFilter: 'blur(31px)',        
        backgroundColor: 'offBlack80',
        boxShadow: ['none', 'none', 'cardHover'],
        color: 'accent',
      },
    }
  },
  links: {
    footer: {
      borderBottom: ['1px solid #434343', 'none'],
    },
    tabs: {
      variant: 'text.micro',
      fontWeight: 'body',
      opacity: 0.5,
      active: {
        borderBottom: '1px solid',
        variant: 'text.micro',
        fontWeight: 'body',
        opacity: 1.0,
      }
    }
  },
  spinner: {
    color: 'white',
  }
}

export default theme
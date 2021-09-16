
import tokens from './src/styles/tokens';
tokens.color.base.gray.dark;

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/module-declarations',
          options: {
            outputReferences: true
          }
        }
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'build/android/',
      files: [{
        destination: 'font_dimens.xml',
        format: 'android/fontDimens'
      },{
        destination: 'colors.xml',
        format: 'android/colors'
      }]
    },
    compose: {
      transformGroup: 'compose',
      buildPath: 'build/compose/',
      files: [{
        destination: 'StyleDictionaryColor.kt',
        format: 'compose/object',
        className: 'StyleDictionaryColor',
        packageName: 'StyleDictionaryColor',
        filter: {
          attributes: {
            category: 'color'
          }
        }
      },{
        destination: 'StyleDictionarySize.kt',
        format: 'compose/object',
        className: 'StyleDictionarySize',
        packageName: 'StyleDictionarySize',
        type: 'float',
        filter: {
          attributes: {
            category: 'size'
          }
        }
      }]
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'build/ios/',
      files: [{
        destination: 'StyleDictionaryColor.h',
        format: 'ios/colors.h',
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        filter: {
          attributes: {
            category: 'color'
          }
        }
      },{
        destination: 'StyleDictionaryColor.m',
        format: 'ios/colors.m',
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        filter: {
          attributes: {
            category: 'color'
          }
        }
      },{
        destination: 'StyleDictionarySize.h',
        format: 'ios/static.h',
        className: 'StyleDictionarySize',
        type: 'float',
        filter: {
          attributes: {
            category: 'size'
          }
        }
      },{
        destination: 'StyleDictionarySize.m',
        format: 'ios/static.m',
        className: 'StyleDictionarySize',
        type: 'float',
        filter: {
          attributes: {
            category: 'size'
          }
        }
      }]
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios-swift/',
      files: [{
        destination: 'StyleDictionary.swift',
        format: 'ios-swift/class.swift',
        className: 'StyleDictionary',
        filter: {}
      }]
    },
    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build/ios-swift/',
      files: [{
        destination: 'StyleDictionaryColor.swift',
        format: 'ios-swift/enum.swift',
        className: 'StyleDictionaryColor',
        filter: {
          attributes: {
            category: 'color'
          }
        }
      },{
        destination: 'StyleDictionarySize.swift',
        format: 'ios-swift/enum.swift',
        className: 'StyleDictionarySize',
        type: 'float',
        filter: {
          attributes: {
            category: 'size'
          }
        }
      }]
    }
  }
}

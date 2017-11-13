(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["graphql-query-client"] = factory();
	else
		root["graphql-query-client"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1yl0nsadnz = function () {
  var path = '/home/mike/Downloads/graphql-query/src/lib/config.js',
      hash = 'd3ea08d700e75e2db9b60a8e40dbc92fae470376',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/home/mike/Downloads/graphql-query/src/lib/config.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 1,
          column: 131
        }
      },
      '1': {
        start: {
          line: 2,
          column: 35
        },
        end: {
          line: 2,
          column: 142
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var queryLockMessage = exports.queryLockMessage = (cov_1yl0nsadnz.s[0]++, 'The request should not update, use forceFetch or set smartFetch:false in the environement options');
var mutationLockMessage = exports.mutationLockMessage = (cov_1yl0nsadnz.s[1]++, 'The mutation should not be executed, use forceMutate or set smartMutate:false in the environement options');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_2iij6q36ug = function () {
    var path = '/home/mike/Downloads/graphql-query/src/GraphQLHandler.js',
        hash = 'fe5a00108eb3afdb51bdfced04abfe62829e6d7c',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/home/mike/Downloads/graphql-query/src/GraphQLHandler.js',
        statementMap: {
            '0': {
                start: {
                    line: 7,
                    column: 35
                },
                end: {
                    line: 7,
                    column: 68
                }
            },
            '1': {
                start: {
                    line: 8,
                    column: 8
                },
                end: {
                    line: 8,
                    column: 25
                }
            },
            '2': {
                start: {
                    line: 9,
                    column: 8
                },
                end: {
                    line: 11,
                    column: 31
                }
            },
            '3': {
                start: {
                    line: 12,
                    column: 8
                },
                end: {
                    line: 12,
                    column: 30
                }
            },
            '4': {
                start: {
                    line: 15,
                    column: 8
                },
                end: {
                    line: 15,
                    column: 27
                }
            },
            '5': {
                start: {
                    line: 16,
                    column: 8
                },
                end: {
                    line: 16,
                    column: 38
                }
            },
            '6': {
                start: {
                    line: 17,
                    column: 8
                },
                end: {
                    line: 17,
                    column: 20
                }
            },
            '7': {
                start: {
                    line: 20,
                    column: 8
                },
                end: {
                    line: 20,
                    column: 37
                }
            },
            '8': {
                start: {
                    line: 21,
                    column: 8
                },
                end: {
                    line: 21,
                    column: 39
                }
            },
            '9': {
                start: {
                    line: 22,
                    column: 8
                },
                end: {
                    line: 22,
                    column: 45
                }
            },
            '10': {
                start: {
                    line: 23,
                    column: 8
                },
                end: {
                    line: 23,
                    column: 20
                }
            },
            '11': {
                start: {
                    line: 26,
                    column: 8
                },
                end: {
                    line: 31,
                    column: 11
                }
            },
            '12': {
                start: {
                    line: 37,
                    column: 12
                },
                end: {
                    line: 37,
                    column: 19
                }
            },
            '13': {
                start: {
                    line: 38,
                    column: 8
                },
                end: {
                    line: 38,
                    column: 48
                }
            },
            '14': {
                start: {
                    line: 39,
                    column: 8
                },
                end: {
                    line: 41,
                    column: 9
                }
            },
            '15': {
                start: {
                    line: 40,
                    column: 12
                },
                end: {
                    line: 40,
                    column: 37
                }
            },
            '16': {
                start: {
                    line: 42,
                    column: 8
                },
                end: {
                    line: 42,
                    column: 20
                }
            },
            '17': {
                start: {
                    line: 45,
                    column: 26
                },
                end: {
                    line: 45,
                    column: 64
                }
            },
            '18': {
                start: {
                    line: 47,
                    column: 8
                },
                end: {
                    line: 49,
                    column: 9
                }
            },
            '19': {
                start: {
                    line: 48,
                    column: 12
                },
                end: {
                    line: 48,
                    column: 24
                }
            },
            '20': {
                start: {
                    line: 50,
                    column: 8
                },
                end: {
                    line: 50,
                    column: 30
                }
            },
            '21': {
                start: {
                    line: 51,
                    column: 8
                },
                end: {
                    line: 51,
                    column: 32
                }
            },
            '22': {
                start: {
                    line: 53,
                    column: 8
                },
                end: {
                    line: 53,
                    column: 36
                }
            },
            '23': {
                start: {
                    line: 55,
                    column: 8
                },
                end: {
                    line: 55,
                    column: 20
                }
            },
            '24': {
                start: {
                    line: 57,
                    column: 22
                },
                end: {
                    line: 57,
                    column: 46
                }
            },
            '25': {
                start: {
                    line: 58,
                    column: 23
                },
                end: {
                    line: 58,
                    column: 48
                }
            },
            '26': {
                start: {
                    line: 59,
                    column: 22
                },
                end: {
                    line: 59,
                    column: 46
                }
            },
            '27': {
                start: {
                    line: 61,
                    column: 8
                },
                end: {
                    line: 61,
                    column: 30
                }
            },
            '28': {
                start: {
                    line: 62,
                    column: 8
                },
                end: {
                    line: 62,
                    column: 20
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 6,
                        column: 4
                    },
                    end: {
                        line: 6,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 44
                    },
                    end: {
                        line: 13,
                        column: 5
                    }
                },
                line: 6
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 14,
                        column: 15
                    },
                    end: {
                        line: 14,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 14,
                        column: 26
                    },
                    end: {
                        line: 18,
                        column: 5
                    }
                },
                line: 14
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 19,
                        column: 21
                    },
                    end: {
                        line: 19,
                        column: 22
                    }
                },
                loc: {
                    start: {
                        line: 19,
                        column: 38
                    },
                    end: {
                        line: 24,
                        column: 5
                    }
                },
                line: 19
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 25,
                        column: 18
                    },
                    end: {
                        line: 25,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 25,
                        column: 30
                    },
                    end: {
                        line: 32,
                        column: 5
                    }
                },
                line: 25
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 33,
                        column: 17
                    },
                    end: {
                        line: 33,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 33,
                        column: 30
                    },
                    end: {
                        line: 43,
                        column: 5
                    }
                },
                line: 33
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 44,
                        column: 16
                    },
                    end: {
                        line: 44,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 44,
                        column: 28
                    },
                    end: {
                        line: 56,
                        column: 5
                    }
                },
                line: 44
            },
            '6': {
                name: '(anonymous_6)',
                decl: {
                    start: {
                        line: 57,
                        column: 16
                    },
                    end: {
                        line: 57,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 57,
                        column: 22
                    },
                    end: {
                        line: 57,
                        column: 46
                    }
                },
                line: 57
            },
            '7': {
                name: '(anonymous_7)',
                decl: {
                    start: {
                        line: 58,
                        column: 17
                    },
                    end: {
                        line: 58,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 58,
                        column: 23
                    },
                    end: {
                        line: 58,
                        column: 48
                    }
                },
                line: 58
            },
            '8': {
                name: '(anonymous_8)',
                decl: {
                    start: {
                        line: 59,
                        column: 16
                    },
                    end: {
                        line: 59,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 59,
                        column: 22
                    },
                    end: {
                        line: 59,
                        column: 46
                    }
                },
                line: 59
            },
            '9': {
                name: '(anonymous_9)',
                decl: {
                    start: {
                        line: 60,
                        column: 13
                    },
                    end: {
                        line: 60,
                        column: 14
                    }
                },
                loc: {
                    start: {
                        line: 60,
                        column: 19
                    },
                    end: {
                        line: 63,
                        column: 5
                    }
                },
                line: 60
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 7,
                        column: 35
                    },
                    end: {
                        line: 7,
                        column: 68
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 7,
                        column: 35
                    },
                    end: {
                        line: 7,
                        column: 46
                    }
                }, {
                    start: {
                        line: 7,
                        column: 50
                    },
                    end: {
                        line: 7,
                        column: 68
                    }
                }],
                line: 7
            },
            '1': {
                loc: {
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 41,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 41,
                        column: 9
                    }
                }, {
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 41,
                        column: 9
                    }
                }],
                line: 39
            },
            '2': {
                loc: {
                    start: {
                        line: 47,
                        column: 8
                    },
                    end: {
                        line: 49,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 47,
                        column: 8
                    },
                    end: {
                        line: 49,
                        column: 9
                    }
                }, {
                    start: {
                        line: 47,
                        column: 8
                    },
                    end: {
                        line: 49,
                        column: 9
                    }
                }],
                line: 47
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0
        },
        b: {
            '0': [0, 0],
            '1': [0, 0],
            '2': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _axiosRequestHandler = __webpack_require__(7);

var _axiosRequestHandler2 = _interopRequireDefault(_axiosRequestHandler);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _Environment = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphQLHandler = function GraphQLHandler(query, params, environment) {
    _classCallCheck(this, GraphQLHandler);

    _initialiseProps.call(this);

    cov_2iij6q36ug.f[0]++;

    var currentEnvironment = (cov_2iij6q36ug.s[0]++, (cov_2iij6q36ug.b[0][0]++, environment) || (cov_2iij6q36ug.b[0][1]++, _Environment.defaultEnvironment));
    cov_2iij6q36ug.s[1]++;
    this.params = {};
    cov_2iij6q36ug.s[2]++;
    this.setEnvironment(currentEnvironment).setQuery(query).setParams(params);
    cov_2iij6q36ug.s[3]++;
    this.canUpdate = true;
};

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.setQuery = function (query) {
        cov_2iij6q36ug.f[1]++;
        cov_2iij6q36ug.s[4]++;

        _this.query = query;
        cov_2iij6q36ug.s[5]++;
        _this.resetParams(_this.params);
        cov_2iij6q36ug.s[6]++;
        return _this;
    };

    this.setEnvironment = function (environment) {
        cov_2iij6q36ug.f[2]++;
        cov_2iij6q36ug.s[7]++;

        _this.request = new _axiosRequestHandler2.default();
        cov_2iij6q36ug.s[8]++;
        _this.environment = environment;
        cov_2iij6q36ug.s[9]++;
        _this.setOptions(environment.options);
        cov_2iij6q36ug.s[10]++;
        return _this;
    };

    this.resetParams = function (params) {
        cov_2iij6q36ug.f[3]++;
        cov_2iij6q36ug.s[11]++;

        _this.setOptions({
            params: {
                query: _this.query,
                variables: params
            }
        });
    };

    this.setOptions = function (options) {
        cov_2iij6q36ug.f[4]++;

        var _ref = (cov_2iij6q36ug.s[12]++, options),
            url = _ref.url,
            requestOptions = _objectWithoutProperties(_ref, ['url']);

        cov_2iij6q36ug.s[13]++;

        _this.request.setOptions(requestOptions);
        cov_2iij6q36ug.s[14]++;
        if (url) {
            cov_2iij6q36ug.b[1][0]++;
            cov_2iij6q36ug.s[15]++;

            _this.request.setUrl(url);
        } else {
            cov_2iij6q36ug.b[1][1]++;
        }
        cov_2iij6q36ug.s[16]++;
        return _this;
    };

    this.setParams = function (params) {
        cov_2iij6q36ug.f[5]++;

        var newParams = (cov_2iij6q36ug.s[17]++, Object.assign({}, _this.params, params));

        cov_2iij6q36ug.s[18]++;
        if ((0, _lodash2.default)(_this.params, newParams)) {
            cov_2iij6q36ug.b[2][0]++;
            cov_2iij6q36ug.s[19]++;

            return _this;
        } else {
            cov_2iij6q36ug.b[2][1]++;
        }
        cov_2iij6q36ug.s[20]++;
        _this.canUpdate = true;
        cov_2iij6q36ug.s[21]++;
        _this.params = newParams;

        cov_2iij6q36ug.s[22]++;
        _this.resetParams(newParams);

        cov_2iij6q36ug.s[23]++;
        return _this;
    };

    this.isPending = function () {
        cov_2iij6q36ug.f[6]++;
        cov_2iij6q36ug.s[24]++;
        return _this.request.isPending();
    };

    this.isUpdating = function () {
        cov_2iij6q36ug.f[7]++;
        cov_2iij6q36ug.s[25]++;
        return _this.request.isUpdating();
    };

    this.isPolling = function () {
        cov_2iij6q36ug.f[8]++;
        cov_2iij6q36ug.s[26]++;
        return _this.request.isPolling();
    };

    this.cancel = function () {
        cov_2iij6q36ug.f[9]++;
        cov_2iij6q36ug.s[27]++;

        _this.request.cancel();
        cov_2iij6q36ug.s[28]++;
        return _this;
    };
};

exports.default = GraphQLHandler;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_1236iycmw7 = function () {
    var path = "/home/mike/Downloads/graphql-query/src/Environment.js",
        hash = "293cc6ad6ac5ede810ad6bbd135b1cfc2924a933",
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/home/mike/Downloads/graphql-query/src/Environment.js",
        statementMap: {
            "0": {
                start: {
                    line: 3,
                    column: 8
                },
                end: {
                    line: 3,
                    column: 26
                }
            },
            "1": {
                start: {
                    line: 4,
                    column: 8
                },
                end: {
                    line: 4,
                    column: 33
                }
            },
            "2": {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 64
                }
            },
            "3": {
                start: {
                    line: 11,
                    column: 34
                },
                end: {
                    line: 11,
                    column: 51
                }
            },
            "4": {
                start: {
                    line: 13,
                    column: 32
                },
                end: {
                    line: 15,
                    column: 1
                }
            },
            "5": {
                start: {
                    line: 14,
                    column: 4
                },
                end: {
                    line: 14,
                    column: 43
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 2,
                        column: 4
                    },
                    end: {
                        line: 2,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 2,
                        column: 25
                    },
                    end: {
                        line: 5,
                        column: 5
                    }
                },
                line: 2
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 6,
                        column: 17
                    },
                    end: {
                        line: 6,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 35
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                line: 6
            },
            "2": {
                name: "(anonymous_2)",
                decl: {
                    start: {
                        line: 13,
                        column: 32
                    },
                    end: {
                        line: 13,
                        column: 33
                    }
                },
                loc: {
                    start: {
                        line: 13,
                        column: 45
                    },
                    end: {
                        line: 15,
                        column: 1
                    }
                },
                line: 13
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 6,
                        column: 18
                    },
                    end: {
                        line: 6,
                        column: 30
                    }
                },
                type: "default-arg",
                locations: [{
                    start: {
                        line: 6,
                        column: 28
                    },
                    end: {
                        line: 6,
                        column: 30
                    }
                }],
                line: 6
            }
        },
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0
        },
        f: {
            "0": 0,
            "1": 0,
            "2": 0
        },
        b: {
            "0": [0]
        },
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = function Environment(options) {
    _classCallCheck(this, Environment);

    _initialiseProps.call(this);

    cov_1236iycmw7.f[0]++;
    cov_1236iycmw7.s[0]++;

    this.options = {};
    cov_1236iycmw7.s[1]++;
    this.setOptions(options);
};

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.setOptions = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1236iycmw7.b[0][0]++, {});
        cov_1236iycmw7.f[1]++;
        cov_1236iycmw7.s[2]++;

        _this.options = Object.assign({}, _this.options, options);
    };
};

exports.default = Environment;
var defaultEnvironment = exports.defaultEnvironment = (cov_1236iycmw7.s[3]++, new Environment());

cov_1236iycmw7.s[4]++;
var setupEnvironment = exports.setupEnvironment = function setupEnvironment(options) {
    cov_1236iycmw7.f[2]++;
    cov_1236iycmw7.s[5]++;

    defaultEnvironment.setOptions(options);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupEnvironment = exports.Environment = exports.GraphQLMutation = exports.GraphQLQuery = undefined;

var cov_za0gmvd07 = function () {
    var path = '/home/mike/Downloads/graphql-query/src/index.js',
        hash = 'd9df8af16b07d23986a703a6729de36e45685c0c',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/home/mike/Downloads/graphql-query/src/index.js',
        statementMap: {},
        fnMap: {},
        branchMap: {},
        s: {},
        f: {},
        b: {},
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _GraphQLQuery = __webpack_require__(6);

var _GraphQLQuery2 = _interopRequireDefault(_GraphQLQuery);

var _GraphQLMutation = __webpack_require__(10);

var _GraphQLMutation2 = _interopRequireDefault(_GraphQLMutation);

var _Environment = __webpack_require__(3);

var _Environment2 = _interopRequireDefault(_Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GraphQLQuery = _GraphQLQuery2.default;
exports.GraphQLMutation = _GraphQLMutation2.default;
exports.Environment = _Environment2.default;
exports.setupEnvironment = _Environment.setupEnvironment;
exports.default = {
    GraphQLQuery: _GraphQLQuery2.default,
    GraphQLMutation: _GraphQLMutation2.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_z2viznurf = function () {
    var path = '/home/mike/Downloads/graphql-query/src/GraphQLQuery.js',
        hash = '48d3eab9093161d5d50072dcaca4dbad320f3c02',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/home/mike/Downloads/graphql-query/src/GraphQLQuery.js',
        statementMap: {
            '0': {
                start: {
                    line: 5,
                    column: 25
                },
                end: {
                    line: 5,
                    column: 39
                }
            },
            '1': {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 32
                }
            },
            '2': {
                start: {
                    line: 8,
                    column: 8
                },
                end: {
                    line: 21,
                    column: 11
                }
            },
            '3': {
                start: {
                    line: 10,
                    column: 16
                },
                end: {
                    line: 10,
                    column: 36
                }
            },
            '4': {
                start: {
                    line: 11,
                    column: 16
                },
                end: {
                    line: 17,
                    column: 17
                }
            },
            '5': {
                start: {
                    line: 16,
                    column: 20
                },
                end: {
                    line: 16,
                    column: 45
                }
            },
            '6': {
                start: {
                    line: 18,
                    column: 16
                },
                end: {
                    line: 18,
                    column: 39
                }
            },
            '7': {
                start: {
                    line: 19,
                    column: 16
                },
                end: {
                    line: 19,
                    column: 55
                }
            },
            '8': {
                start: {
                    line: 24,
                    column: 8
                },
                end: {
                    line: 26,
                    column: 9
                }
            },
            '9': {
                start: {
                    line: 25,
                    column: 12
                },
                end: {
                    line: 25,
                    column: 39
                }
            },
            '10': {
                start: {
                    line: 27,
                    column: 8
                },
                end: {
                    line: 27,
                    column: 28
                }
            },
            '11': {
                start: {
                    line: 30,
                    column: 8
                },
                end: {
                    line: 32,
                    column: 9
                }
            },
            '12': {
                start: {
                    line: 31,
                    column: 12
                },
                end: {
                    line: 31,
                    column: 75
                }
            },
            '13': {
                start: {
                    line: 33,
                    column: 8
                },
                end: {
                    line: 33,
                    column: 34
                }
            },
            '14': {
                start: {
                    line: 36,
                    column: 8
                },
                end: {
                    line: 42,
                    column: 9
                }
            },
            '15': {
                start: {
                    line: 41,
                    column: 12
                },
                end: {
                    line: 41,
                    column: 37
                }
            },
            '16': {
                start: {
                    line: 43,
                    column: 8
                },
                end: {
                    line: 43,
                    column: 31
                }
            },
            '17': {
                start: {
                    line: 44,
                    column: 8
                },
                end: {
                    line: 44,
                    column: 33
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 5,
                        column: 19
                    },
                    end: {
                        line: 5,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 25
                    },
                    end: {
                        line: 5,
                        column: 39
                    }
                },
                line: 5
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 6,
                        column: 11
                    },
                    end: {
                        line: 6,
                        column: 12
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 40
                    },
                    end: {
                        line: 22,
                        column: 5
                    }
                },
                line: 6
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 9,
                        column: 19
                    },
                    end: {
                        line: 9,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 9,
                        column: 44
                    },
                    end: {
                        line: 20,
                        column: 13
                    }
                },
                line: 9
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 23,
                        column: 14
                    },
                    end: {
                        line: 23,
                        column: 15
                    }
                },
                loc: {
                    start: {
                        line: 23,
                        column: 20
                    },
                    end: {
                        line: 28,
                        column: 5
                    }
                },
                line: 23
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 29,
                        column: 17
                    },
                    end: {
                        line: 29,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 29,
                        column: 23
                    },
                    end: {
                        line: 34,
                        column: 5
                    }
                },
                line: 29
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 35,
                        column: 12
                    },
                    end: {
                        line: 35,
                        column: 13
                    }
                },
                loc: {
                    start: {
                        line: 35,
                        column: 18
                    },
                    end: {
                        line: 45,
                        column: 5
                    }
                },
                line: 35
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 6,
                        column: 12
                    },
                    end: {
                        line: 6,
                        column: 35
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 6,
                        column: 19
                    },
                    end: {
                        line: 6,
                        column: 35
                    }
                }],
                line: 6
            },
            '1': {
                loc: {
                    start: {
                        line: 9,
                        column: 20
                    },
                    end: {
                        line: 9,
                        column: 39
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 9,
                        column: 25
                    },
                    end: {
                        line: 9,
                        column: 39
                    }
                }],
                line: 9
            },
            '2': {
                loc: {
                    start: {
                        line: 11,
                        column: 16
                    },
                    end: {
                        line: 17,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 11,
                        column: 16
                    },
                    end: {
                        line: 17,
                        column: 17
                    }
                }, {
                    start: {
                        line: 11,
                        column: 16
                    },
                    end: {
                        line: 17,
                        column: 17
                    }
                }],
                line: 11
            },
            '3': {
                loc: {
                    start: {
                        line: 11,
                        column: 20
                    },
                    end: {
                        line: 11,
                        column: 79
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 11,
                        column: 20
                    },
                    end: {
                        line: 11,
                        column: 40
                    }
                }, {
                    start: {
                        line: 11,
                        column: 44
                    },
                    end: {
                        line: 11,
                        column: 79
                    }
                }],
                line: 11
            },
            '4': {
                loc: {
                    start: {
                        line: 24,
                        column: 8
                    },
                    end: {
                        line: 26,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 24,
                        column: 8
                    },
                    end: {
                        line: 26,
                        column: 9
                    }
                }, {
                    start: {
                        line: 24,
                        column: 8
                    },
                    end: {
                        line: 26,
                        column: 9
                    }
                }],
                line: 24
            },
            '5': {
                loc: {
                    start: {
                        line: 30,
                        column: 8
                    },
                    end: {
                        line: 32,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 30,
                        column: 8
                    },
                    end: {
                        line: 32,
                        column: 9
                    }
                }, {
                    start: {
                        line: 30,
                        column: 8
                    },
                    end: {
                        line: 32,
                        column: 9
                    }
                }],
                line: 30
            },
            '6': {
                loc: {
                    start: {
                        line: 36,
                        column: 8
                    },
                    end: {
                        line: 42,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 36,
                        column: 8
                    },
                    end: {
                        line: 42,
                        column: 9
                    }
                }, {
                    start: {
                        line: 36,
                        column: 8
                    },
                    end: {
                        line: 42,
                        column: 9
                    }
                }],
                line: 36
            },
            '7': {
                loc: {
                    start: {
                        line: 36,
                        column: 12
                    },
                    end: {
                        line: 36,
                        column: 71
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 36,
                        column: 12
                    },
                    end: {
                        line: 36,
                        column: 32
                    }
                }, {
                    start: {
                        line: 36,
                        column: 36
                    },
                    end: {
                        line: 36,
                        column: 71
                    }
                }],
                line: 36
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0
        },
        b: {
            '0': [0],
            '1': [0],
            '2': [0, 0],
            '3': [0, 0],
            '4': [0, 0],
            '5': [0, 0],
            '6': [0, 0],
            '7': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _config = __webpack_require__(0);

var _GraphQLHandler2 = __webpack_require__(1);

var _GraphQLHandler3 = _interopRequireDefault(_GraphQLHandler2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphQLQuery = function (_GraphQLHandler) {
    _inherits(GraphQLQuery, _GraphQLHandler);

    function GraphQLQuery() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GraphQLQuery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GraphQLQuery.__proto__ || Object.getPrototypeOf(GraphQLQuery)).call.apply(_ref, [this].concat(args))), _this), _this.shouldUpdate = function () {
            cov_z2viznurf.f[0]++;
            cov_z2viznurf.s[0]++;
            return _this.canUpdate;
        }, _this.poll = function () {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_z2viznurf.b[0][0]++, _this.pollingTime);
            cov_z2viznurf.f[1]++;
            cov_z2viznurf.s[1]++;

            _this.pollingTime = time;
            cov_z2viznurf.s[2]++;
            return {
                fetch: function fetch() {
                    var cl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_z2viznurf.b[1][0]++, _this.pollingCl);
                    cov_z2viznurf.f[2]++;
                    cov_z2viznurf.s[3]++;

                    _this.pollingCl = cl;
                    cov_z2viznurf.s[4]++;
                    if ((cov_z2viznurf.b[3][0]++, !_this.shouldUpdate()) && (cov_z2viznurf.b[3][1]++, _this.environment.options.smartFetch)) {
                        cov_z2viznurf.b[2][0]++;

                        /* istanbul ignore next */
                        if (true) {
                            console.warn(_config.queryLockMessage);
                        }
                        cov_z2viznurf.s[5]++;
                        return Promise.resolve();
                    } else {
                        cov_z2viznurf.b[2][1]++;
                    }
                    cov_z2viznurf.s[6]++;
                    _this.canUpdate = false;
                    cov_z2viznurf.s[7]++;
                    return _this.request.poll(time).get(cl);
                }
            };
        }, _this.reFetch = function () {
            cov_z2viznurf.f[3]++;
            cov_z2viznurf.s[8]++;

            if (_this.isPolling()) {
                cov_z2viznurf.b[4][0]++;
                cov_z2viznurf.s[9]++;

                return _this.poll().fetch();
            } else {
                cov_z2viznurf.b[4][1]++;
            }
            cov_z2viznurf.s[10]++;
            return _this.fetch();
        }, _this.forceFetch = function () {
            cov_z2viznurf.f[4]++;
            cov_z2viznurf.s[11]++;

            if (_this.isPolling()) {
                cov_z2viznurf.b[5][0]++;
                cov_z2viznurf.s[12]++;

                return _this.request.poll(_this.pollingTime).get(_this.pollingCl);
            } else {
                cov_z2viznurf.b[5][1]++;
            }
            cov_z2viznurf.s[13]++;
            return _this.request.get();
        }, _this.fetch = function () {
            cov_z2viznurf.f[5]++;
            cov_z2viznurf.s[14]++;

            if ((cov_z2viznurf.b[7][0]++, !_this.shouldUpdate()) && (cov_z2viznurf.b[7][1]++, _this.environment.options.smartFetch)) {
                cov_z2viznurf.b[6][0]++;

                /* istanbul ignore next */
                if (true) {
                    console.warn(_config.queryLockMessage);
                }
                cov_z2viznurf.s[15]++;
                return Promise.resolve();
            } else {
                cov_z2viznurf.b[6][1]++;
            }
            cov_z2viznurf.s[16]++;
            _this.canUpdate = false;
            cov_z2viznurf.s[17]++;
            return _this.forceFetch();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GraphQLQuery;
}(_GraphQLHandler3.default);

exports.default = GraphQLQuery;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["axios-request"] = factory();else root["axios-request"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "/";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 7);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var bind = __webpack_require__(2);
            var isBuffer = __webpack_require__(11);

            /*global toString:true*/

            // utils is a library of generic helper functions non-specific to axios

            var toString = Object.prototype.toString;

            /**
             * Determine if a value is an Array
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Array, otherwise false
             */
            function isArray(val) {
                return toString.call(val) === '[object Array]';
            }

            /**
             * Determine if a value is an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an ArrayBuffer, otherwise false
             */
            function isArrayBuffer(val) {
                return toString.call(val) === '[object ArrayBuffer]';
            }

            /**
             * Determine if a value is a FormData
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an FormData, otherwise false
             */
            function isFormData(val) {
                return typeof FormData !== 'undefined' && val instanceof FormData;
            }

            /**
             * Determine if a value is a view on an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
             */
            function isArrayBufferView(val) {
                var result;
                if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
                    result = ArrayBuffer.isView(val);
                } else {
                    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
                }
                return result;
            }

            /**
             * Determine if a value is a String
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a String, otherwise false
             */
            function isString(val) {
                return typeof val === 'string';
            }

            /**
             * Determine if a value is a Number
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Number, otherwise false
             */
            function isNumber(val) {
                return typeof val === 'number';
            }

            /**
             * Determine if a value is undefined
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if the value is undefined, otherwise false
             */
            function isUndefined(val) {
                return typeof val === 'undefined';
            }

            /**
             * Determine if a value is an Object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Object, otherwise false
             */
            function isObject(val) {
                return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            }

            /**
             * Determine if a value is a Date
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Date, otherwise false
             */
            function isDate(val) {
                return toString.call(val) === '[object Date]';
            }

            /**
             * Determine if a value is a File
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a File, otherwise false
             */
            function isFile(val) {
                return toString.call(val) === '[object File]';
            }

            /**
             * Determine if a value is a Blob
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Blob, otherwise false
             */
            function isBlob(val) {
                return toString.call(val) === '[object Blob]';
            }

            /**
             * Determine if a value is a Function
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Function, otherwise false
             */
            function isFunction(val) {
                return toString.call(val) === '[object Function]';
            }

            /**
             * Determine if a value is a Stream
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Stream, otherwise false
             */
            function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
            }

            /**
             * Determine if a value is a URLSearchParams object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a URLSearchParams object, otherwise false
             */
            function isURLSearchParams(val) {
                return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
            }

            /**
             * Trim excess whitespace off the beginning and end of a string
             *
             * @param {String} str The String to trim
             * @returns {String} The String freed of excess whitespace
             */
            function trim(str) {
                return str.replace(/^\s*/, '').replace(/\s*$/, '');
            }

            /**
             * Determine if we're running in a standard browser environment
             *
             * This allows axios to run in a web worker, and react-native.
             * Both environments support XMLHttpRequest, but not fully standard globals.
             *
             * web workers:
             *  typeof window -> undefined
             *  typeof document -> undefined
             *
             * react-native:
             *  navigator.product -> 'ReactNative'
             */
            function isStandardBrowserEnv() {
                if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
                    return false;
                }
                return typeof window !== 'undefined' && typeof document !== 'undefined';
            }

            /**
             * Iterate over an Array or an Object invoking a function for each item.
             *
             * If `obj` is an Array callback will be called passing
             * the value, index, and complete array for each item.
             *
             * If 'obj' is an Object callback will be called passing
             * the value, key, and complete object for each property.
             *
             * @param {Object|Array} obj The object to iterate
             * @param {Function} fn The callback to invoke for each item
             */
            function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === 'undefined') {
                    return;
                }

                // Force an array if not already something iterable
                if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
                    /*eslint no-param-reassign:0*/
                    obj = [obj];
                }

                if (isArray(obj)) {
                    // Iterate over array values
                    for (var i = 0, l = obj.length; i < l; i++) {
                        fn.call(null, obj[i], i, obj);
                    }
                } else {
                    // Iterate over object keys
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            fn.call(null, obj[key], key, obj);
                        }
                    }
                }
            }

            /**
             * Accepts varargs expecting each argument to be an object, then
             * immutably merges the properties of each object and returns result.
             *
             * When multiple objects contain the same key the later object in
             * the arguments list will take precedence.
             *
             * Example:
             *
             * ```js
             * var result = merge({foo: 123}, {foo: 456});
             * console.log(result.foo); // outputs 456
             * ```
             *
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */
            function merge() /* obj1, obj2, obj3, ... */{
                var result = {};
                function assignValue(val, key) {
                    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
                        result[key] = merge(result[key], val);
                    } else {
                        result[key] = val;
                    }
                }

                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }

            /**
             * Extends object a by mutably adding to it the properties of object b.
             *
             * @param {Object} a The object to be extended
             * @param {Object} b The object to copy properties from
             * @param {Object} thisArg The object to bind function to
             * @return {Object} The resulting value of object a
             */
            function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                    if (thisArg && typeof val === 'function') {
                        a[key] = bind(val, thisArg);
                    } else {
                        a[key] = val;
                    }
                });
                return a;
            }

            module.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                extend: extend,
                trim: trim
            };

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            /* WEBPACK VAR INJECTION */
            (function (process) {

                var utils = __webpack_require__(0);
                var normalizeHeaderName = __webpack_require__(14);

                var DEFAULT_CONTENT_TYPE = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                function setContentTypeIfUnset(headers, value) {
                    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                        headers['Content-Type'] = value;
                    }
                }

                function getDefaultAdapter() {
                    var adapter;
                    if (typeof XMLHttpRequest !== 'undefined') {
                        // For browsers use XHR adapter
                        adapter = __webpack_require__(3);
                    } else if (typeof process !== 'undefined') {
                        // For node use HTTP adapter
                        adapter = __webpack_require__(3);
                    }
                    return adapter;
                }

                var defaults = {
                    adapter: getDefaultAdapter(),

                    transformRequest: [function transformRequest(data, headers) {
                        normalizeHeaderName(headers, 'Content-Type');
                        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                            return data;
                        }
                        if (utils.isArrayBufferView(data)) {
                            return data.buffer;
                        }
                        if (utils.isURLSearchParams(data)) {
                            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                            return data.toString();
                        }
                        if (utils.isObject(data)) {
                            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                            return JSON.stringify(data);
                        }
                        return data;
                    }],

                    transformResponse: [function transformResponse(data) {
                        /*eslint no-param-reassign:0*/
                        if (typeof data === 'string') {
                            try {
                                data = JSON.parse(data);
                            } catch (e) {/* Ignore */}
                        }
                        return data;
                    }],

                    timeout: 0,

                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN',

                    maxContentLength: -1,

                    validateStatus: function validateStatus(status) {
                        return status >= 200 && status < 300;
                    }
                };

                defaults.headers = {
                    common: {
                        'Accept': 'application/json, text/plain, */*'
                    }
                };

                utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                    defaults.headers[method] = {};
                });

                utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
                });

                module.exports = defaults;
                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(13));

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = function bind(fn, thisArg) {
                return function wrap() {
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i];
                    }
                    return fn.apply(thisArg, args);
                };
            };

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);
            var settle = __webpack_require__(15);
            var buildURL = __webpack_require__(17);
            var parseHeaders = __webpack_require__(18);
            var isURLSameOrigin = __webpack_require__(19);
            var createError = __webpack_require__(4);
            var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(20);

            module.exports = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    var requestData = config.data;
                    var requestHeaders = config.headers;

                    if (utils.isFormData(requestData)) {
                        delete requestHeaders['Content-Type']; // Let the browser set it
                    }

                    var request = new XMLHttpRequest();
                    var loadEvent = 'onreadystatechange';
                    var xDomain = false;

                    // For IE 8/9 CORS support
                    // Only supports POST and GET calls and doesn't returns the response headers.
                    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
                    if ("development" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
                        request = new window.XDomainRequest();
                        loadEvent = 'onload';
                        xDomain = true;
                        request.onprogress = function handleProgress() {};
                        request.ontimeout = function handleTimeout() {};
                    }

                    // HTTP basic authentication
                    if (config.auth) {
                        var username = config.auth.username || '';
                        var password = config.auth.password || '';
                        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                    }

                    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

                    // Set the request timeout in MS
                    request.timeout = config.timeout;

                    // Listen for ready state
                    request[loadEvent] = function handleLoad() {
                        if (!request || request.readyState !== 4 && !xDomain) {
                            return;
                        }

                        // The request errored out and we didn't get a response, this will be
                        // handled by onerror instead
                        // With one exception: request that using file: protocol, most browsers
                        // will return status as 0 even though it's a successful request
                        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                            return;
                        }

                        // Prepare the response
                        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                        var response = {
                            data: responseData,
                            // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
                            status: request.status === 1223 ? 204 : request.status,
                            statusText: request.status === 1223 ? 'No Content' : request.statusText,
                            headers: responseHeaders,
                            config: config,
                            request: request
                        };

                        settle(resolve, reject, response);

                        // Clean up request
                        request = null;
                    };

                    // Handle low level network errors
                    request.onerror = function handleError() {
                        // Real errors are hidden from us by the browser
                        // onerror should only fire if it's a network error
                        reject(createError('Network Error', config, null, request));

                        // Clean up request
                        request = null;
                    };

                    // Handle timeout
                    request.ontimeout = function handleTimeout() {
                        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

                        // Clean up request
                        request = null;
                    };

                    // Add xsrf header
                    // This is only done if running in a standard browser environment.
                    // Specifically not if we're in a web worker, or react-native.
                    if (utils.isStandardBrowserEnv()) {
                        var cookies = __webpack_require__(21);

                        // Add xsrf header
                        var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

                        if (xsrfValue) {
                            requestHeaders[config.xsrfHeaderName] = xsrfValue;
                        }
                    }

                    // Add headers to the request
                    if ('setRequestHeader' in request) {
                        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                                // Remove Content-Type if data is undefined
                                delete requestHeaders[key];
                            } else {
                                // Otherwise add header to the request
                                request.setRequestHeader(key, val);
                            }
                        });
                    }

                    // Add withCredentials to request if needed
                    if (config.withCredentials) {
                        request.withCredentials = true;
                    }

                    // Add responseType to request if needed
                    if (config.responseType) {
                        try {
                            request.responseType = config.responseType;
                        } catch (e) {
                            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                            if (config.responseType !== 'json') {
                                throw e;
                            }
                        }
                    }

                    // Handle progress if needed
                    if (typeof config.onDownloadProgress === 'function') {
                        request.addEventListener('progress', config.onDownloadProgress);
                    }

                    // Not all browsers support upload events
                    if (typeof config.onUploadProgress === 'function' && request.upload) {
                        request.upload.addEventListener('progress', config.onUploadProgress);
                    }

                    if (config.cancelToken) {
                        // Handle cancellation
                        config.cancelToken.promise.then(function onCanceled(cancel) {
                            if (!request) {
                                return;
                            }

                            request.abort();
                            reject(cancel);
                            // Clean up request
                            request = null;
                        });
                    }

                    if (requestData === undefined) {
                        requestData = null;
                    }

                    // Send the request
                    request.send(requestData);
                });
            };

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var enhanceError = __webpack_require__(16);

            /**
             * Create an Error with the specified message, config, error code, request and response.
             *
             * @param {string} message The error message.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The created error.
             */
            module.exports = function createError(message, config, code, request, response) {
                var error = new Error(message);
                return enhanceError(error, config, code, request, response);
            };

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = function isCancel(value) {
                return !!(value && value.__CANCEL__);
            };

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * A `Cancel` is an object that is thrown when an operation is canceled.
             *
             * @class
             * @param {string=} message The message.
             */

            function Cancel(message) {
                this.message = message;
            }

            Cancel.prototype.toString = function toString() {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
            };

            Cancel.prototype.__CANCEL__ = true;

            module.exports = Cancel;

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(8);

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var cov_15j8tpybze = function () {
                var path = '/home/mike/projects/axios-request/src/axios-request.js',
                    hash = '59a64c6be56ac2c7f8f8ad25e520b8b4e5bc6060',
                    global = new Function('return this')(),
                    gcv = '__coverage__',
                    coverageData = {
                    path: '/home/mike/projects/axios-request/src/axios-request.js',
                    statementMap: {
                        '0': {
                            start: {
                                line: 5,
                                column: 8
                            },
                            end: {
                                line: 5,
                                column: 27
                            }
                        },
                        '1': {
                            start: {
                                line: 6,
                                column: 8
                            },
                            end: {
                                line: 6,
                                column: 32
                            }
                        },
                        '2': {
                            start: {
                                line: 7,
                                column: 8
                            },
                            end: {
                                line: 7,
                                column: 26
                            }
                        },
                        '3': {
                            start: {
                                line: 8,
                                column: 8
                            },
                            end: {
                                line: 8,
                                column: 27
                            }
                        },
                        '4': {
                            start: {
                                line: 9,
                                column: 8
                            },
                            end: {
                                line: 9,
                                column: 36
                            }
                        },
                        '5': {
                            start: {
                                line: 10,
                                column: 8
                            },
                            end: {
                                line: 13,
                                column: 10
                            }
                        },
                        '6': {
                            start: {
                                line: 14,
                                column: 8
                            },
                            end: {
                                line: 14,
                                column: 33
                            }
                        },
                        '7': {
                            start: {
                                line: 15,
                                column: 8
                            },
                            end: {
                                line: 15,
                                column: 25
                            }
                        },
                        '8': {
                            start: {
                                line: 18,
                                column: 8
                            },
                            end: {
                                line: 18,
                                column: 59
                            }
                        },
                        '9': {
                            start: {
                                line: 21,
                                column: 8
                            },
                            end: {
                                line: 21,
                                column: 23
                            }
                        },
                        '10': {
                            start: {
                                line: 24,
                                column: 8
                            },
                            end: {
                                line: 24,
                                column: 40
                            }
                        },
                        '11': {
                            start: {
                                line: 27,
                                column: 8
                            },
                            end: {
                                line: 40,
                                column: 9
                            }
                        },
                        '12': {
                            start: {
                                line: 28,
                                column: 27
                            },
                            end: {
                                line: 28,
                                column: 53
                            }
                        },
                        '13': {
                            start: {
                                line: 29,
                                column: 28
                            },
                            end: {
                                line: 29,
                                column: 49
                            }
                        },
                        '14': {
                            start: {
                                line: 31,
                                column: 12
                            },
                            end: {
                                line: 33,
                                column: 13
                            }
                        },
                        '15': {
                            start: {
                                line: 32,
                                column: 16
                            },
                            end: {
                                line: 32,
                                column: 25
                            }
                        },
                        '16': {
                            start: {
                                line: 34,
                                column: 12
                            },
                            end: {
                                line: 36,
                                column: 13
                            }
                        },
                        '17': {
                            start: {
                                line: 35,
                                column: 16
                            },
                            end: {
                                line: 35,
                                column: 38
                            }
                        },
                        '18': {
                            start: {
                                line: 38,
                                column: 12
                            },
                            end: {
                                line: 38,
                                column: 100
                            }
                        },
                        '19': {
                            start: {
                                line: 38,
                                column: 66
                            },
                            end: {
                                line: 38,
                                column: 97
                            }
                        },
                        '20': {
                            start: {
                                line: 39,
                                column: 12
                            },
                            end: {
                                line: 39,
                                column: 102
                            }
                        },
                        '21': {
                            start: {
                                line: 39,
                                column: 61
                            },
                            end: {
                                line: 39,
                                column: 99
                            }
                        },
                        '22': {
                            start: {
                                line: 41,
                                column: 8
                            },
                            end: {
                                line: 41,
                                column: 20
                            }
                        },
                        '23': {
                            start: {
                                line: 44,
                                column: 8
                            },
                            end: {
                                line: 46,
                                column: 9
                            }
                        },
                        '24': {
                            start: {
                                line: 45,
                                column: 12
                            },
                            end: {
                                line: 45,
                                column: 42
                            }
                        },
                        '25': {
                            start: {
                                line: 47,
                                column: 8
                            },
                            end: {
                                line: 47,
                                column: 92
                            }
                        },
                        '26': {
                            start: {
                                line: 47,
                                column: 63
                            },
                            end: {
                                line: 47,
                                column: 90
                            }
                        },
                        '27': {
                            start: {
                                line: 50,
                                column: 8
                            },
                            end: {
                                line: 52,
                                column: 9
                            }
                        },
                        '28': {
                            start: {
                                line: 51,
                                column: 12
                            },
                            end: {
                                line: 51,
                                column: 52
                            }
                        },
                        '29': {
                            start: {
                                line: 53,
                                column: 8
                            },
                            end: {
                                line: 53,
                                column: 112
                            }
                        },
                        '30': {
                            start: {
                                line: 53,
                                column: 73
                            },
                            end: {
                                line: 53,
                                column: 110
                            }
                        },
                        '31': {
                            start: {
                                line: 56,
                                column: 8
                            },
                            end: {
                                line: 58,
                                column: 9
                            }
                        },
                        '32': {
                            start: {
                                line: 57,
                                column: 12
                            },
                            end: {
                                line: 57,
                                column: 43
                            }
                        },
                        '33': {
                            start: {
                                line: 59,
                                column: 8
                            },
                            end: {
                                line: 59,
                                column: 96
                            }
                        },
                        '34': {
                            start: {
                                line: 59,
                                column: 65
                            },
                            end: {
                                line: 59,
                                column: 94
                            }
                        },
                        '35': {
                            start: {
                                line: 62,
                                column: 8
                            },
                            end: {
                                line: 62,
                                column: 37
                            }
                        },
                        '36': {
                            start: {
                                line: 63,
                                column: 8
                            },
                            end: {
                                line: 63,
                                column: 38
                            }
                        },
                        '37': {
                            start: {
                                line: 66,
                                column: 8
                            },
                            end: {
                                line: 66,
                                column: 41
                            }
                        },
                        '38': {
                            start: {
                                line: 67,
                                column: 8
                            },
                            end: {
                                line: 67,
                                column: 24
                            }
                        },
                        '39': {
                            start: {
                                line: 70,
                                column: 8
                            },
                            end: {
                                line: 70,
                                column: 41
                            }
                        },
                        '40': {
                            start: {
                                line: 71,
                                column: 8
                            },
                            end: {
                                line: 71,
                                column: 47
                            }
                        },
                        '41': {
                            start: {
                                line: 72,
                                column: 8
                            },
                            end: {
                                line: 76,
                                column: 9
                            }
                        },
                        '42': {
                            start: {
                                line: 73,
                                column: 12
                            },
                            end: {
                                line: 73,
                                column: 53
                            }
                        },
                        '43': {
                            start: {
                                line: 75,
                                column: 12
                            },
                            end: {
                                line: 75,
                                column: 24
                            }
                        },
                        '44': {
                            start: {
                                line: 78,
                                column: 20
                            },
                            end: {
                                line: 81,
                                column: 5
                            }
                        },
                        '45': {
                            start: {
                                line: 79,
                                column: 30
                            },
                            end: {
                                line: 79,
                                column: 75
                            }
                        },
                        '46': {
                            start: {
                                line: 80,
                                column: 31
                            },
                            end: {
                                line: 80,
                                column: 77
                            }
                        },
                        '47': {
                            start: {
                                line: 82,
                                column: 21
                            },
                            end: {
                                line: 82,
                                column: 53
                            }
                        },
                        '48': {
                            start: {
                                line: 83,
                                column: 22
                            },
                            end: {
                                line: 83,
                                column: 55
                            }
                        },
                        '49': {
                            start: {
                                line: 85,
                                column: 8
                            },
                            end: {
                                line: 100,
                                column: 10
                            }
                        },
                        '50': {
                            start: {
                                line: 86,
                                column: 12
                            },
                            end: {
                                line: 86,
                                column: 50
                            }
                        },
                        '51': {
                            start: {
                                line: 88,
                                column: 12
                            },
                            end: {
                                line: 90,
                                column: 13
                            }
                        },
                        '52': {
                            start: {
                                line: 89,
                                column: 16
                            },
                            end: {
                                line: 89,
                                column: 47
                            }
                        },
                        '53': {
                            start: {
                                line: 91,
                                column: 12
                            },
                            end: {
                                line: 98,
                                column: 13
                            }
                        },
                        '54': {
                            start: {
                                line: 92,
                                column: 32
                            },
                            end: {
                                line: 94,
                                column: 24
                            }
                        },
                        '55': {
                            start: {
                                line: 93,
                                column: 20
                            },
                            end: {
                                line: 93,
                                column: 73
                            }
                        },
                        '56': {
                            start: {
                                line: 95,
                                column: 16
                            },
                            end: {
                                line: 95,
                                column: 49
                            }
                        },
                        '57': {
                            start: {
                                line: 97,
                                column: 16
                            },
                            end: {
                                line: 97,
                                column: 55
                            }
                        },
                        '58': {
                            start: {
                                line: 99,
                                column: 12
                            },
                            end: {
                                line: 99,
                                column: 28
                            }
                        },
                        '59': {
                            start: {
                                line: 106,
                                column: 12
                            },
                            end: {
                                line: 106,
                                column: 52
                            }
                        },
                        '60': {
                            start: {
                                line: 107,
                                column: 8
                            },
                            end: {
                                line: 109,
                                column: 9
                            }
                        },
                        '61': {
                            start: {
                                line: 108,
                                column: 12
                            },
                            end: {
                                line: 108,
                                column: 68
                            }
                        },
                        '62': {
                            start: {
                                line: 110,
                                column: 8
                            },
                            end: {
                                line: 112,
                                column: 9
                            }
                        },
                        '63': {
                            start: {
                                line: 111,
                                column: 12
                            },
                            end: {
                                line: 111,
                                column: 32
                            }
                        },
                        '64': {
                            start: {
                                line: 113,
                                column: 8
                            },
                            end: {
                                line: 113,
                                column: 43
                            }
                        },
                        '65': {
                            start: {
                                line: 114,
                                column: 8
                            },
                            end: {
                                line: 114,
                                column: 36
                            }
                        },
                        '66': {
                            start: {
                                line: 115,
                                column: 8
                            },
                            end: {
                                line: 124,
                                column: 70
                            }
                        },
                        '67': {
                            start: {
                                line: 120,
                                column: 16
                            },
                            end: {
                                line: 120,
                                column: 47
                            }
                        },
                        '68': {
                            start: {
                                line: 123,
                                column: 25
                            },
                            end: {
                                line: 123,
                                column: 66
                            }
                        },
                        '69': {
                            start: {
                                line: 124,
                                column: 26
                            },
                            end: {
                                line: 124,
                                column: 68
                            }
                        }
                    },
                    fnMap: {
                        '0': {
                            name: '(anonymous_0)',
                            decl: {
                                start: {
                                    line: 4,
                                    column: 4
                                },
                                end: {
                                    line: 4,
                                    column: 5
                                }
                            },
                            loc: {
                                start: {
                                    line: 4,
                                    column: 35
                                },
                                end: {
                                    line: 16,
                                    column: 5
                                }
                            },
                            line: 4
                        },
                        '1': {
                            name: '(anonymous_1)',
                            decl: {
                                start: {
                                    line: 17,
                                    column: 17
                                },
                                end: {
                                    line: 17,
                                    column: 18
                                }
                            },
                            loc: {
                                start: {
                                    line: 17,
                                    column: 30
                                },
                                end: {
                                    line: 19,
                                    column: 5
                                }
                            },
                            line: 17
                        },
                        '2': {
                            name: '(anonymous_2)',
                            decl: {
                                start: {
                                    line: 20,
                                    column: 13
                                },
                                end: {
                                    line: 20,
                                    column: 14
                                }
                            },
                            loc: {
                                start: {
                                    line: 20,
                                    column: 22
                                },
                                end: {
                                    line: 22,
                                    column: 5
                                }
                            },
                            line: 20
                        },
                        '3': {
                            name: '(anonymous_3)',
                            decl: {
                                start: {
                                    line: 23,
                                    column: 17
                                },
                                end: {
                                    line: 23,
                                    column: 18
                                }
                            },
                            loc: {
                                start: {
                                    line: 23,
                                    column: 38
                                },
                                end: {
                                    line: 25,
                                    column: 5
                                }
                            },
                            line: 23
                        },
                        '4': {
                            name: '(anonymous_4)',
                            decl: {
                                start: {
                                    line: 26,
                                    column: 13
                                },
                                end: {
                                    line: 26,
                                    column: 14
                                }
                            },
                            loc: {
                                start: {
                                    line: 26,
                                    column: 25
                                },
                                end: {
                                    line: 42,
                                    column: 5
                                }
                            },
                            line: 26
                        },
                        '5': {
                            name: '(anonymous_5)',
                            decl: {
                                start: {
                                    line: 38,
                                    column: 52
                                },
                                end: {
                                    line: 38,
                                    column: 53
                                }
                            },
                            loc: {
                                start: {
                                    line: 38,
                                    column: 66
                                },
                                end: {
                                    line: 38,
                                    column: 97
                                }
                            },
                            line: 38
                        },
                        '6': {
                            name: '(anonymous_6)',
                            decl: {
                                start: {
                                    line: 39,
                                    column: 47
                                },
                                end: {
                                    line: 39,
                                    column: 48
                                }
                            },
                            loc: {
                                start: {
                                    line: 39,
                                    column: 61
                                },
                                end: {
                                    line: 39,
                                    column: 99
                                }
                            },
                            line: 39
                        },
                        '7': {
                            name: '(anonymous_7)',
                            decl: {
                                start: {
                                    line: 43,
                                    column: 16
                                },
                                end: {
                                    line: 43,
                                    column: 17
                                }
                            },
                            loc: {
                                start: {
                                    line: 43,
                                    column: 28
                                },
                                end: {
                                    line: 48,
                                    column: 5
                                }
                            },
                            line: 43
                        },
                        '8': {
                            name: '(anonymous_8)',
                            decl: {
                                start: {
                                    line: 47,
                                    column: 46
                                },
                                end: {
                                    line: 47,
                                    column: 47
                                }
                            },
                            loc: {
                                start: {
                                    line: 47,
                                    column: 63
                                },
                                end: {
                                    line: 47,
                                    column: 90
                                }
                            },
                            line: 47
                        },
                        '9': {
                            name: '(anonymous_9)',
                            decl: {
                                start: {
                                    line: 49,
                                    column: 16
                                },
                                end: {
                                    line: 49,
                                    column: 17
                                }
                            },
                            loc: {
                                start: {
                                    line: 49,
                                    column: 28
                                },
                                end: {
                                    line: 54,
                                    column: 5
                                }
                            },
                            line: 49
                        },
                        '10': {
                            name: '(anonymous_10)',
                            decl: {
                                start: {
                                    line: 53,
                                    column: 56
                                },
                                end: {
                                    line: 53,
                                    column: 57
                                }
                            },
                            loc: {
                                start: {
                                    line: 53,
                                    column: 73
                                },
                                end: {
                                    line: 53,
                                    column: 110
                                }
                            },
                            line: 53
                        },
                        '11': {
                            name: '(anonymous_11)',
                            decl: {
                                start: {
                                    line: 55,
                                    column: 17
                                },
                                end: {
                                    line: 55,
                                    column: 18
                                }
                            },
                            loc: {
                                start: {
                                    line: 55,
                                    column: 29
                                },
                                end: {
                                    line: 60,
                                    column: 5
                                }
                            },
                            line: 55
                        },
                        '12': {
                            name: '(anonymous_12)',
                            decl: {
                                start: {
                                    line: 59,
                                    column: 47
                                },
                                end: {
                                    line: 59,
                                    column: 48
                                }
                            },
                            loc: {
                                start: {
                                    line: 59,
                                    column: 65
                                },
                                end: {
                                    line: 59,
                                    column: 94
                                }
                            },
                            line: 59
                        },
                        '13': {
                            name: '(anonymous_13)',
                            decl: {
                                start: {
                                    line: 61,
                                    column: 26
                                },
                                end: {
                                    line: 61,
                                    column: 27
                                }
                            },
                            loc: {
                                start: {
                                    line: 61,
                                    column: 38
                                },
                                end: {
                                    line: 64,
                                    column: 5
                                }
                            },
                            line: 61
                        },
                        '14': {
                            name: '(anonymous_14)',
                            decl: {
                                start: {
                                    line: 65,
                                    column: 30
                                },
                                end: {
                                    line: 65,
                                    column: 31
                                }
                            },
                            loc: {
                                start: {
                                    line: 65,
                                    column: 52
                                },
                                end: {
                                    line: 68,
                                    column: 5
                                }
                            },
                            line: 65
                        },
                        '15': {
                            name: '(anonymous_15)',
                            decl: {
                                start: {
                                    line: 69,
                                    column: 31
                                },
                                end: {
                                    line: 69,
                                    column: 32
                                }
                            },
                            loc: {
                                start: {
                                    line: 69,
                                    column: 50
                                },
                                end: {
                                    line: 77,
                                    column: 5
                                }
                            },
                            line: 69
                        },
                        '16': {
                            name: '(anonymous_16)',
                            decl: {
                                start: {
                                    line: 78,
                                    column: 11
                                },
                                end: {
                                    line: 78,
                                    column: 12
                                }
                            },
                            loc: {
                                start: {
                                    line: 78,
                                    column: 20
                                },
                                end: {
                                    line: 81,
                                    column: 5
                                }
                            },
                            line: 78
                        },
                        '17': {
                            name: '(anonymous_17)',
                            decl: {
                                start: {
                                    line: 79,
                                    column: 13
                                },
                                end: {
                                    line: 79,
                                    column: 14
                                }
                            },
                            loc: {
                                start: {
                                    line: 79,
                                    column: 30
                                },
                                end: {
                                    line: 79,
                                    column: 75
                                }
                            },
                            line: 79
                        },
                        '18': {
                            name: '(anonymous_18)',
                            decl: {
                                start: {
                                    line: 80,
                                    column: 14
                                },
                                end: {
                                    line: 80,
                                    column: 15
                                }
                            },
                            loc: {
                                start: {
                                    line: 80,
                                    column: 31
                                },
                                end: {
                                    line: 80,
                                    column: 77
                                }
                            },
                            line: 80
                        },
                        '19': {
                            name: '(anonymous_19)',
                            decl: {
                                start: {
                                    line: 82,
                                    column: 10
                                },
                                end: {
                                    line: 82,
                                    column: 11
                                }
                            },
                            loc: {
                                start: {
                                    line: 82,
                                    column: 21
                                },
                                end: {
                                    line: 82,
                                    column: 53
                                }
                            },
                            line: 82
                        },
                        '20': {
                            name: '(anonymous_20)',
                            decl: {
                                start: {
                                    line: 83,
                                    column: 11
                                },
                                end: {
                                    line: 83,
                                    column: 12
                                }
                            },
                            loc: {
                                start: {
                                    line: 83,
                                    column: 22
                                },
                                end: {
                                    line: 83,
                                    column: 55
                                }
                            },
                            line: 83
                        },
                        '21': {
                            name: '(anonymous_21)',
                            decl: {
                                start: {
                                    line: 84,
                                    column: 21
                                },
                                end: {
                                    line: 84,
                                    column: 22
                                }
                            },
                            loc: {
                                start: {
                                    line: 85,
                                    column: 8
                                },
                                end: {
                                    line: 100,
                                    column: 10
                                }
                            },
                            line: 85
                        },
                        '22': {
                            name: '(anonymous_22)',
                            decl: {
                                start: {
                                    line: 85,
                                    column: 57
                                },
                                end: {
                                    line: 85,
                                    column: 58
                                }
                            },
                            loc: {
                                start: {
                                    line: 85,
                                    column: 71
                                },
                                end: {
                                    line: 100,
                                    column: 9
                                }
                            },
                            line: 85
                        },
                        '23': {
                            name: '(anonymous_23)',
                            decl: {
                                start: {
                                    line: 92,
                                    column: 43
                                },
                                end: {
                                    line: 92,
                                    column: 44
                                }
                            },
                            loc: {
                                start: {
                                    line: 92,
                                    column: 49
                                },
                                end: {
                                    line: 94,
                                    column: 17
                                }
                            },
                            line: 92
                        },
                        '24': {
                            name: '(anonymous_24)',
                            decl: {
                                start: {
                                    line: 101,
                                    column: 18
                                },
                                end: {
                                    line: 101,
                                    column: 19
                                }
                            },
                            loc: {
                                start: {
                                    line: 101,
                                    column: 54
                                },
                                end: {
                                    line: 125,
                                    column: 5
                                }
                            },
                            line: 101
                        },
                        '25': {
                            name: '(anonymous_25)',
                            decl: {
                                start: {
                                    line: 119,
                                    column: 47
                                },
                                end: {
                                    line: 119,
                                    column: 48
                                }
                            },
                            loc: {
                                start: {
                                    line: 119,
                                    column: 54
                                },
                                end: {
                                    line: 121,
                                    column: 13
                                }
                            },
                            line: 119
                        },
                        '26': {
                            name: '(anonymous_26)',
                            decl: {
                                start: {
                                    line: 123,
                                    column: 18
                                },
                                end: {
                                    line: 123,
                                    column: 19
                                }
                            },
                            loc: {
                                start: {
                                    line: 123,
                                    column: 25
                                },
                                end: {
                                    line: 123,
                                    column: 66
                                }
                            },
                            line: 123
                        },
                        '27': {
                            name: '(anonymous_27)',
                            decl: {
                                start: {
                                    line: 124,
                                    column: 19
                                },
                                end: {
                                    line: 124,
                                    column: 20
                                }
                            },
                            loc: {
                                start: {
                                    line: 124,
                                    column: 26
                                },
                                end: {
                                    line: 124,
                                    column: 68
                                }
                            },
                            line: 124
                        }
                    },
                    branchMap: {
                        '0': {
                            loc: {
                                start: {
                                    line: 4,
                                    column: 21
                                },
                                end: {
                                    line: 4,
                                    column: 33
                                }
                            },
                            type: 'default-arg',
                            locations: [{
                                start: {
                                    line: 4,
                                    column: 31
                                },
                                end: {
                                    line: 4,
                                    column: 33
                                }
                            }],
                            line: 4
                        },
                        '1': {
                            loc: {
                                start: {
                                    line: 27,
                                    column: 8
                                },
                                end: {
                                    line: 40,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 27,
                                    column: 8
                                },
                                end: {
                                    line: 40,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 27,
                                    column: 8
                                },
                                end: {
                                    line: 40,
                                    column: 9
                                }
                            }],
                            line: 27
                        },
                        '2': {
                            loc: {
                                start: {
                                    line: 31,
                                    column: 12
                                },
                                end: {
                                    line: 33,
                                    column: 13
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 31,
                                    column: 12
                                },
                                end: {
                                    line: 33,
                                    column: 13
                                }
                            }, {
                                start: {
                                    line: 31,
                                    column: 12
                                },
                                end: {
                                    line: 33,
                                    column: 13
                                }
                            }],
                            line: 31
                        },
                        '3': {
                            loc: {
                                start: {
                                    line: 34,
                                    column: 12
                                },
                                end: {
                                    line: 36,
                                    column: 13
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 34,
                                    column: 12
                                },
                                end: {
                                    line: 36,
                                    column: 13
                                }
                            }, {
                                start: {
                                    line: 34,
                                    column: 12
                                },
                                end: {
                                    line: 36,
                                    column: 13
                                }
                            }],
                            line: 34
                        },
                        '4': {
                            loc: {
                                start: {
                                    line: 44,
                                    column: 8
                                },
                                end: {
                                    line: 46,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 44,
                                    column: 8
                                },
                                end: {
                                    line: 46,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 44,
                                    column: 8
                                },
                                end: {
                                    line: 46,
                                    column: 9
                                }
                            }],
                            line: 44
                        },
                        '5': {
                            loc: {
                                start: {
                                    line: 50,
                                    column: 8
                                },
                                end: {
                                    line: 52,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 50,
                                    column: 8
                                },
                                end: {
                                    line: 52,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 50,
                                    column: 8
                                },
                                end: {
                                    line: 52,
                                    column: 9
                                }
                            }],
                            line: 50
                        },
                        '6': {
                            loc: {
                                start: {
                                    line: 56,
                                    column: 8
                                },
                                end: {
                                    line: 58,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 56,
                                    column: 8
                                },
                                end: {
                                    line: 58,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 56,
                                    column: 8
                                },
                                end: {
                                    line: 58,
                                    column: 9
                                }
                            }],
                            line: 56
                        },
                        '7': {
                            loc: {
                                start: {
                                    line: 72,
                                    column: 8
                                },
                                end: {
                                    line: 76,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 72,
                                    column: 8
                                },
                                end: {
                                    line: 76,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 72,
                                    column: 8
                                },
                                end: {
                                    line: 76,
                                    column: 9
                                }
                            }],
                            line: 72
                        },
                        '8': {
                            loc: {
                                start: {
                                    line: 88,
                                    column: 12
                                },
                                end: {
                                    line: 90,
                                    column: 13
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 88,
                                    column: 12
                                },
                                end: {
                                    line: 90,
                                    column: 13
                                }
                            }, {
                                start: {
                                    line: 88,
                                    column: 12
                                },
                                end: {
                                    line: 90,
                                    column: 13
                                }
                            }],
                            line: 88
                        },
                        '9': {
                            loc: {
                                start: {
                                    line: 91,
                                    column: 12
                                },
                                end: {
                                    line: 98,
                                    column: 13
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 91,
                                    column: 12
                                },
                                end: {
                                    line: 98,
                                    column: 13
                                }
                            }, {
                                start: {
                                    line: 91,
                                    column: 12
                                },
                                end: {
                                    line: 98,
                                    column: 13
                                }
                            }],
                            line: 91
                        },
                        '10': {
                            loc: {
                                start: {
                                    line: 91,
                                    column: 16
                                },
                                end: {
                                    line: 91,
                                    column: 49
                                }
                            },
                            type: 'binary-expr',
                            locations: [{
                                start: {
                                    line: 91,
                                    column: 16
                                },
                                end: {
                                    line: 91,
                                    column: 20
                                }
                            }, {
                                start: {
                                    line: 91,
                                    column: 24
                                },
                                end: {
                                    line: 91,
                                    column: 49
                                }
                            }],
                            line: 91
                        },
                        '11': {
                            loc: {
                                start: {
                                    line: 101,
                                    column: 27
                                },
                                end: {
                                    line: 101,
                                    column: 39
                                }
                            },
                            type: 'default-arg',
                            locations: [{
                                start: {
                                    line: 101,
                                    column: 37
                                },
                                end: {
                                    line: 101,
                                    column: 39
                                }
                            }],
                            line: 101
                        },
                        '12': {
                            loc: {
                                start: {
                                    line: 107,
                                    column: 8
                                },
                                end: {
                                    line: 109,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 107,
                                    column: 8
                                },
                                end: {
                                    line: 109,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 107,
                                    column: 8
                                },
                                end: {
                                    line: 109,
                                    column: 9
                                }
                            }],
                            line: 107
                        },
                        '13': {
                            loc: {
                                start: {
                                    line: 107,
                                    column: 12
                                },
                                end: {
                                    line: 107,
                                    column: 59
                                }
                            },
                            type: 'binary-expr',
                            locations: [{
                                start: {
                                    line: 107,
                                    column: 12
                                },
                                end: {
                                    line: 107,
                                    column: 20
                                }
                            }, {
                                start: {
                                    line: 107,
                                    column: 24
                                },
                                end: {
                                    line: 107,
                                    column: 33
                                }
                            }, {
                                start: {
                                    line: 107,
                                    column: 37
                                },
                                end: {
                                    line: 107,
                                    column: 59
                                }
                            }],
                            line: 107
                        },
                        '14': {
                            loc: {
                                start: {
                                    line: 110,
                                    column: 8
                                },
                                end: {
                                    line: 112,
                                    column: 9
                                }
                            },
                            type: 'if',
                            locations: [{
                                start: {
                                    line: 110,
                                    column: 8
                                },
                                end: {
                                    line: 112,
                                    column: 9
                                }
                            }, {
                                start: {
                                    line: 110,
                                    column: 8
                                },
                                end: {
                                    line: 112,
                                    column: 9
                                }
                            }],
                            line: 110
                        }
                    },
                    s: {
                        '0': 0,
                        '1': 0,
                        '2': 0,
                        '3': 0,
                        '4': 0,
                        '5': 0,
                        '6': 0,
                        '7': 0,
                        '8': 0,
                        '9': 0,
                        '10': 0,
                        '11': 0,
                        '12': 0,
                        '13': 0,
                        '14': 0,
                        '15': 0,
                        '16': 0,
                        '17': 0,
                        '18': 0,
                        '19': 0,
                        '20': 0,
                        '21': 0,
                        '22': 0,
                        '23': 0,
                        '24': 0,
                        '25': 0,
                        '26': 0,
                        '27': 0,
                        '28': 0,
                        '29': 0,
                        '30': 0,
                        '31': 0,
                        '32': 0,
                        '33': 0,
                        '34': 0,
                        '35': 0,
                        '36': 0,
                        '37': 0,
                        '38': 0,
                        '39': 0,
                        '40': 0,
                        '41': 0,
                        '42': 0,
                        '43': 0,
                        '44': 0,
                        '45': 0,
                        '46': 0,
                        '47': 0,
                        '48': 0,
                        '49': 0,
                        '50': 0,
                        '51': 0,
                        '52': 0,
                        '53': 0,
                        '54': 0,
                        '55': 0,
                        '56': 0,
                        '57': 0,
                        '58': 0,
                        '59': 0,
                        '60': 0,
                        '61': 0,
                        '62': 0,
                        '63': 0,
                        '64': 0,
                        '65': 0,
                        '66': 0,
                        '67': 0,
                        '68': 0,
                        '69': 0
                    },
                    f: {
                        '0': 0,
                        '1': 0,
                        '2': 0,
                        '3': 0,
                        '4': 0,
                        '5': 0,
                        '6': 0,
                        '7': 0,
                        '8': 0,
                        '9': 0,
                        '10': 0,
                        '11': 0,
                        '12': 0,
                        '13': 0,
                        '14': 0,
                        '15': 0,
                        '16': 0,
                        '17': 0,
                        '18': 0,
                        '19': 0,
                        '20': 0,
                        '21': 0,
                        '22': 0,
                        '23': 0,
                        '24': 0,
                        '25': 0,
                        '26': 0,
                        '27': 0
                    },
                    b: {
                        '0': [0],
                        '1': [0, 0],
                        '2': [0, 0],
                        '3': [0, 0],
                        '4': [0, 0],
                        '5': [0, 0],
                        '6': [0, 0],
                        '7': [0, 0],
                        '8': [0, 0],
                        '9': [0, 0],
                        '10': [0, 0],
                        '11': [0],
                        '12': [0, 0],
                        '13': [0, 0, 0],
                        '14': [0, 0]
                    },
                    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
                },
                    coverage = global[gcv] || (global[gcv] = {});

                if (coverage[path] && coverage[path].hash === hash) {
                    return coverage[path];
                }

                coverageData.hash = hash;
                return coverage[path] = coverageData;
            }();

            var _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }return target;
            };

            var _axios = __webpack_require__(9);

            var _axios2 = _interopRequireDefault(_axios);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
                }return target;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Request = function Request(url) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_15j8tpybze.b[0][0]++, {});

                _classCallCheck(this, Request);

                _initialiseProps.call(this);

                cov_15j8tpybze.f[0]++;
                cov_15j8tpybze.s[0]++;

                this.timeouts = {};
                cov_15j8tpybze.s[1]++;
                this.cancelMethods = {};
                cov_15j8tpybze.s[2]++;
                this.pending = {};
                cov_15j8tpybze.s[3]++;
                this.updating = {};
                cov_15j8tpybze.s[4]++;
                this.pollingInProgress = {};
                cov_15j8tpybze.s[5]++;
                this.options = {
                    lockable: false,
                    cancelable: true
                };
                cov_15j8tpybze.s[6]++;
                this.setOptions(options);
                cov_15j8tpybze.s[7]++;
                this.setUrl(url);
            };

            var _initialiseProps = function _initialiseProps() {
                var _this = this;

                this.setOptions = function (options) {
                    cov_15j8tpybze.f[1]++;
                    cov_15j8tpybze.s[8]++;

                    _this.option = Object.assign(_this.options, options);
                };

                this.setUrl = function (url) {
                    cov_15j8tpybze.f[2]++;
                    cov_15j8tpybze.s[9]++;

                    _this.url = url;
                };

                this.setTimeout = function (timeout, method) {
                    cov_15j8tpybze.f[3]++;
                    cov_15j8tpybze.s[10]++;

                    _this.timeouts[method] = timeout;
                };

                this.cancel = function (method) {
                    cov_15j8tpybze.f[4]++;
                    cov_15j8tpybze.s[11]++;

                    if (method) {
                        cov_15j8tpybze.b[1][0]++;

                        var cancel = (cov_15j8tpybze.s[12]++, _this.cancelMethods[method]);
                        var timeout = (cov_15j8tpybze.s[13]++, _this.timeouts[method]);

                        cov_15j8tpybze.s[14]++;
                        if (typeof cancel === 'function') {
                            cov_15j8tpybze.b[2][0]++;
                            cov_15j8tpybze.s[15]++;

                            cancel();
                        } else {
                            cov_15j8tpybze.b[2][1]++;
                        }
                        cov_15j8tpybze.s[16]++;
                        if (timeout) {
                            cov_15j8tpybze.b[3][0]++;
                            cov_15j8tpybze.s[17]++;

                            clearTimeout(timeout);
                        } else {
                            cov_15j8tpybze.b[3][1]++;
                        }
                    } else {
                        cov_15j8tpybze.b[1][1]++;
                        cov_15j8tpybze.s[18]++;

                        Object.keys(_this.cancelMethods).forEach(function (reqMethod) {
                            cov_15j8tpybze.f[5]++;
                            cov_15j8tpybze.s[19]++;
                            return _this.cancelMethods[reqMethod]();
                        });
                        cov_15j8tpybze.s[20]++;
                        Object.keys(_this.timeouts).forEach(function (reqMethod) {
                            cov_15j8tpybze.f[6]++;
                            cov_15j8tpybze.s[21]++;
                            return clearTimeout(_this.timeouts[reqMethod]);
                        });
                    }
                    cov_15j8tpybze.s[22]++;
                    return _this;
                };

                this.isPending = function (method) {
                    cov_15j8tpybze.f[7]++;
                    cov_15j8tpybze.s[23]++;

                    if (method) {
                        cov_15j8tpybze.b[4][0]++;
                        cov_15j8tpybze.s[24]++;

                        return !!_this.pending[method];
                    } else {
                        cov_15j8tpybze.b[4][1]++;
                    }
                    cov_15j8tpybze.s[25]++;
                    return Object.keys(_this.pending).some(function (pendingMethod) {
                        cov_15j8tpybze.f[8]++;
                        cov_15j8tpybze.s[26]++;
                        return _this.pending[pendingMethod];
                    });
                };

                this.isPolling = function (method) {
                    cov_15j8tpybze.f[9]++;
                    cov_15j8tpybze.s[27]++;

                    if (method) {
                        cov_15j8tpybze.b[5][0]++;
                        cov_15j8tpybze.s[28]++;

                        return !!_this.pollingInProgress[method];
                    } else {
                        cov_15j8tpybze.b[5][1]++;
                    }
                    cov_15j8tpybze.s[29]++;
                    return Object.keys(_this.pollingInProgress).some(function (pollingMethod) {
                        cov_15j8tpybze.f[10]++;
                        cov_15j8tpybze.s[30]++;
                        return _this.pollingInProgress[pollingMethod];
                    });
                };

                this.isUpdating = function (method) {
                    cov_15j8tpybze.f[11]++;
                    cov_15j8tpybze.s[31]++;

                    if (method) {
                        cov_15j8tpybze.b[6][0]++;
                        cov_15j8tpybze.s[32]++;

                        return !!_this.updating[method];
                    } else {
                        cov_15j8tpybze.b[6][1]++;
                    }
                    cov_15j8tpybze.s[33]++;
                    return Object.keys(_this.updating).some(function (updatingMethod) {
                        cov_15j8tpybze.f[12]++;
                        cov_15j8tpybze.s[34]++;
                        return _this.updating[updatingMethod];
                    });
                };

                this.setOffPendingStatus = function (method) {
                    cov_15j8tpybze.f[13]++;
                    cov_15j8tpybze.s[35]++;

                    _this.pending[method] = false;
                    cov_15j8tpybze.s[36]++;
                    _this.updating[method] = false;
                };

                this.setOffPendingStatusThen = function (response, method) {
                    cov_15j8tpybze.f[14]++;
                    cov_15j8tpybze.s[37]++;

                    _this.setOffPendingStatus(method);
                    cov_15j8tpybze.s[38]++;
                    return response;
                };

                this.setOffPendingStatusCatch = function (error, method) {
                    cov_15j8tpybze.f[15]++;
                    cov_15j8tpybze.s[39]++;

                    _this.setOffPendingStatus(method);
                    cov_15j8tpybze.s[40]++;
                    _this.pollingInProgress[method] = false;
                    cov_15j8tpybze.s[41]++;
                    if (_this.options.errorHandler) {
                        cov_15j8tpybze.b[7][0]++;
                        cov_15j8tpybze.s[42]++;

                        _this.options.errorHandler(error, method);
                    } else {
                        cov_15j8tpybze.b[7][1]++;
                        cov_15j8tpybze.s[43]++;

                        throw error;
                    }
                };

                this.poll = function (time) {
                    cov_15j8tpybze.f[16]++;
                    cov_15j8tpybze.s[44]++;
                    return {
                        get: function get(cl, options) {
                            cov_15j8tpybze.f[17]++;
                            cov_15j8tpybze.s[45]++;
                            return _this.pollingRequest(cl, options, time, 'get');
                        },
                        post: function post(cl, options) {
                            cov_15j8tpybze.f[18]++;
                            cov_15j8tpybze.s[46]++;
                            return _this.pollingRequest(cl, options, time, 'post');
                        }
                    };
                };

                this.get = function (options) {
                    cov_15j8tpybze.f[19]++;
                    cov_15j8tpybze.s[47]++;
                    return _this.sendRequest('get', options);
                };

                this.post = function (options) {
                    cov_15j8tpybze.f[20]++;
                    cov_15j8tpybze.s[48]++;
                    return _this.sendRequest('post', options);
                };

                this.pollingRequest = function (cl, options, time, method, updating) {
                    cov_15j8tpybze.f[21]++;
                    cov_15j8tpybze.s[49]++;
                    return _this.sendRequest(method, options, updating).then(function (response) {
                        cov_15j8tpybze.f[22]++;
                        cov_15j8tpybze.s[50]++;

                        _this.pollingInProgress[method] = true;
                        var continuePolling = void 0;
                        cov_15j8tpybze.s[51]++;
                        if (cl) {
                            cov_15j8tpybze.b[8][0]++;
                            cov_15j8tpybze.s[52]++;

                            continuePolling = cl(response);
                        } else {
                            cov_15j8tpybze.b[8][1]++;
                        }
                        cov_15j8tpybze.s[53]++;
                        if ((cov_15j8tpybze.b[10][0]++, time) && (cov_15j8tpybze.b[10][1]++, continuePolling !== false)) {
                            cov_15j8tpybze.b[9][0]++;

                            var timeOut = (cov_15j8tpybze.s[54]++, setTimeout(function () {
                                cov_15j8tpybze.f[23]++;
                                cov_15j8tpybze.s[55]++;

                                _this.pollingRequest(cl, options, time, method, true);
                            }, time));
                            cov_15j8tpybze.s[56]++;
                            _this.setTimeout(timeOut, method);
                        } else {
                            cov_15j8tpybze.b[9][1]++;
                            cov_15j8tpybze.s[57]++;

                            _this.pollingInProgress[method] = false;
                        }
                        cov_15j8tpybze.s[58]++;
                        return response;
                    });
                };

                this.sendRequest = function (method) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_15j8tpybze.b[11][0]++, {});
                    var updating = arguments[2];
                    cov_15j8tpybze.f[24]++;

                    var _ref = (cov_15j8tpybze.s[59]++, Object.assign({}, _this.options, options)),
                        lockable = _ref.lockable,
                        cancelable = _ref.cancelable,
                        axiosOption = _objectWithoutProperties(_ref, ['lockable', 'cancelable']);

                    cov_15j8tpybze.s[60]++;

                    if ((cov_15j8tpybze.b[13][0]++, lockable) && (cov_15j8tpybze.b[13][1]++, !updating) && (cov_15j8tpybze.b[13][2]++, _this.isPending(method))) {
                        cov_15j8tpybze.b[12][0]++;
                        cov_15j8tpybze.s[61]++;

                        return Promise.reject(new Error('Request in progress'));
                    } else {
                        cov_15j8tpybze.b[12][1]++;
                    }
                    cov_15j8tpybze.s[62]++;
                    if (cancelable) {
                        cov_15j8tpybze.b[14][0]++;
                        cov_15j8tpybze.s[63]++;

                        _this.cancel(method);
                    } else {
                        cov_15j8tpybze.b[14][1]++;
                    }
                    cov_15j8tpybze.s[64]++;
                    _this.updating[method] = !!updating;
                    cov_15j8tpybze.s[65]++;
                    _this.pending[method] = true;
                    cov_15j8tpybze.s[66]++;
                    return (0, _axios2.default)(_extends({}, axiosOption, {
                        method: method,
                        url: _this.url,
                        cancelToken: new _axios2.default.CancelToken(function (c) {
                            cov_15j8tpybze.f[25]++;
                            cov_15j8tpybze.s[67]++;

                            _this.cancelMethods[method] = c;
                        })
                    })).then(function (res) {
                        cov_15j8tpybze.f[26]++;
                        cov_15j8tpybze.s[68]++;
                        return _this.setOffPendingStatusThen(res, method);
                    }).catch(function (err) {
                        cov_15j8tpybze.f[27]++;
                        cov_15j8tpybze.s[69]++;
                        return _this.setOffPendingStatusCatch(err, method);
                    });
                };
            };

            exports.default = Request;

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = __webpack_require__(10);

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);
            var bind = __webpack_require__(2);
            var Axios = __webpack_require__(12);
            var defaults = __webpack_require__(1);

            /**
             * Create an instance of Axios
             *
             * @param {Object} defaultConfig The default config for the instance
             * @return {Axios} A new instance of Axios
             */
            function createInstance(defaultConfig) {
                var context = new Axios(defaultConfig);
                var instance = bind(Axios.prototype.request, context);

                // Copy axios.prototype to instance
                utils.extend(instance, Axios.prototype, context);

                // Copy context to instance
                utils.extend(instance, context);

                return instance;
            }

            // Create the default instance to be exported
            var axios = createInstance(defaults);

            // Expose Axios class to allow class inheritance
            axios.Axios = Axios;

            // Factory for creating new instances
            axios.create = function create(instanceConfig) {
                return createInstance(utils.merge(defaults, instanceConfig));
            };

            // Expose Cancel & CancelToken
            axios.Cancel = __webpack_require__(6);
            axios.CancelToken = __webpack_require__(27);
            axios.isCancel = __webpack_require__(5);

            // Expose all/spread
            axios.all = function all(promises) {
                return Promise.all(promises);
            };
            axios.spread = __webpack_require__(28);

            module.exports = axios;

            // Allow use of default import syntax in TypeScript
            module.exports.default = axios;

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */

            // The _isBuffer check is for Safari 5-7 support, because it's missing
            // Object.prototype.constructor. Remove this eventually

            module.exports = function (obj) {
                return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
            };

            function isBuffer(obj) {
                return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
            }

            // For Node v0.10 support. Remove this eventually.
            function isSlowBuffer(obj) {
                return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
            }

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var defaults = __webpack_require__(1);
            var utils = __webpack_require__(0);
            var InterceptorManager = __webpack_require__(22);
            var dispatchRequest = __webpack_require__(23);
            var isAbsoluteURL = __webpack_require__(25);
            var combineURLs = __webpack_require__(26);

            /**
             * Create a new instance of Axios
             *
             * @param {Object} instanceConfig The default config for the instance
             */
            function Axios(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new InterceptorManager(),
                    response: new InterceptorManager()
                };
            }

            /**
             * Dispatch a request
             *
             * @param {Object} config The config specific for this request (merged with this.defaults)
             */
            Axios.prototype.request = function request(config) {
                /*eslint no-param-reassign:0*/
                // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof config === 'string') {
                    config = utils.merge({
                        url: arguments[0]
                    }, arguments[1]);
                }

                config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
                config.method = config.method.toLowerCase();

                // Support baseURL config
                if (config.baseURL && !isAbsoluteURL(config.url)) {
                    config.url = combineURLs(config.baseURL, config.url);
                }

                // Hook up interceptors middleware
                var chain = [dispatchRequest, undefined];
                var promise = Promise.resolve(config);

                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                    chain.unshift(interceptor.fulfilled, interceptor.rejected);
                });

                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                    chain.push(interceptor.fulfilled, interceptor.rejected);
                });

                while (chain.length) {
                    promise = promise.then(chain.shift(), chain.shift());
                }

                return promise;
            };

            // Provide aliases for supported request methods
            utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url
                    }));
                };
            });

            utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, data, config) {
                    return this.request(utils.merge(config || {}, {
                        method: method,
                        url: url,
                        data: data
                    }));
                };
            });

            module.exports = Axios;

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // shim for using process in browser

            var process = module.exports = {};

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }

            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function (name) {
                return [];
            };

            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function () {
                return '/';
            };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () {
                return 0;
            };

            /***/
        },
        /* 14 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            module.exports = function normalizeHeaderName(headers, normalizedName) {
                utils.forEach(headers, function processHeader(value, name) {
                    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                        headers[normalizedName] = value;
                        delete headers[name];
                    }
                });
            };

            /***/
        },
        /* 15 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var createError = __webpack_require__(4);

            /**
             * Resolve or reject a Promise based on response status.
             *
             * @param {Function} resolve A function that resolves the promise.
             * @param {Function} reject A function that rejects the promise.
             * @param {object} response The response.
             */
            module.exports = function settle(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                // Note: status is not exposed by XDomainRequest
                if (!response.status || !validateStatus || validateStatus(response.status)) {
                    resolve(response);
                } else {
                    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
                }
            };

            /***/
        },
        /* 16 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * Update an Error with the specified config, error code, and response.
             *
             * @param {Error} error The error to update.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The error.
             */

            module.exports = function enhanceError(error, config, code, request, response) {
                error.config = config;
                if (code) {
                    error.code = code;
                }
                error.request = request;
                error.response = response;
                return error;
            };

            /***/
        },
        /* 17 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            function encode(val) {
                return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
            }

            /**
             * Build a URL by appending params to the end
             *
             * @param {string} url The base of the url (e.g., http://www.google.com)
             * @param {object} [params] The params to be appended
             * @returns {string} The formatted url
             */
            module.exports = function buildURL(url, params, paramsSerializer) {
                /*eslint no-param-reassign:0*/
                if (!params) {
                    return url;
                }

                var serializedParams;
                if (paramsSerializer) {
                    serializedParams = paramsSerializer(params);
                } else if (utils.isURLSearchParams(params)) {
                    serializedParams = params.toString();
                } else {
                    var parts = [];

                    utils.forEach(params, function serialize(val, key) {
                        if (val === null || typeof val === 'undefined') {
                            return;
                        }

                        if (utils.isArray(val)) {
                            key = key + '[]';
                        }

                        if (!utils.isArray(val)) {
                            val = [val];
                        }

                        utils.forEach(val, function parseValue(v) {
                            if (utils.isDate(v)) {
                                v = v.toISOString();
                            } else if (utils.isObject(v)) {
                                v = JSON.stringify(v);
                            }
                            parts.push(encode(key) + '=' + encode(v));
                        });
                    });

                    serializedParams = parts.join('&');
                }

                if (serializedParams) {
                    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
                }

                return url;
            };

            /***/
        },
        /* 18 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            /**
             * Parse headers into an object
             *
             * ```
             * Date: Wed, 27 Aug 2014 08:58:49 GMT
             * Content-Type: application/json
             * Connection: keep-alive
             * Transfer-Encoding: chunked
             * ```
             *
             * @param {String} headers Headers needing to be parsed
             * @returns {Object} Headers parsed into an object
             */
            module.exports = function parseHeaders(headers) {
                var parsed = {};
                var key;
                var val;
                var i;

                if (!headers) {
                    return parsed;
                }

                utils.forEach(headers.split('\n'), function parser(line) {
                    i = line.indexOf(':');
                    key = utils.trim(line.substr(0, i)).toLowerCase();
                    val = utils.trim(line.substr(i + 1));

                    if (key) {
                        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                    }
                });

                return parsed;
            };

            /***/
        },
        /* 19 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            module.exports = utils.isStandardBrowserEnv() ?

            // Standard browser envs have full support of the APIs needed to test
            // whether the request URL is of the same origin as current location.
            function standardBrowserEnv() {
                var msie = /(msie|trident)/i.test(navigator.userAgent);
                var urlParsingNode = document.createElement('a');
                var originURL;

                /**
                * Parse a URL to discover it's components
                *
                * @param {String} url The URL to be parsed
                * @returns {Object}
                */
                function resolveURL(url) {
                    var href = url;

                    if (msie) {
                        // IE needs attribute set twice to normalize properties
                        urlParsingNode.setAttribute('href', href);
                        href = urlParsingNode.href;
                    }

                    urlParsingNode.setAttribute('href', href);

                    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                    return {
                        href: urlParsingNode.href,
                        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                        host: urlParsingNode.host,
                        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                        hostname: urlParsingNode.hostname,
                        port: urlParsingNode.port,
                        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
                    };
                }

                originURL = resolveURL(window.location.href);

                /**
                * Determine if a URL shares the same origin as the current location
                *
                * @param {String} requestURL The URL to test
                * @returns {boolean} True if URL shares the same origin, otherwise false
                */
                return function isURLSameOrigin(requestURL) {
                    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
                };
            }() :

            // Non standard browser envs (web workers, react-native) lack needed support.
            function nonStandardBrowserEnv() {
                return function isURLSameOrigin() {
                    return true;
                };
            }();

            /***/
        },
        /* 20 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

            function E() {
                this.message = 'String contains an invalid character';
            }
            E.prototype = new Error();
            E.prototype.code = 5;
            E.prototype.name = 'InvalidCharacterError';

            function btoa(input) {
                var str = String(input);
                var output = '';
                for (
                // initialize result and counter
                var block, charCode, idx = 0, map = chars;
                // if the next str index does not exist:
                //   change the mapping table to "="
                //   check if d has no fractional digits
                str.charAt(idx | 0) || (map = '=', idx % 1);
                // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
                output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                    charCode = str.charCodeAt(idx += 3 / 4);
                    if (charCode > 0xFF) {
                        throw new E();
                    }
                    block = block << 8 | charCode;
                }
                return output;
            }

            module.exports = btoa;

            /***/
        },
        /* 21 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            module.exports = utils.isStandardBrowserEnv() ?

            // Standard browser envs support document.cookie
            function standardBrowserEnv() {
                return {
                    write: function write(name, value, expires, path, domain, secure) {
                        var cookie = [];
                        cookie.push(name + '=' + encodeURIComponent(value));

                        if (utils.isNumber(expires)) {
                            cookie.push('expires=' + new Date(expires).toGMTString());
                        }

                        if (utils.isString(path)) {
                            cookie.push('path=' + path);
                        }

                        if (utils.isString(domain)) {
                            cookie.push('domain=' + domain);
                        }

                        if (secure === true) {
                            cookie.push('secure');
                        }

                        document.cookie = cookie.join('; ');
                    },

                    read: function read(name) {
                        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                        return match ? decodeURIComponent(match[3]) : null;
                    },

                    remove: function remove(name) {
                        this.write(name, '', Date.now() - 86400000);
                    }
                };
            }() :

            // Non standard browser env (web workers, react-native) lack needed support.
            function nonStandardBrowserEnv() {
                return {
                    write: function write() {},
                    read: function read() {
                        return null;
                    },
                    remove: function remove() {}
                };
            }();

            /***/
        },
        /* 22 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            function InterceptorManager() {
                this.handlers = [];
            }

            /**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */
            InterceptorManager.prototype.use = function use(fulfilled, rejected) {
                this.handlers.push({
                    fulfilled: fulfilled,
                    rejected: rejected
                });
                return this.handlers.length - 1;
            };

            /**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             */
            InterceptorManager.prototype.eject = function eject(id) {
                if (this.handlers[id]) {
                    this.handlers[id] = null;
                }
            };

            /**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             */
            InterceptorManager.prototype.forEach = function forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                    if (h !== null) {
                        fn(h);
                    }
                });
            };

            module.exports = InterceptorManager;

            /***/
        },
        /* 23 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);
            var transformData = __webpack_require__(24);
            var isCancel = __webpack_require__(5);
            var defaults = __webpack_require__(1);

            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            function throwIfCancellationRequested(config) {
                if (config.cancelToken) {
                    config.cancelToken.throwIfRequested();
                }
            }

            /**
             * Dispatch a request to the server using the configured adapter.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */
            module.exports = function dispatchRequest(config) {
                throwIfCancellationRequested(config);

                // Ensure headers exist
                config.headers = config.headers || {};

                // Transform request data
                config.data = transformData(config.data, config.headers, config.transformRequest);

                // Flatten headers
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

                utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
                    delete config.headers[method];
                });

                var adapter = config.adapter || defaults.adapter;

                return adapter(config).then(function onAdapterResolution(response) {
                    throwIfCancellationRequested(config);

                    // Transform response data
                    response.data = transformData(response.data, response.headers, config.transformResponse);

                    return response;
                }, function onAdapterRejection(reason) {
                    if (!isCancel(reason)) {
                        throwIfCancellationRequested(config);

                        // Transform response data
                        if (reason && reason.response) {
                            reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                        }
                    }

                    return Promise.reject(reason);
                });
            };

            /***/
        },
        /* 24 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var utils = __webpack_require__(0);

            /**
             * Transform the data for a request or a response
             *
             * @param {Object|String} data The data to be transformed
             * @param {Array} headers The headers for the request or response
             * @param {Array|Function} fns A single function or Array of functions
             * @returns {*} The resulting transformed data
             */
            module.exports = function transformData(data, headers, fns) {
                /*eslint no-param-reassign:0*/
                utils.forEach(fns, function transform(fn) {
                    data = fn(data, headers);
                });

                return data;
            };

            /***/
        },
        /* 25 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * Determines whether the specified URL is absolute
             *
             * @param {string} url The URL to test
             * @returns {boolean} True if the specified URL is absolute, otherwise false
             */

            module.exports = function isAbsoluteURL(url) {
                // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                // by any combination of letters, digits, plus, period, or hyphen.
                return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
                );
            };

            /***/
        },
        /* 26 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * Creates a new URL by combining the specified URLs
             *
             * @param {string} baseURL The base URL
             * @param {string} relativeURL The relative URL
             * @returns {string} The combined URL
             */

            module.exports = function combineURLs(baseURL, relativeURL) {
                return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
            };

            /***/
        },
        /* 27 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var Cancel = __webpack_require__(6);

            /**
             * A `CancelToken` is an object that can be used to request cancellation of an operation.
             *
             * @class
             * @param {Function} executor The executor function.
             */
            function CancelToken(executor) {
                if (typeof executor !== 'function') {
                    throw new TypeError('executor must be a function.');
                }

                var resolvePromise;
                this.promise = new Promise(function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                });

                var token = this;
                executor(function cancel(message) {
                    if (token.reason) {
                        // Cancellation has already been requested
                        return;
                    }

                    token.reason = new Cancel(message);
                    resolvePromise(token.reason);
                });
            }

            /**
             * Throws a `Cancel` if cancellation has been requested.
             */
            CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason) {
                    throw this.reason;
                }
            };

            /**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */
            CancelToken.source = function source() {
                var cancel;
                var token = new CancelToken(function executor(c) {
                    cancel = c;
                });
                return {
                    token: token,
                    cancel: cancel
                };
            };

            module.exports = CancelToken;

            /***/
        },
        /* 28 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            /**
             * Syntactic sugar for invoking a function and expanding an array for arguments.
             *
             * Common use case would be to use `Function.prototype.apply`.
             *
             *  ```js
             *  function f(x, y, z) {}
             *  var args = [1, 2, 3];
             *  f.apply(null, args);
             *  ```
             *
             * With `spread` this example can be re-written.
             *
             *  ```js
             *  spread(function(x, y, z) {})([1, 2, 3]);
             *  ```
             *
             * @param {Function} callback
             * @returns {Function}
             */

            module.exports = function spread(callback) {
                return function wrap(arr) {
                    return callback.apply(null, arr);
                };
            };

            /***/
        }]
        /******/)
    );
});
//# sourceMappingURL=axios-request.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(2)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_x97k46dgn = function () {
    var path = '/home/mike/Downloads/graphql-query/src/GraphQLMutation.js',
        hash = 'd85defbc62ea77f6ce1a4b9d5ca3dc172b50edad',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/home/mike/Downloads/graphql-query/src/GraphQLMutation.js',
        statementMap: {
            '0': {
                start: {
                    line: 5,
                    column: 25
                },
                end: {
                    line: 5,
                    column: 39
                }
            },
            '1': {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 32
                }
            },
            '2': {
                start: {
                    line: 9,
                    column: 8
                },
                end: {
                    line: 24,
                    column: 11
                }
            },
            '3': {
                start: {
                    line: 11,
                    column: 16
                },
                end: {
                    line: 11,
                    column: 36
                }
            },
            '4': {
                start: {
                    line: 13,
                    column: 16
                },
                end: {
                    line: 19,
                    column: 17
                }
            },
            '5': {
                start: {
                    line: 18,
                    column: 20
                },
                end: {
                    line: 18,
                    column: 45
                }
            },
            '6': {
                start: {
                    line: 20,
                    column: 16
                },
                end: {
                    line: 20,
                    column: 39
                }
            },
            '7': {
                start: {
                    line: 21,
                    column: 16
                },
                end: {
                    line: 21,
                    column: 56
                }
            },
            '8': {
                start: {
                    line: 23,
                    column: 31
                },
                end: {
                    line: 23,
                    column: 63
                }
            },
            '9': {
                start: {
                    line: 27,
                    column: 8
                },
                end: {
                    line: 29,
                    column: 9
                }
            },
            '10': {
                start: {
                    line: 28,
                    column: 12
                },
                end: {
                    line: 28,
                    column: 40
                }
            },
            '11': {
                start: {
                    line: 30,
                    column: 8
                },
                end: {
                    line: 30,
                    column: 29
                }
            },
            '12': {
                start: {
                    line: 33,
                    column: 8
                },
                end: {
                    line: 35,
                    column: 9
                }
            },
            '13': {
                start: {
                    line: 34,
                    column: 12
                },
                end: {
                    line: 34,
                    column: 76
                }
            },
            '14': {
                start: {
                    line: 36,
                    column: 8
                },
                end: {
                    line: 36,
                    column: 35
                }
            },
            '15': {
                start: {
                    line: 39,
                    column: 8
                },
                end: {
                    line: 45,
                    column: 9
                }
            },
            '16': {
                start: {
                    line: 44,
                    column: 12
                },
                end: {
                    line: 44,
                    column: 37
                }
            },
            '17': {
                start: {
                    line: 46,
                    column: 8
                },
                end: {
                    line: 46,
                    column: 31
                }
            },
            '18': {
                start: {
                    line: 47,
                    column: 8
                },
                end: {
                    line: 47,
                    column: 34
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 5,
                        column: 19
                    },
                    end: {
                        line: 5,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 25
                    },
                    end: {
                        line: 5,
                        column: 39
                    }
                },
                line: 5
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 6,
                        column: 11
                    },
                    end: {
                        line: 6,
                        column: 12
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 40
                    },
                    end: {
                        line: 25,
                        column: 5
                    }
                },
                line: 6
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 10,
                        column: 20
                    },
                    end: {
                        line: 10,
                        column: 21
                    }
                },
                loc: {
                    start: {
                        line: 10,
                        column: 45
                    },
                    end: {
                        line: 22,
                        column: 13
                    }
                },
                line: 10
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 23,
                        column: 25
                    },
                    end: {
                        line: 23,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 23,
                        column: 31
                    },
                    end: {
                        line: 23,
                        column: 63
                    }
                },
                line: 23
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 26,
                        column: 15
                    },
                    end: {
                        line: 26,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 26,
                        column: 21
                    },
                    end: {
                        line: 31,
                        column: 5
                    }
                },
                line: 26
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 32,
                        column: 18
                    },
                    end: {
                        line: 32,
                        column: 19
                    }
                },
                loc: {
                    start: {
                        line: 32,
                        column: 24
                    },
                    end: {
                        line: 37,
                        column: 5
                    }
                },
                line: 32
            },
            '6': {
                name: '(anonymous_6)',
                decl: {
                    start: {
                        line: 38,
                        column: 13
                    },
                    end: {
                        line: 38,
                        column: 14
                    }
                },
                loc: {
                    start: {
                        line: 38,
                        column: 19
                    },
                    end: {
                        line: 48,
                        column: 5
                    }
                },
                line: 38
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 6,
                        column: 12
                    },
                    end: {
                        line: 6,
                        column: 35
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 6,
                        column: 19
                    },
                    end: {
                        line: 6,
                        column: 35
                    }
                }],
                line: 6
            },
            '1': {
                loc: {
                    start: {
                        line: 10,
                        column: 21
                    },
                    end: {
                        line: 10,
                        column: 40
                    }
                },
                type: 'default-arg',
                locations: [{
                    start: {
                        line: 10,
                        column: 26
                    },
                    end: {
                        line: 10,
                        column: 40
                    }
                }],
                line: 10
            },
            '2': {
                loc: {
                    start: {
                        line: 13,
                        column: 16
                    },
                    end: {
                        line: 19,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 13,
                        column: 16
                    },
                    end: {
                        line: 19,
                        column: 17
                    }
                }, {
                    start: {
                        line: 13,
                        column: 16
                    },
                    end: {
                        line: 19,
                        column: 17
                    }
                }],
                line: 13
            },
            '3': {
                loc: {
                    start: {
                        line: 13,
                        column: 20
                    },
                    end: {
                        line: 13,
                        column: 80
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 13,
                        column: 20
                    },
                    end: {
                        line: 13,
                        column: 40
                    }
                }, {
                    start: {
                        line: 13,
                        column: 44
                    },
                    end: {
                        line: 13,
                        column: 80
                    }
                }],
                line: 13
            },
            '4': {
                loc: {
                    start: {
                        line: 27,
                        column: 8
                    },
                    end: {
                        line: 29,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 27,
                        column: 8
                    },
                    end: {
                        line: 29,
                        column: 9
                    }
                }, {
                    start: {
                        line: 27,
                        column: 8
                    },
                    end: {
                        line: 29,
                        column: 9
                    }
                }],
                line: 27
            },
            '5': {
                loc: {
                    start: {
                        line: 33,
                        column: 8
                    },
                    end: {
                        line: 35,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 33,
                        column: 8
                    },
                    end: {
                        line: 35,
                        column: 9
                    }
                }, {
                    start: {
                        line: 33,
                        column: 8
                    },
                    end: {
                        line: 35,
                        column: 9
                    }
                }],
                line: 33
            },
            '6': {
                loc: {
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 45,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 45,
                        column: 9
                    }
                }, {
                    start: {
                        line: 39,
                        column: 8
                    },
                    end: {
                        line: 45,
                        column: 9
                    }
                }],
                line: 39
            },
            '7': {
                loc: {
                    start: {
                        line: 39,
                        column: 12
                    },
                    end: {
                        line: 39,
                        column: 72
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 39,
                        column: 12
                    },
                    end: {
                        line: 39,
                        column: 32
                    }
                }, {
                    start: {
                        line: 39,
                        column: 36
                    },
                    end: {
                        line: 39,
                        column: 72
                    }
                }],
                line: 39
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0
        },
        b: {
            '0': [0],
            '1': [0],
            '2': [0, 0],
            '3': [0, 0],
            '4': [0, 0],
            '5': [0, 0],
            '6': [0, 0],
            '7': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _GraphQLHandler2 = __webpack_require__(1);

var _GraphQLHandler3 = _interopRequireDefault(_GraphQLHandler2);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphQLMutation = function (_GraphQLHandler) {
    _inherits(GraphQLMutation, _GraphQLHandler);

    function GraphQLMutation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GraphQLMutation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GraphQLMutation.__proto__ || Object.getPrototypeOf(GraphQLMutation)).call.apply(_ref, [this].concat(args))), _this), _this.shouldMutate = function () {
            cov_x97k46dgn.f[0]++;
            cov_x97k46dgn.s[0]++;
            return _this.canUpdate;
        }, _this.poll = function () {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_x97k46dgn.b[0][0]++, _this.pollingTime);
            cov_x97k46dgn.f[1]++;
            cov_x97k46dgn.s[1]++;

            _this.pollingTime = time;

            cov_x97k46dgn.s[2]++;
            return {
                mutate: function mutate() {
                    var cl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_x97k46dgn.b[1][0]++, _this.pollingCl);
                    cov_x97k46dgn.f[2]++;
                    cov_x97k46dgn.s[3]++;

                    _this.pollingCl = cl;

                    cov_x97k46dgn.s[4]++;
                    if ((cov_x97k46dgn.b[3][0]++, !_this.shouldMutate()) && (cov_x97k46dgn.b[3][1]++, _this.environment.options.smartMutate)) {
                        cov_x97k46dgn.b[2][0]++;

                        /* istanbul ignore next */
                        if (true) {
                            console.warn(_config.mutationLockMessage);
                        }
                        cov_x97k46dgn.s[5]++;
                        return Promise.resolve();
                    } else {
                        cov_x97k46dgn.b[2][1]++;
                    }
                    cov_x97k46dgn.s[6]++;
                    _this.canUpdate = false;
                    cov_x97k46dgn.s[7]++;
                    return _this.request.poll(time).post(cl);
                },
                forceMutate: function forceMutate(cl) {
                    cov_x97k46dgn.f[3]++;
                    cov_x97k46dgn.s[8]++;
                    return _this.request.poll(time).post(cl);
                }
            };
        }, _this.reMutate = function () {
            cov_x97k46dgn.f[4]++;
            cov_x97k46dgn.s[9]++;

            if (_this.isPolling()) {
                cov_x97k46dgn.b[4][0]++;
                cov_x97k46dgn.s[10]++;

                return _this.poll().mutate();
            } else {
                cov_x97k46dgn.b[4][1]++;
            }
            cov_x97k46dgn.s[11]++;
            return _this.mutate();
        }, _this.forceMutate = function () {
            cov_x97k46dgn.f[5]++;
            cov_x97k46dgn.s[12]++;

            if (_this.isPolling()) {
                cov_x97k46dgn.b[5][0]++;
                cov_x97k46dgn.s[13]++;

                return _this.request.poll(_this.pollingTime).post(_this.pollingCl);
            } else {
                cov_x97k46dgn.b[5][1]++;
            }
            cov_x97k46dgn.s[14]++;
            return _this.request.post();
        }, _this.mutate = function () {
            cov_x97k46dgn.f[6]++;
            cov_x97k46dgn.s[15]++;

            if ((cov_x97k46dgn.b[7][0]++, !_this.shouldMutate()) && (cov_x97k46dgn.b[7][1]++, _this.environment.options.smartMutate)) {
                cov_x97k46dgn.b[6][0]++;

                /* istanbul ignore next */
                if (true) {
                    console.warn(_config.mutationLockMessage);
                }
                cov_x97k46dgn.s[16]++;
                return Promise.resolve();
            } else {
                cov_x97k46dgn.b[6][1]++;
            }
            cov_x97k46dgn.s[17]++;
            _this.canUpdate = false;
            cov_x97k46dgn.s[18]++;
            return _this.forceMutate();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GraphQLMutation;
}(_GraphQLHandler3.default);

exports.default = GraphQLMutation;

/***/ })
/******/ ]);
});
//# sourceMappingURL=graphql-query-client.js.map
__d(
  "WAMozjpegWasmV2",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function (t) {
        var r =
          typeof document != "undefined"
            ? (t = document.currentScript) == null
              ? void 0
              : t.src
            : void 0;
        return function (t) {
          t === void 0 && (t = {});
          var o,
            a = t,
            i,
            l,
            s = new (e || (e = n("Promise")))(function (e, t) {
              ((i = e), (l = t));
            }),
            u = !1,
            c = !0,
            d = Object.assign({}, a),
            m = "./this.program",
            p = function (t, n) {
              throw n;
            },
            _ = "";
          function f(e) {
            return _ + e;
          }
          var g, h;
          ((_ = self.location.href),
            r && (_ = r),
            _.startsWith("blob:")
              ? (_ = "")
              : (_ = _.substr(0, _.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
            (h = function (t) {
              var e = new XMLHttpRequest();
              return (
                e.open("GET", t, !1),
                (e.responseType = "arraybuffer"),
                e.send(null),
                new Uint8Array(e.response)
              );
            }),
            (g = function (r) {
              return fetch(r, { credentials: "same-origin" }).then(
                function (t) {
                  return t.ok
                    ? t.arrayBuffer()
                    : (e || (e = n("Promise"))).reject(
                        new Error(t.status + " : " + t.url),
                      );
                },
              );
            }));
          var y = console.log.bind(console),
            C = console.error.bind(console);
          (Object.assign(a, d), (d = null));
          var b,
            v,
            S = !1,
            R,
            L,
            E,
            k,
            I,
            T,
            D,
            x,
            $;
          function P() {
            var e = v.buffer;
            ((a.HEAP8 = L = new Int8Array(e)),
              (a.HEAP16 = k = new Int16Array(e)),
              (a.HEAPU8 = E = new Uint8Array(e)),
              (a.HEAPU16 = I = new Uint16Array(e)),
              (a.HEAP32 = T = new Int32Array(e)),
              (a.HEAPU32 = D = new Uint32Array(e)),
              (a.HEAPF32 = x = new Float32Array(e)),
              (a.HEAPF64 = $ = new Float64Array(e)));
          }
          var N = [],
            M = [],
            w = [],
            A = !1;
          function F() {
            le(N);
          }
          function O() {
            ((A = !0),
              !a.noFSInit && !it.init.initialized && it.init(),
              (it.ignorePermissions = !1),
              Xe.init(),
              le(M));
          }
          function B() {
            le(w);
          }
          function W(e) {
            M.unshift(e);
          }
          var q = 0,
            U = null,
            V = null;
          function H(e) {
            return e;
          }
          function G(e) {
            q++;
          }
          function z(e) {
            if (
              (q--, q == 0 && (U !== null && (clearInterval(U), (U = null)), V))
            ) {
              var t = V;
              ((V = null), t());
            }
          }
          function j(e) {
            ((e = "Aborted(" + e + ")"),
              C(e),
              (S = !0),
              (R = 1),
              (e += ". Build with -sASSERTIONS for more info."));
            var t = new WebAssembly.RuntimeError(e);
            throw (l(t), t);
          }
          var K = "data:application/octet-stream;base64,",
            Q = function (t) {
              return t.startsWith(K);
            };
          function X() {
            var e = "WAMozjpegWasm.wasm";
            return Q(e) ? e : f(e);
          }
          var Y;
          function J(e) {
            if (e == Y && b) return new Uint8Array(b);
            if (h) return h(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function Z(t) {
            return b
              ? (e || (e = n("Promise"))).resolve().then(function () {
                  return J(t);
                })
              : g(t).then(
                  function (e) {
                    return new Uint8Array(e);
                  },
                  function () {
                    return J(t);
                  },
                );
          }
          function ee(e, t, n) {
            return Z(e)
              .then(function (e) {
                return WebAssembly.instantiate(e, t);
              })
              .then(n, function (e) {
                (C("failed to asynchronously prepare wasm: " + e), j(e));
              });
          }
          function te(e, t, n, r) {
            return !e &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !Q(t) &&
              typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                  var o = WebAssembly.instantiateStreaming(e, n);
                  return o.then(r, function (e) {
                    return (
                      C("wasm streaming compile failed: " + e),
                      C("falling back to ArrayBuffer instantiation"),
                      ee(t, n, r)
                    );
                  });
                })
              : ee(t, n, r);
          }
          function ne() {
            return { a: vt };
          }
          function re() {
            var e = ne();
            function t(e, t) {
              return (
                (St = e.exports),
                (v = St.x),
                (a.wasmMemory = v),
                P(),
                (_t = St.A),
                W(St.y),
                z("wasm-instantiate"),
                St
              );
            }
            G("wasm-instantiate");
            function n(e) {
              t(e.instance);
            }
            if (a.instantiateWasm)
              try {
                return a.instantiateWasm(e, t);
              } catch (e) {
                (C("Module.instantiateWasm callback failed with error: " + e),
                  l(e));
              }
            return (Y || (Y = X()), te(b, Y, e, n).catch(l), {});
          }
          var oe, ae;
          function ie(e) {
            ((this.name = "ExitStatus"),
              (this.message = "Program terminated with exit(" + e + ")"),
              (this.status = e));
          }
          var le = function (t) {
              for (; t.length > 0; ) t.shift()(a);
            },
            se = function (t) {
              return Dt(t);
            },
            ue = function () {
              return $t();
            },
            ce = [],
            de = 0,
            me = function (t) {
              var e = new _e(t);
              return (
                e.get_caught() || (e.set_caught(!0), de--),
                e.set_rethrown(!1),
                ce.push(e),
                Pt(e.excPtr),
                e.get_exception_ptr()
              );
            },
            pe = 0,
            _e = (function () {
              "use strict";
              function e(e) {
                ((this.excPtr = e), (this.ptr = e - 24));
              }
              var t = e.prototype;
              return (
                (t.set_type = function (t) {
                  D[(this.ptr + 4) >> 2] = t;
                }),
                (t.get_type = function () {
                  return D[(this.ptr + 4) >> 2];
                }),
                (t.set_destructor = function (t) {
                  D[(this.ptr + 8) >> 2] = t;
                }),
                (t.get_destructor = function () {
                  return D[(this.ptr + 8) >> 2];
                }),
                (t.set_caught = function (t) {
                  ((t = t ? 1 : 0), (L[this.ptr + 12] = t));
                }),
                (t.get_caught = function () {
                  return L[this.ptr + 12] != 0;
                }),
                (t.set_rethrown = function (t) {
                  ((t = t ? 1 : 0), (L[this.ptr + 13] = t));
                }),
                (t.get_rethrown = function () {
                  return L[this.ptr + 13] != 0;
                }),
                (t.init = function (t, n) {
                  (this.set_adjusted_ptr(0),
                    this.set_type(t),
                    this.set_destructor(n));
                }),
                (t.set_adjusted_ptr = function (t) {
                  D[(this.ptr + 16) >> 2] = t;
                }),
                (t.get_adjusted_ptr = function () {
                  return D[(this.ptr + 16) >> 2];
                }),
                (t.get_exception_ptr = function () {
                  var e = Mt(this.get_type());
                  if (e) return D[this.excPtr >> 2];
                  var t = this.get_adjusted_ptr();
                  return t !== 0 ? t : this.excPtr;
                }),
                e
              );
            })(),
            fe = function (t) {
              throw (pe || (pe = t), pe);
            },
            ge = function (t) {
              return Tt(t);
            },
            he = function (t) {
              var e = pe;
              if (!e) return (ge(0), 0);
              var n = new _e(e);
              n.set_adjusted_ptr(e);
              var r = n.get_type();
              if (!r) return (ge(0), e);
              for (var o of t) {
                if (o === 0 || o === r) break;
                var a = n.ptr + 16;
                if (Nt(o, r, a)) return (ge(o), e);
              }
              return (ge(r), e);
            },
            ye = function () {
              return he([]);
            },
            Ce = function (t) {
              return he([t]);
            },
            be = function (t, n, r) {
              var e = new _e(t);
              throw (e.init(n, r), (pe = t), de++, pe);
            },
            ve = function (t) {
              for (var e = 0, n = 0; n < t.length; ++n) {
                var r = t.charCodeAt(n);
                r <= 127
                  ? e++
                  : r <= 2047
                    ? (e += 2)
                    : r >= 55296 && r <= 57343
                      ? ((e += 4), ++n)
                      : (e += 3);
              }
              return e;
            },
            Se = function (t, n, r, o) {
              if (!(o > 0)) return 0;
              for (var e = r, a = r + o - 1, i = 0; i < t.length; ++i) {
                var l = t.charCodeAt(i);
                if (l >= 55296 && l <= 57343) {
                  var s = t.charCodeAt(++i);
                  l = (65536 + ((l & 1023) << 10)) | (s & 1023);
                }
                if (l <= 127) {
                  if (r >= a) break;
                  n[r++] = l;
                } else if (l <= 2047) {
                  if (r + 1 >= a) break;
                  ((n[r++] = 192 | (l >> 6)), (n[r++] = 128 | (l & 63)));
                } else if (l <= 65535) {
                  if (r + 2 >= a) break;
                  ((n[r++] = 224 | (l >> 12)),
                    (n[r++] = 128 | ((l >> 6) & 63)),
                    (n[r++] = 128 | (l & 63)));
                } else {
                  if (r + 3 >= a) break;
                  ((n[r++] = 240 | (l >> 18)),
                    (n[r++] = 128 | ((l >> 12) & 63)),
                    (n[r++] = 128 | ((l >> 6) & 63)),
                    (n[r++] = 128 | (l & 63)));
                }
              }
              return ((n[r] = 0), r - e);
            },
            Re = function (t, n, r) {
              return Se(t, E, n, r);
            };
          function Le(e, t) {
            try {
              if (t === 0) return -28;
              var n = it.cwd(),
                r = ve(n) + 1;
              return t < r ? -68 : (Re(n, e, t), r);
            } catch (e) {
              if (typeof it == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Ee = function () {
              j("");
            },
            ke = function (t, n, r) {
              return E.copyWithin(t, n, n + r);
            },
            Ie = function () {
              return 629145600;
            },
            Te = function (t) {
              var e = v.buffer,
                n = (t - e.byteLength + 65535) / 65536;
              try {
                return (v.grow(n), P(), 1);
              } catch (e) {}
            },
            De = function (t) {
              var e = E.length;
              t >>>= 0;
              var n = Ie();
              if (t > n) return !1;
              for (
                var r = function (t, n) {
                    return t + ((n - (t % n)) % n);
                  },
                  o = 1;
                o <= 4;
                o *= 2
              ) {
                var a = e * (1 + 0.2 / o);
                a = Math.min(a, t + 100663296);
                var i = Math.min(n, r(Math.max(t, a), 65536)),
                  l = Te(i);
                if (l) return !0;
              }
              return !1;
            },
            xe = {},
            $e = function () {
              return m || "./this.program";
            },
            Pe = function () {
              if (!Pe.strings) {
                var e =
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: e,
                    _: $e(),
                  };
                for (var n in xe)
                  xe[n] === void 0 ? delete t[n] : (t[n] = xe[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                Pe.strings = r;
              }
              return Pe.strings;
            },
            Ne = function (t, n) {
              for (var e = 0; e < t.length; ++e) L[n++] = t.charCodeAt(e);
              L[n] = 0;
            },
            Me = function (t, n) {
              var e = 0;
              return (
                Pe().forEach(function (r, o) {
                  var a = n + e;
                  ((D[(t + o * 4) >> 2] = a), Ne(r, a), (e += r.length + 1));
                }),
                0
              );
            },
            we = function (t, n) {
              var e = Pe();
              D[t >> 2] = e.length;
              var r = 0;
              return (
                e.forEach(function (e) {
                  return (r += e.length + 1);
                }),
                (D[n >> 2] = r),
                0
              );
            },
            Ae = 0,
            Fe = function () {
              return Ae > 0;
            },
            Oe = function (t) {
              ((R = t), Fe() || (S = !0), p(t, new ie(t)));
            },
            Be = function (t, n) {
              ((R = t), Oe(t));
            },
            We = Be,
            qe = {
              isAbs: function (t) {
                return t.charAt(0) === "/";
              },
              splitPath: function (t) {
                var e =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return e.exec(t).slice(1);
              },
              normalizeArray: function (t, n) {
                for (var e = 0, r = t.length - 1; r >= 0; r--) {
                  var o = t[r];
                  o === "."
                    ? t.splice(r, 1)
                    : o === ".."
                      ? (t.splice(r, 1), e++)
                      : e && (t.splice(r, 1), e--);
                }
                if (n) for (; e; e--) t.unshift("..");
                return t;
              },
              normalize: function (t) {
                var e = qe.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = qe
                    .normalizeArray(
                      t.split("/").filter(function (e) {
                        return !!e;
                      }),
                      !e,
                    )
                    .join("/")),
                  !t && !e && (t = "."),
                  t && n && (t += "/"),
                  (e ? "/" : "") + t
                );
              },
              dirname: function (t) {
                var e = qe.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = qe.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return qe.normalize(t.join("/"));
              },
              join2: function (t, n) {
                return qe.normalize(t + "/" + n);
              },
            },
            Ue = function () {
              if (
                typeof crypto == "object" &&
                typeof crypto.getRandomValues == "function"
              )
                return function (e) {
                  return crypto.getRandomValues(e);
                };
              j("initRandomDevice");
            },
            Ve = function (t) {
              return (Ve = Ue())(t);
            },
            He = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r =
                    n >= 0
                      ? n < 0 || arguments.length <= n
                        ? void 0
                        : arguments[n]
                      : it.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = qe.isAbs(r)));
                }
                return (
                  (e = qe
                    .normalizeArray(
                      e.split("/").filter(function (e) {
                        return !!e;
                      }),
                      !t,
                    )
                    .join("/")),
                  (t ? "/" : "") + e || "."
                );
              },
              relative: function (t, n) {
                ((t = He.resolve(t).substr(1)), (n = He.resolve(n).substr(1)));
                function e(e) {
                  for (var t = 0; t < e.length && e[t] === ""; t++);
                  for (var n = e.length - 1; n >= 0 && e[n] === ""; n--);
                  return t > n ? [] : e.slice(t, n - t + 1);
                }
                for (
                  var r = e(t.split("/")),
                    o = e(n.split("/")),
                    a = Math.min(r.length, o.length),
                    i = a,
                    l = 0;
                  l < a;
                  l++
                )
                  if (r[l] !== o[l]) {
                    i = l;
                    break;
                  }
                for (var s = [], l = i; l < r.length; l++) s.push("..");
                return ((s = s.concat(o.slice(i))), s.join("/"));
              },
            },
            Ge = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0,
            ze = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && Ge)
                return Ge.decode(t.subarray(n, o));
              for (var a = ""; n < o; ) {
                var i = t[n++];
                if (!(i & 128)) {
                  a += String.fromCharCode(i);
                  continue;
                }
                var l = t[n++] & 63;
                if ((i & 224) == 192) {
                  a += String.fromCharCode(((i & 31) << 6) | l);
                  continue;
                }
                var s = t[n++] & 63;
                if (
                  ((i & 240) == 224
                    ? (i = ((i & 15) << 12) | (l << 6) | s)
                    : (i =
                        ((i & 7) << 18) | (l << 12) | (s << 6) | (t[n++] & 63)),
                  i < 65536)
                )
                  a += String.fromCharCode(i);
                else {
                  var u = i - 65536;
                  a += String.fromCharCode(
                    55296 | (u >> 10),
                    56320 | (u & 1023),
                  );
                }
              }
              return a;
            },
            je = [];
          function Ke(e, t, n) {
            var r = n > 0 ? n : ve(e) + 1,
              o = new Array(r),
              a = Se(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var Qe = function () {
              if (!je.length) {
                var e = null;
                return null;
              }
              return je.shift();
            },
            Xe = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((Xe.ttys[t] = { input: [], output: [], ops: n }),
                  it.registerDevice(t, Xe.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = Xe.ttys[t.node.rdev];
                  if (!e) throw new it.ErrnoError(43);
                  ((t.tty = e), (t.seekable = !1));
                },
                close: function (t) {
                  t.tty.ops.fsync(t.tty);
                },
                fsync: function (t) {
                  t.tty.ops.fsync(t.tty);
                },
                read: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.get_char)
                    throw new it.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new it.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new it.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new it.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new it.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return Qe();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (y(ze(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (y(ze(t.output, 0)), (t.output = []));
                },
                ioctl_tcgets: function (t) {
                  return {
                    c_iflag: 25856,
                    c_oflag: 5,
                    c_cflag: 191,
                    c_lflag: 35387,
                    c_cc: [
                      3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                  };
                },
                ioctl_tcsets: function (t, n, r) {
                  return 0;
                },
                ioctl_tiocgwinsz: function (t) {
                  return [24, 80];
                },
              },
              default_tty1_ops: {
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (C(ze(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (C(ze(t.output, 0)), (t.output = []));
                },
              },
            },
            Ye = function (t) {
              j();
            },
            Je = {
              ops_table: null,
              mount: function (t) {
                return Je.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (it.isBlkdev(r) || it.isFIFO(r)) throw new it.ErrnoError(63);
                Je.ops_table ||
                  (Je.ops_table = {
                    dir: {
                      node: {
                        getattr: Je.node_ops.getattr,
                        setattr: Je.node_ops.setattr,
                        lookup: Je.node_ops.lookup,
                        mknod: Je.node_ops.mknod,
                        rename: Je.node_ops.rename,
                        unlink: Je.node_ops.unlink,
                        rmdir: Je.node_ops.rmdir,
                        readdir: Je.node_ops.readdir,
                        symlink: Je.node_ops.symlink,
                      },
                      stream: { llseek: Je.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: Je.node_ops.getattr,
                        setattr: Je.node_ops.setattr,
                      },
                      stream: {
                        llseek: Je.stream_ops.llseek,
                        read: Je.stream_ops.read,
                        write: Je.stream_ops.write,
                        allocate: Je.stream_ops.allocate,
                        mmap: Je.stream_ops.mmap,
                        msync: Je.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: Je.node_ops.getattr,
                        setattr: Je.node_ops.setattr,
                        readlink: Je.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: Je.node_ops.getattr,
                        setattr: Je.node_ops.setattr,
                      },
                      stream: it.chrdev_stream_ops,
                    },
                  });
                var e = it.createNode(t, n, r, o);
                return (
                  it.isDir(e.mode)
                    ? ((e.node_ops = Je.ops_table.dir.node),
                      (e.stream_ops = Je.ops_table.dir.stream),
                      (e.contents = {}))
                    : it.isFile(e.mode)
                      ? ((e.node_ops = Je.ops_table.file.node),
                        (e.stream_ops = Je.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : it.isLink(e.mode)
                        ? ((e.node_ops = Je.ops_table.link.node),
                          (e.stream_ops = Je.ops_table.link.stream))
                        : it.isChrdev(e.mode) &&
                          ((e.node_ops = Je.ops_table.chrdev.node),
                          (e.stream_ops = Je.ops_table.chrdev.stream)),
                  (e.timestamp = Date.now()),
                  t && ((t.contents[n] = e), (t.timestamp = e.timestamp)),
                  e
                );
              },
              getFileDataAsTypedArray: function (t) {
                return t.contents
                  ? t.contents.subarray
                    ? t.contents.subarray(0, t.usedBytes)
                    : new Uint8Array(t.contents)
                  : new Uint8Array(0);
              },
              expandFileStorage: function (t, n) {
                var e = t.contents ? t.contents.length : 0;
                if (!(e >= n)) {
                  var r = 1024 * 1024;
                  ((n = Math.max(n, (e * (e < r ? 2 : 1.125)) >>> 0)),
                    e != 0 && (n = Math.max(n, 256)));
                  var o = t.contents;
                  ((t.contents = new Uint8Array(n)),
                    t.usedBytes > 0 &&
                      t.contents.set(o.subarray(0, t.usedBytes), 0));
                }
              },
              resizeFileStorage: function (t, n) {
                if (t.usedBytes != n)
                  if (n == 0) ((t.contents = null), (t.usedBytes = 0));
                  else {
                    var e = t.contents;
                    ((t.contents = new Uint8Array(n)),
                      e &&
                        t.contents.set(e.subarray(0, Math.min(n, t.usedBytes))),
                      (t.usedBytes = n));
                  }
              },
              node_ops: {
                getattr: function (t) {
                  var e = {};
                  return (
                    (e.dev = it.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    it.isDir(t.mode)
                      ? (e.size = 4096)
                      : it.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : it.isLink(t.mode)
                          ? (e.size = t.link.length)
                          : (e.size = 0),
                    (e.atime = new Date(t.timestamp)),
                    (e.mtime = new Date(t.timestamp)),
                    (e.ctime = new Date(t.timestamp)),
                    (e.blksize = 4096),
                    (e.blocks = Math.ceil(e.size / e.blksize)),
                    e
                  );
                },
                setattr: function (t, n) {
                  (n.mode !== void 0 && (t.mode = n.mode),
                    n.timestamp !== void 0 && (t.timestamp = n.timestamp),
                    n.size !== void 0 && Je.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw it.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return Je.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (it.isDir(t.mode)) {
                    var e;
                    try {
                      e = it.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new it.ErrnoError(55);
                  }
                  (delete t.parent.contents[t.name],
                    (t.parent.timestamp = Date.now()),
                    (t.name = r),
                    (n.contents[r] = t),
                    (n.timestamp = t.parent.timestamp));
                },
                unlink: function (t, n) {
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                rmdir: function (t, n) {
                  var e = it.lookupNode(t, n);
                  for (var r in e.contents) throw new it.ErrnoError(55);
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                readdir: function (t) {
                  var e = [".", ".."];
                  for (var n of Object.keys(t.contents)) e.push(n);
                  return e;
                },
                symlink: function (t, n, r) {
                  var e = Je.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!it.isLink(t.mode)) throw new it.ErrnoError(28);
                  return t.link;
                },
              },
              stream_ops: {
                read: function (t, n, r, o, a) {
                  var e = t.node.contents;
                  if (a >= t.node.usedBytes) return 0;
                  var i = Math.min(t.node.usedBytes - a, o);
                  if (i > 8 && e.subarray) n.set(e.subarray(a, a + i), r);
                  else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
                  return i;
                },
                write: function (t, n, r, o, a, i) {
                  if ((n.buffer === L.buffer && (i = !1), !o)) return 0;
                  var e = t.node;
                  if (
                    ((e.timestamp = Date.now()),
                    n.subarray && (!e.contents || e.contents.subarray))
                  ) {
                    if (i)
                      return (
                        (e.contents = n.subarray(r, r + o)),
                        (e.usedBytes = o),
                        o
                      );
                    if (e.usedBytes === 0 && a === 0)
                      return (
                        (e.contents = n.slice(r, r + o)),
                        (e.usedBytes = o),
                        o
                      );
                    if (a + o <= e.usedBytes)
                      return (e.contents.set(n.subarray(r, r + o), a), o);
                  }
                  if (
                    (Je.expandFileStorage(e, a + o),
                    e.contents.subarray && n.subarray)
                  )
                    e.contents.set(n.subarray(r, r + o), a);
                  else for (var l = 0; l < o; l++) e.contents[a + l] = n[r + l];
                  return ((e.usedBytes = Math.max(e.usedBytes, a + o)), o);
                },
                llseek: function (t, n, r) {
                  var e = n;
                  if (
                    (r === 1
                      ? (e += t.position)
                      : r === 2 &&
                        it.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new it.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (Je.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!it.isFile(t.node.mode)) throw new it.ErrnoError(43);
                  var e,
                    i,
                    l = t.node.contents;
                  if (!(a & 2) && l.buffer === L.buffer)
                    ((i = !1), (e = l.byteOffset));
                  else {
                    if (
                      ((r > 0 || r + n < l.length) &&
                        (l.subarray
                          ? (l = l.subarray(r, r + n))
                          : (l = Array.prototype.slice.call(l, r, r + n))),
                      (i = !0),
                      (e = Ye(n)),
                      !e)
                    )
                      throw new it.ErrnoError(48);
                    L.set(l, e);
                  }
                  return { ptr: e, allocated: i };
                },
                msync: function (t, n, r, o, a) {
                  return (Je.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            Ze = function (t, n, r, o) {
              var e = o ? "" : "al " + t;
              (g(t).then(
                function (t) {
                  (n(new Uint8Array(t)), e && z(e));
                },
                function (e) {
                  if (r) r();
                  else throw 'Loading data file "' + t + '" failed.';
                },
              ),
                e && G(e));
            },
            et = function (t, n, r, o, a, i) {
              it.createDataFile(t, n, r, o, a, i);
            },
            tt = [],
            nt = function (t, n, r, o) {
              typeof Browser != "undefined" && Browser.init();
              var e = !1;
              return (
                tt.forEach(function (a) {
                  e || (a.canHandle(n) && (a.handle(t, n, r, o), (e = !0)));
                }),
                e
              );
            },
            rt = function (t, n, r, o, a, i, l, s, u, c) {
              var e = n ? He.resolve(qe.join2(t, n)) : t,
                d = "cp " + e;
              function m(r) {
                function m(e) {
                  (c == null || c(),
                    s || et(t, n, e, o, a, u),
                    i == null || i(),
                    z(d));
                }
                nt(r, e, m, function () {
                  (l == null || l(), z(d));
                }) || m(r);
              }
              (G(d), typeof r == "string" ? Ze(r, m, l) : m(r));
            },
            ot = function (t) {
              var e = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
                n = e[t];
              if (typeof n == "undefined")
                throw new Error("Unknown file open mode: " + t);
              return n;
            },
            at = function (t, n) {
              var e = 0;
              return (t && (e |= 365), n && (e |= 146), e);
            },
            it = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: function (t) {
                "use strict";
                ((this.name = "ErrnoError"), (this.errno = t));
              },
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              FSStream: (function () {
                "use strict";
                function e() {
                  this.shared = {};
                }
                return babelHelpers.createClass(e, [
                  {
                    key: "object",
                    get: function () {
                      return this.node;
                    },
                    set: function (t) {
                      this.node = t;
                    },
                  },
                  {
                    key: "isRead",
                    get: function () {
                      return (this.flags & 2097155) !== 1;
                    },
                  },
                  {
                    key: "isWrite",
                    get: function () {
                      return (this.flags & 2097155) !== 0;
                    },
                  },
                  {
                    key: "isAppend",
                    get: function () {
                      return this.flags & 1024;
                    },
                  },
                  {
                    key: "flags",
                    get: function () {
                      return this.shared.flags;
                    },
                    set: function (t) {
                      this.shared.flags = t;
                    },
                  },
                  {
                    key: "position",
                    get: function () {
                      return this.shared.position;
                    },
                    set: function (t) {
                      this.shared.position = t;
                    },
                  },
                ]);
              })(),
              FSNode: (function () {
                "use strict";
                function e(e, t, n, r) {
                  (e || (e = this),
                    (this.parent = e),
                    (this.mount = e.mount),
                    (this.mounted = null),
                    (this.id = it.nextInode++),
                    (this.name = t),
                    (this.mode = n),
                    (this.node_ops = {}),
                    (this.stream_ops = {}),
                    (this.rdev = r),
                    (this.readMode = 365),
                    (this.writeMode = 146));
                }
                return babelHelpers.createClass(e, [
                  {
                    key: "read",
                    get: function () {
                      return (this.mode & this.readMode) === this.readMode;
                    },
                    set: function (t) {
                      t
                        ? (this.mode |= this.readMode)
                        : (this.mode &= ~this.readMode);
                    },
                  },
                  {
                    key: "write",
                    get: function () {
                      return (this.mode & this.writeMode) === this.writeMode;
                    },
                    set: function (t) {
                      t
                        ? (this.mode |= this.writeMode)
                        : (this.mode &= ~this.writeMode);
                    },
                  },
                  {
                    key: "isFolder",
                    get: function () {
                      return it.isDir(this.mode);
                    },
                  },
                  {
                    key: "isDevice",
                    get: function () {
                      return it.isChrdev(this.mode);
                    },
                  },
                ]);
              })(),
              lookupPath: function (t, n) {
                if ((n === void 0 && (n = {}), (t = He.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new it.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = it.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = it.lookupNode(o, r[i])),
                    (a = qe.join2(a, r[i])),
                    it.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; it.isLink(o.mode); ) {
                      var u = it.readlink(a);
                      a = He.resolve(qe.dirname(a), u);
                      var c = it.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new it.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (it.isRoot(t)) {
                    var n = t.mount.mountpoint;
                    return e
                      ? n[n.length - 1] !== "/"
                        ? n + "/" + e
                        : n + e
                      : n;
                  }
                  ((e = e ? t.name + "/" + e : t.name), (t = t.parent));
                }
              },
              hashName: function (t, n) {
                for (var e = 0, r = 0; r < n.length; r++)
                  e = ((e << 5) - e + n.charCodeAt(r)) | 0;
                return ((t + e) >>> 0) % it.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = it.hashName(t.parent.id, t.name);
                ((t.name_next = it.nameTable[e]), (it.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = it.hashName(t.parent.id, t.name);
                if (it.nameTable[e] === t) it.nameTable[e] = t.name_next;
                else
                  for (var n = it.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = it.mayLookup(t);
                if (e) throw new it.ErrnoError(e);
                for (
                  var r = it.hashName(t.id, n), o = it.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return it.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                var e = new it.FSNode(t, n, r, o);
                return (it.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                it.hashRemoveNode(t);
              },
              isRoot: function (t) {
                return t === t.parent;
              },
              isMountpoint: function (t) {
                return !!t.mounted;
              },
              isFile: function (t) {
                return (t & 61440) === 32768;
              },
              isDir: function (t) {
                return (t & 61440) === 16384;
              },
              isLink: function (t) {
                return (t & 61440) === 40960;
              },
              isChrdev: function (t) {
                return (t & 61440) === 8192;
              },
              isBlkdev: function (t) {
                return (t & 61440) === 24576;
              },
              isFIFO: function (t) {
                return (t & 61440) === 4096;
              },
              isSocket: function (t) {
                return (t & 49152) === 49152;
              },
              flagsToPermissionString: function (t) {
                var e = ["r", "w", "rw"][t & 3];
                return (t & 512 && (e += "w"), e);
              },
              nodePermissions: function (t, n) {
                return it.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                if (!it.isDir(t.mode)) return 54;
                var e = it.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = it.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return it.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = it.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = it.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!it.isDir(e.mode)) return 54;
                  if (it.isRoot(e) || it.getPath(e) === it.cwd()) return 10;
                } else if (it.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? it.isLink(t.mode)
                    ? 32
                    : it.isDir(t.mode) &&
                        (it.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : it.nodePermissions(t, it.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= it.MAX_OPEN_FDS; e++)
                  if (!it.streams[e]) return e;
                throw new it.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = it.getStream(t);
                if (!e) throw new it.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return it.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  (t = Object.assign(new it.FSStream(), t)),
                  n == -1 && (n = it.nextfd()),
                  (t.fd = n),
                  (it.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                it.streams[t] = null;
              },
              dupStream: function (t, n) {
                var e;
                n === void 0 && (n = -1);
                var r = it.createStream(t, n);
                return (
                  (e = r.stream_ops) == null || e.dup == null || e.dup(r),
                  r
                );
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = it.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open == null || t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new it.ErrnoError(70);
                },
              },
              major: function (t) {
                return t >> 8;
              },
              minor: function (t) {
                return t & 255;
              },
              makedev: function (t, n) {
                return (t << 8) | n;
              },
              registerDevice: function (t, n) {
                it.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return it.devices[t];
              },
              getMounts: function (t) {
                for (var e = [], n = [t]; n.length; ) {
                  var r = n.pop();
                  (e.push(r), n.push.apply(n, r.mounts));
                }
                return e;
              },
              syncfs: function (t, n) {
                (typeof t == "function" && ((n = t), (t = !1)),
                  it.syncFSRequests++,
                  it.syncFSRequests > 1 &&
                    C(
                      "warning: " +
                        it.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = it.getMounts(it.root.mount),
                  r = 0;
                function o(e) {
                  return (it.syncFSRequests--, n(e));
                }
                function a(t) {
                  if (t) return a.errored ? void 0 : ((a.errored = !0), o(t));
                  ++r >= e.length && o(null);
                }
                e.forEach(function (e) {
                  if (!e.type.syncfs) return a(null);
                  e.type.syncfs(e, t, a);
                });
              },
              mount: function (t, n, r) {
                var e = r === "/",
                  o = !r,
                  a;
                if (e && it.root) throw new it.ErrnoError(10);
                if (!e && !o) {
                  var i = it.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), it.isMountpoint(a)))
                    throw new it.ErrnoError(10);
                  if (!it.isDir(a.mode)) throw new it.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (it.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = it.lookupPath(t, { follow_mount: !1 });
                if (!it.isMountpoint(e.node)) throw new it.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = it.getMounts(r);
                (Object.keys(it.nameTable).forEach(function (e) {
                  for (var t = it.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && it.destroyNode(t), (t = n));
                  }
                }),
                  (n.mounted = null));
                var a = n.mount.mounts.indexOf(r);
                n.mount.mounts.splice(a, 1);
              },
              lookup: function (t, n) {
                return t.node_ops.lookup(t, n);
              },
              mknod: function (t, n, r) {
                var e = it.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = qe.basename(t);
                if (!a || a === "." || a === "..") throw new it.ErrnoError(28);
                var i = it.mayCreate(o, a);
                if (i) throw new it.ErrnoError(i);
                if (!o.node_ops.mknod) throw new it.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  it.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  it.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      it.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  it.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!He.resolve(t)) throw new it.ErrnoError(44);
                var e = it.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new it.ErrnoError(44);
                var o = qe.basename(n),
                  a = it.mayCreate(r, o);
                if (a) throw new it.ErrnoError(a);
                if (!r.node_ops.symlink) throw new it.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = qe.dirname(t),
                  r = qe.dirname(n),
                  o = qe.basename(t),
                  a = qe.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = it.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = it.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new it.ErrnoError(44);
                if (l.mount !== s.mount) throw new it.ErrnoError(75);
                var u = it.lookupNode(l, o),
                  c = He.relative(t, r);
                if (c.charAt(0) !== ".") throw new it.ErrnoError(28);
                if (((c = He.relative(n, e)), c.charAt(0) !== "."))
                  throw new it.ErrnoError(55);
                var d;
                try {
                  d = it.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = it.isDir(u.mode),
                    p = it.mayDelete(l, o, m);
                  if (p) throw new it.ErrnoError(p);
                  if (((p = d ? it.mayDelete(s, a, m) : it.mayCreate(s, a)), p))
                    throw new it.ErrnoError(p);
                  if (!l.node_ops.rename) throw new it.ErrnoError(63);
                  if (it.isMountpoint(u) || (d && it.isMountpoint(d)))
                    throw new it.ErrnoError(10);
                  if (s !== l && ((p = it.nodePermissions(l, "w")), p))
                    throw new it.ErrnoError(p);
                  it.hashRemoveNode(u);
                  try {
                    (l.node_ops.rename(u, s, a), (u.parent = s));
                  } catch (e) {
                    throw e;
                  } finally {
                    it.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = it.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = qe.basename(t),
                  o = it.lookupNode(n, r),
                  a = it.mayDelete(n, r, !0);
                if (a) throw new it.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new it.ErrnoError(63);
                if (it.isMountpoint(o)) throw new it.ErrnoError(10);
                (n.node_ops.rmdir(n, r), it.destroyNode(o));
              },
              readdir: function (t) {
                var e = it.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new it.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = it.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new it.ErrnoError(44);
                var r = qe.basename(t),
                  o = it.lookupNode(n, r),
                  a = it.mayDelete(n, r, !1);
                if (a) throw new it.ErrnoError(a);
                if (!n.node_ops.unlink) throw new it.ErrnoError(63);
                if (it.isMountpoint(o)) throw new it.ErrnoError(10);
                (n.node_ops.unlink(n, r), it.destroyNode(o));
              },
              readlink: function (t) {
                var e = it.lookupPath(t),
                  n = e.node;
                if (!n) throw new it.ErrnoError(44);
                if (!n.node_ops.readlink) throw new it.ErrnoError(28);
                return He.resolve(it.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = it.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new it.ErrnoError(44);
                if (!r.node_ops.getattr) throw new it.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return it.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = it.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new it.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                it.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = it.getStreamChecked(t);
                it.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = it.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new it.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                it.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = it.getStreamChecked(t);
                it.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new it.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = it.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new it.ErrnoError(63);
                if (it.isDir(e.mode)) throw new it.ErrnoError(31);
                if (!it.isFile(e.mode)) throw new it.ErrnoError(28);
                var o = it.nodePermissions(e, "w");
                if (o) throw new it.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = it.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new it.ErrnoError(28);
                it.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = it.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new it.ErrnoError(44);
                ((n = typeof n == "string" ? ot(n) : n),
                  n & 64
                    ? ((r = typeof r == "undefined" ? 438 : r),
                      (r = (r & 4095) | 32768))
                    : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = qe.normalize(t);
                  try {
                    var o = it.lookupPath(t, { follow: !(n & 131072) });
                    e = o.node;
                  } catch (e) {}
                }
                var i = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new it.ErrnoError(20);
                  } else ((e = it.mknod(t, r, 0)), (i = !0));
                if (!e) throw new it.ErrnoError(44);
                if (
                  (it.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !it.isDir(e.mode))
                )
                  throw new it.ErrnoError(54);
                if (!i) {
                  var l = it.mayOpen(e, n);
                  if (l) throw new it.ErrnoError(l);
                }
                (n & 512 && !i && it.truncate(e, 0), (n &= -131713));
                var s = it.createStream({
                  node: e,
                  path: it.getPath(e),
                  flags: n,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                return (
                  s.stream_ops.open && s.stream_ops.open(s),
                  a.logReadFiles &&
                    !(n & 1) &&
                    (it.readFiles || (it.readFiles = {}),
                    t in it.readFiles || (it.readFiles[t] = 1)),
                  s
                );
              },
              close: function (t) {
                if (it.isClosed(t)) throw new it.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  it.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (it.isClosed(t)) throw new it.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new it.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new it.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if (o < 0 || a < 0) throw new it.ErrnoError(28);
                if (it.isClosed(t)) throw new it.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new it.ErrnoError(8);
                if (it.isDir(t.node.mode)) throw new it.ErrnoError(31);
                if (!t.stream_ops.read) throw new it.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new it.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if (o < 0 || a < 0) throw new it.ErrnoError(28);
                if (it.isClosed(t)) throw new it.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new it.ErrnoError(8);
                if (it.isDir(t.node.mode)) throw new it.ErrnoError(31);
                if (!t.stream_ops.write) throw new it.ErrnoError(28);
                t.seekable && t.flags & 1024 && it.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new it.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (it.isClosed(t)) throw new it.ErrnoError(8);
                if (n < 0 || r <= 0) throw new it.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new it.ErrnoError(8);
                if (!it.isFile(t.node.mode) && !it.isDir(t.node.mode))
                  throw new it.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new it.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new it.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new it.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new it.ErrnoError(43);
                return t.stream_ops.mmap(t, n, r, o, a);
              },
              msync: function (t, n, r, o, a) {
                return t.stream_ops.msync
                  ? t.stream_ops.msync(t, n, r, o, a)
                  : 0;
              },
              ioctl: function (t, n, r) {
                if (!t.stream_ops.ioctl) throw new it.ErrnoError(59);
                return t.stream_ops.ioctl(t, n, r);
              },
              readFile: function (t, n) {
                if (
                  (n === void 0 && (n = {}),
                  (n.flags = n.flags || 0),
                  (n.encoding = n.encoding || "binary"),
                  n.encoding !== "utf8" && n.encoding !== "binary")
                )
                  throw new Error('Invalid encoding type "' + n.encoding + '"');
                var e,
                  r = it.open(t, n.flags),
                  o = it.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  it.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = ze(i, 0))
                    : n.encoding === "binary" && (e = i),
                  it.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = it.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array(ve(n) + 1),
                    a = Se(n, o, 0, o.length);
                  it.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  it.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                it.close(e);
              },
              cwd: function () {
                return it.currentPath;
              },
              chdir: function (t) {
                var e = it.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new it.ErrnoError(44);
                if (!it.isDir(e.node.mode)) throw new it.ErrnoError(54);
                var n = it.nodePermissions(e.node, "x");
                if (n) throw new it.ErrnoError(n);
                it.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (it.mkdir("/tmp"),
                  it.mkdir("/home"),
                  it.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (it.mkdir("/dev"),
                  it.registerDevice(it.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  it.mkdev("/dev/null", it.makedev(1, 3)),
                  Xe.register(it.makedev(5, 0), Xe.default_tty_ops),
                  Xe.register(it.makedev(6, 0), Xe.default_tty1_ops),
                  it.mkdev("/dev/tty", it.makedev(5, 0)),
                  it.mkdev("/dev/tty1", it.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = Ve(e).byteLength), e[--t]);
                  };
                (it.createDevice("/dev", "random", n),
                  it.createDevice("/dev", "urandom", n),
                  it.mkdir("/dev/shm"),
                  it.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                it.mkdir("/proc");
                var e = it.mkdir("/proc/self");
                (it.mkdir("/proc/self/fd"),
                  it.mount(
                    {
                      mount: function () {
                        var t = it.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = it.getStreamChecked(e),
                                o = {
                                  parent: null,
                                  mount: { mountpoint: "fake" },
                                  node_ops: {
                                    readlink: function () {
                                      return r.path;
                                    },
                                  },
                                };
                              return ((o.parent = o), o);
                            },
                          }),
                          t
                        );
                      },
                    },
                    {},
                    "/proc/self/fd",
                  ));
              },
              createStandardStreams: function () {
                (a.stdin
                  ? it.createDevice("/dev", "stdin", a.stdin)
                  : it.symlink("/dev/tty", "/dev/stdin"),
                  a.stdout
                    ? it.createDevice("/dev", "stdout", null, a.stdout)
                    : it.symlink("/dev/tty", "/dev/stdout"),
                  a.stderr
                    ? it.createDevice("/dev", "stderr", null, a.stderr)
                    : it.symlink("/dev/tty1", "/dev/stderr"));
                var e = it.open("/dev/stdin", 0),
                  t = it.open("/dev/stdout", 1),
                  n = it.open("/dev/stderr", 1);
              },
              staticInit: function () {
                ([44].forEach(function (e) {
                  ((it.genericErrors[e] = new it.ErrnoError(e)),
                    (it.genericErrors[e].stack = "<generic error, no stack>"));
                }),
                  (it.nameTable = new Array(4096)),
                  it.mount(Je, {}, "/"),
                  it.createDefaultDirectories(),
                  it.createDefaultDevices(),
                  it.createSpecialDirectories(),
                  (it.filesystems = { MEMFS: Je }));
              },
              init: function (t, n, r) {
                ((it.init.initialized = !0),
                  (a.stdin = t || a.stdin),
                  (a.stdout = n || a.stdout),
                  (a.stderr = r || a.stderr),
                  it.createStandardStreams());
              },
              quit: function () {
                it.init.initialized = !1;
                for (var e = 0; e < it.streams.length; e++) {
                  var t = it.streams[e];
                  t && it.close(t);
                }
              },
              findObject: function (t, n) {
                var e = it.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = it.lookupPath(t, { follow: !n });
                  t = e.path;
                } catch (e) {}
                var r = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var e = it.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = qe.basename(t)),
                    (e = it.lookupPath(t, { follow: !n })),
                    (r.exists = !0),
                    (r.path = e.path),
                    (r.object = e.node),
                    (r.name = e.node.name),
                    (r.isRoot = e.path === "/"));
                } catch (e) {
                  r.error = e.errno;
                }
                return r;
              },
              createPath: function (t, n, r, o) {
                t = typeof t == "string" ? t : it.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = qe.join2(t, a);
                    try {
                      it.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = qe.join2(typeof t == "string" ? t : it.getPath(t), n),
                  i = at(o, a);
                return it.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : it.getPath(t)),
                  (e = n ? qe.join2(t, n) : t));
                var l = at(o, a),
                  s = it.create(e, l);
                if (r) {
                  if (typeof r == "string") {
                    for (
                      var u = new Array(r.length), c = 0, d = r.length;
                      c < d;
                      ++c
                    )
                      u[c] = r.charCodeAt(c);
                    r = u;
                  }
                  it.chmod(s, l | 146);
                  var m = it.open(s, 577);
                  (it.write(m, r, 0, r.length, 0, i),
                    it.close(m),
                    it.chmod(s, l));
                }
              },
              createDevice: function (t, n, r, o) {
                var e = qe.join2(typeof t == "string" ? t : it.getPath(t), n),
                  a = at(!!r, !!o);
                it.createDevice.major || (it.createDevice.major = 64);
                var i = it.makedev(it.createDevice.major++, 0);
                return (
                  it.registerDevice(i, {
                    open: function (t) {
                      t.seekable = !1;
                    },
                    close: function (t) {
                      var e;
                      o != null && (e = o.buffer) != null && e.length && o(10);
                    },
                    read: function (t, n, o, a, i) {
                      for (var e = 0, l = 0; l < a; l++) {
                        var s;
                        try {
                          s = r();
                        } catch (e) {
                          throw new it.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new it.ErrnoError(6);
                        if (s == null) break;
                        (e++, (n[o + l] = s));
                      }
                      return (e && (t.node.timestamp = Date.now()), e);
                    },
                    write: function (t, n, r, a, i) {
                      for (var e = 0; e < a; e++)
                        try {
                          o(n[r + e]);
                        } catch (e) {
                          throw new it.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  it.mkdev(e, a, i)
                );
              },
              forceLoadFile: function (t) {
                if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                  );
                try {
                  ((t.contents = h(t.url)), (t.usedBytes = t.contents.length));
                } catch (e) {
                  throw new it.ErrnoError(29);
                }
              },
              createLazyFile: function (t, n, r, o, a) {
                var e = (function () {
                  "use strict";
                  function e() {
                    ((this.lengthKnown = !1), (this.chunks = []));
                  }
                  var t = e.prototype;
                  return (
                    (t.get = function (t) {
                      if (!(t > this.length - 1 || t < 0)) {
                        var e = t % this.chunkSize,
                          n = (t / this.chunkSize) | 0;
                        return this.getter(n)[e];
                      }
                    }),
                    (t.setDataGetter = function (t) {
                      this.getter = t;
                    }),
                    (t.cacheLength = function () {
                      var e = new XMLHttpRequest();
                      if (
                        (e.open("HEAD", r, !1),
                        e.send(null),
                        !(
                          (e.status >= 200 && e.status < 300) ||
                          e.status === 304
                        ))
                      )
                        throw new Error(
                          "Couldn't load " + r + ". Status: " + e.status,
                        );
                      var t = Number(e.getResponseHeader("Content-length")),
                        n,
                        o =
                          (n = e.getResponseHeader("Accept-Ranges")) &&
                          n === "bytes",
                        a =
                          (n = e.getResponseHeader("Content-Encoding")) &&
                          n === "gzip",
                        i = 1024 * 1024;
                      o || (i = t);
                      var l = function (n, o) {
                          if (n > o)
                            throw new Error(
                              "invalid range (" +
                                n +
                                ", " +
                                o +
                                ") or no bytes requested!",
                            );
                          if (o > t - 1)
                            throw new Error(
                              "only " +
                                t +
                                " bytes available! programmer error!",
                            );
                          var e = new XMLHttpRequest();
                          if (
                            (e.open("GET", r, !1),
                            t !== i &&
                              e.setRequestHeader(
                                "Range",
                                "bytes=" + n + "-" + o,
                              ),
                            (e.responseType = "arraybuffer"),
                            e.overrideMimeType &&
                              e.overrideMimeType(
                                "text/plain; charset=x-user-defined",
                              ),
                            e.send(null),
                            !(
                              (e.status >= 200 && e.status < 300) ||
                              e.status === 304
                            ))
                          )
                            throw new Error(
                              "Couldn't load " + r + ". Status: " + e.status,
                            );
                          return e.response !== void 0
                            ? new Uint8Array(e.response || [])
                            : Ke(e.responseText || "", !0);
                        },
                        s = this;
                      (s.setDataGetter(function (e) {
                        var n = e * i,
                          r = (e + 1) * i - 1;
                        if (
                          ((r = Math.min(r, t - 1)),
                          typeof s.chunks[e] == "undefined" &&
                            (s.chunks[e] = l(n, r)),
                          typeof s.chunks[e] == "undefined")
                        )
                          throw new Error("doXHR failed!");
                        return s.chunks[e];
                      }),
                        (a || !t) &&
                          ((i = t = 1),
                          (t = this.getter(0).length),
                          (i = t),
                          y(
                            "LazyFiles on gzip forces download of the whole file when length is accessed",
                          )),
                        (this.$1 = t),
                        (this.$2 = i),
                        (this.lengthKnown = !0));
                    }),
                    babelHelpers.createClass(e, [
                      {
                        key: "length",
                        get: function () {
                          return (
                            this.lengthKnown || this.cacheLength(),
                            this.$1
                          );
                        },
                      },
                      {
                        key: "chunkSize",
                        get: function () {
                          return (
                            this.lengthKnown || this.cacheLength(),
                            this.$2
                          );
                        },
                      },
                    ])
                  );
                })();
                if (typeof XMLHttpRequest != "undefined")
                  var i = new e(),
                    l = { isDevice: !1, contents: i };
                else var l = { isDevice: !1, url: r };
                var s = it.createFile(t, n, l, o, a);
                (l.contents
                  ? (s.contents = l.contents)
                  : l.url && ((s.contents = null), (s.url = l.url)),
                  Object.defineProperties(s, {
                    usedBytes: {
                      get: function () {
                        return this.contents.length;
                      },
                    },
                  }));
                var u = {},
                  c = Object.keys(s.stream_ops);
                c.forEach(function (e) {
                  var t = s.stream_ops[e];
                  u[e] = function () {
                    return (it.forceLoadFile(s), t.apply(void 0, arguments));
                  };
                });
                function d(e, t, n, r, o) {
                  var a = e.node.contents;
                  if (o >= a.length) return 0;
                  var i = Math.min(a.length - o, r);
                  if (a.slice) for (var l = 0; l < i; l++) t[n + l] = a[o + l];
                  else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
                  return i;
                }
                return (
                  (u.read = function (e, t, n, r, o) {
                    return (it.forceLoadFile(s), d(e, t, n, r, o));
                  }),
                  (u.mmap = function (e, t, n, r, o) {
                    it.forceLoadFile(s);
                    var a = Ye(t);
                    if (!a) throw new it.ErrnoError(48);
                    return (d(e, L, a, t, n), { ptr: a, allocated: !0 });
                  }),
                  (s.stream_ops = u),
                  s
                );
              },
            },
            lt = function (t, n) {
              return t ? ze(E, t, n) : "";
            },
            st = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (qe.isAbs(n)) return n;
                var e;
                if (t === -100) e = it.cwd();
                else {
                  var o = st.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new it.ErrnoError(44);
                  return e;
                }
                return qe.join2(e, n);
              },
              doStat: function (t, n, r) {
                var e = t(n);
                ((T[r >> 2] = e.dev),
                  (T[(r + 4) >> 2] = e.mode),
                  (D[(r + 8) >> 2] = e.nlink),
                  (T[(r + 12) >> 2] = e.uid),
                  (T[(r + 16) >> 2] = e.gid),
                  (T[(r + 20) >> 2] = e.rdev),
                  (ae = [
                    e.size >>> 0,
                    ((oe = e.size),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (T[(r + 24) >> 2] = ae[0]),
                  (T[(r + 28) >> 2] = ae[1]),
                  (T[(r + 32) >> 2] = 4096),
                  (T[(r + 36) >> 2] = e.blocks));
                var o = e.atime.getTime(),
                  a = e.mtime.getTime(),
                  i = e.ctime.getTime();
                return (
                  (ae = [
                    Math.floor(o / 1e3) >>> 0,
                    ((oe = Math.floor(o / 1e3)),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (T[(r + 40) >> 2] = ae[0]),
                  (T[(r + 44) >> 2] = ae[1]),
                  (D[(r + 48) >> 2] = (o % 1e3) * 1e3),
                  (ae = [
                    Math.floor(a / 1e3) >>> 0,
                    ((oe = Math.floor(a / 1e3)),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (T[(r + 56) >> 2] = ae[0]),
                  (T[(r + 60) >> 2] = ae[1]),
                  (D[(r + 64) >> 2] = (a % 1e3) * 1e3),
                  (ae = [
                    Math.floor(i / 1e3) >>> 0,
                    ((oe = Math.floor(i / 1e3)),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (T[(r + 72) >> 2] = ae[0]),
                  (T[(r + 76) >> 2] = ae[1]),
                  (D[(r + 80) >> 2] = (i % 1e3) * 1e3),
                  (ae = [
                    e.ino >>> 0,
                    ((oe = e.ino),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (T[(r + 88) >> 2] = ae[0]),
                  (T[(r + 92) >> 2] = ae[1]),
                  0
                );
              },
              doMsync: function (t, n, r, o, a) {
                if (!it.isFile(n.node.mode)) throw new it.ErrnoError(43);
                if (o & 2) return 0;
                var e = E.slice(t, t + r);
                it.msync(n, e, a, r, o);
              },
              getStreamFromFD: function (t) {
                var e = it.getStreamChecked(t);
                return e;
              },
              varargs: void 0,
              getStr: function (t) {
                var e = lt(t);
                return e;
              },
            };
          function ut(e) {
            try {
              var t = st.getStreamFromFD(e);
              return (it.close(t), 0);
            } catch (e) {
              if (typeof it == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var ct = function (t, n) {
            return (n + 2097152) >>> 0 < 4194305 - !!t
              ? (t >>> 0) + n * 4294967296
              : NaN;
          };
          function dt(e, t, n, r, o) {
            var a = ct(t, n);
            try {
              if (isNaN(a)) return 61;
              var i = st.getStreamFromFD(e);
              return (
                it.llseek(i, a, r),
                (ae = [
                  i.position >>> 0,
                  ((oe = i.position),
                  +Math.abs(oe) >= 1
                    ? oe > 0
                      ? +Math.floor(oe / 4294967296) >>> 0
                      : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                    : 0),
                ]),
                (T[o >> 2] = ae[0]),
                (T[(o + 4) >> 2] = ae[1]),
                i.getdents && a === 0 && r === 0 && (i.getdents = null),
                0
              );
            } catch (e) {
              if (typeof it == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var mt = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = D[n >> 2],
                l = D[(n + 4) >> 2];
              n += 8;
              var s = it.write(t, L, i, l, o);
              if (s < 0) return -1;
              ((e += s), typeof o != "undefined" && (o += s));
            }
            return e;
          };
          function pt(e, t, n, r) {
            try {
              var o = st.getStreamFromFD(e),
                a = mt(o, t, n);
              return ((D[r >> 2] = a), 0);
            } catch (e) {
              if (typeof it == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var _t,
            ft = function (t) {
              return _t.get(t);
            },
            gt = function (t) {
              var e = a["_" + t];
              return e;
            },
            ht = function (t, n) {
              L.set(t, n);
            },
            yt = function (t) {
              return xt(t);
            },
            Ct = function (t) {
              var e = ve(t) + 1,
                n = yt(e);
              return (Re(t, n, e), n);
            },
            bt = function (t, n, r, o, a) {
              var e = {
                string: function (t) {
                  var e = 0;
                  return (t != null && t !== 0 && (e = Ct(t)), e);
                },
                array: function (t) {
                  var e = yt(t.length);
                  return (ht(t, e), e);
                },
              };
              function i(e) {
                return n === "string" ? lt(e) : n === "boolean" ? !!e : e;
              }
              var l = gt(t),
                s = [],
                u = 0;
              if (o)
                for (var c = 0; c < o.length; c++) {
                  var d = e[r[c]];
                  d ? (u === 0 && (u = ue()), (s[c] = d(o[c]))) : (s[c] = o[c]);
                }
              var m = l.apply(void 0, s);
              function p(e) {
                return (u !== 0 && se(u), i(e));
              }
              return ((m = p(m)), m);
            };
          ((it.createPreloadedFile = rt), it.staticInit());
          var vt = {
              v: me,
              a: ye,
              j: Ce,
              u: be,
              b: fe,
              o: Le,
              r: Ee,
              p: ke,
              n: De,
              s: Me,
              t: we,
              l: We,
              q: ut,
              m: dt,
              h: pt,
              g: Bt,
              f: Ft,
              k: qt,
              i: Wt,
              c: Ot,
              d: At,
              e: wt,
              w: Ut,
            },
            St = re(),
            Rt = function () {
              return (Rt = St.y)();
            },
            Lt = (a._encode_progressive_jpeg = function (e, t, n, r, o, i) {
              return (Lt = a._encode_progressive_jpeg = St.z)(e, t, n, r, o, i);
            }),
            Et = (a._malloc = function (e) {
              return (Et = a._malloc = St.B)(e);
            }),
            kt = (a._free = function (e) {
              return (kt = a._free = St.C)(e);
            }),
            It = function (t, n) {
              return (It = St.D)(t, n);
            },
            Tt = function (t) {
              return (Tt = St.E)(t);
            },
            Dt = function (t) {
              return (Dt = St.F)(t);
            },
            xt = function (t) {
              return (xt = St.G)(t);
            },
            $t = function () {
              return ($t = St.H)();
            },
            Pt = function (t) {
              return (Pt = St.I)(t);
            },
            Nt = function (t, n, r) {
              return (Nt = St.J)(t, n, r);
            },
            Mt = function (t) {
              return (Mt = St.K)(t);
            };
          function wt(e, t, n, r) {
            var o = ue();
            try {
              ft(e)(t, n, r);
            } catch (e) {
              if ((se(o), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function At(e, t, n) {
            var r = ue();
            try {
              ft(e)(t, n);
            } catch (e) {
              if ((se(r), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function Ft(e, t, n, r) {
            var o = ue();
            try {
              return ft(e)(t, n, r);
            } catch (e) {
              if ((se(o), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function Ot(e, t) {
            var n = ue();
            try {
              ft(e)(t);
            } catch (e) {
              if ((se(n), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function Bt(e, t) {
            var n = ue();
            try {
              return ft(e)(t);
            } catch (e) {
              if ((se(n), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function Wt(e) {
            var t = ue();
            try {
              ft(e)();
            } catch (e) {
              if ((se(t), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function qt(e, t, n, r, o, a) {
            var i = ue();
            try {
              return ft(e)(t, n, r, o, a);
            } catch (e) {
              if ((se(i), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          function Ut(e, t, n, r, o, a, i) {
            var l = ue();
            try {
              ft(e)(t, n, r, o, a, i);
            } catch (e) {
              if ((se(l), e !== e + 0)) throw e;
              It(1, 0);
            }
          }
          ((a.wasmMemory = v), (a.ccall = bt));
          var Vt;
          V = function e() {
            (Vt || Ht(), Vt || (V = e));
          };
          function Ht() {
            if (q > 0 || (F(), q > 0)) return;
            function e() {
              Vt || ((Vt = !0), (a.calledRun = !0), !S && (O(), i(a), B()));
            }
            e();
          }
          return (Ht(), (o = s), o);
        };
      })();
    typeof i == "object" && typeof a == "object"
      ? (a.exports = l)
      : typeof define == "function" &&
        define.amd &&
        define([], function () {
          return l;
        });
  },
  null,
);

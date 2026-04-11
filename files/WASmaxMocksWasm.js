__d(
  "WASmaxMocksWasm",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        var t =
          typeof document != "undefined" && document.currentScript
            ? document.currentScript.src
            : void 0;
        return function (r) {
          r === void 0 && (r = {});
          var o = r,
            a,
            i;
          o.ready = new (e || (e = n("Promise")))(function (e, t) {
            ((a = e), (i = t));
          });
          var l = Object.assign({}, o),
            s = "./this.program",
            u = !0,
            c = !1,
            d = "";
          function m(e) {
            return d + e;
          }
          var p, _, f, g;
          (typeof document != "undefined" &&
            document.currentScript &&
            (d = document.currentScript.src),
            t && (d = t),
            d.indexOf("blob:") !== 0
              ? (d = d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1))
              : (d = ""),
            (p = function (t) {
              var e = new XMLHttpRequest();
              return (e.open("GET", t, !1), e.send(null), e.responseText);
            }),
            (_ = function (t, n, r) {
              var e = new XMLHttpRequest();
              (e.open("GET", t, !0),
                (e.responseType = "arraybuffer"),
                (e.onload = function () {
                  if (e.status == 200 || (e.status == 0 && e.response)) {
                    n(e.response);
                    return;
                  }
                  r();
                }),
                (e.onerror = r),
                e.send(null));
            }),
            (g = function (t) {
              return (document.title = t);
            }));
          var h = console.log.bind(console),
            y = console.error.bind(console);
          (Object.assign(o, l), (l = null));
          var C;
          typeof WebAssembly != "object" &&
            Q("no native wasm support detected");
          var b,
            v,
            S = !1,
            R;
          function L(e, t) {
            e || Q(t);
          }
          var E, k, I, T, D, x, $, P;
          function N() {
            var e = b.buffer;
            ((o.HEAP8 = E = new Int8Array(e)),
              (o.HEAP16 = I = new Int16Array(e)),
              (o.HEAP32 = D = new Int32Array(e)),
              (o.HEAPU8 = k = new Uint8Array(e)),
              (o.HEAPU16 = T = new Uint16Array(e)),
              (o.HEAPU32 = x = new Uint32Array(e)),
              (o.HEAPF32 = $ = new Float32Array(e)),
              (o.HEAPF64 = P = new Float64Array(e)));
          }
          var M,
            w = [],
            A = [],
            F = [],
            O = !1;
          function B() {
            ie(w);
          }
          function W() {
            ((O = !0),
              !o.noFSInit && !Pe.init.initialized && Pe.init(),
              (Pe.ignorePermissions = !1),
              Re.init(),
              ie(A));
          }
          function q() {
            ie(F);
          }
          function U(e) {
            A.unshift(e);
          }
          var V = 0,
            H = null,
            G = null;
          function z(e) {
            return e;
          }
          function j(e) {
            V++;
          }
          function K(e) {
            if (
              (V--, V == 0 && (H !== null && (clearInterval(H), (H = null)), G))
            ) {
              var t = G;
              ((G = null), t());
            }
          }
          function Q(e) {
            ((e = "Aborted(" + e + ")"),
              y(e),
              (S = !0),
              (R = 1),
              (e += ". Build with -sASSERTIONS for more info."));
            var t = new WebAssembly.RuntimeError(e);
            throw (i(t), t);
          }
          var X = "data:application/octet-stream;base64,";
          function Y(e) {
            return e.startsWith(X);
          }
          var J;
          ((J = "smax_mocks_wasm.wasm"), Y(J) || (J = m(J)));
          function Z(e) {
            if (e == J && C) return new Uint8Array(C);
            if (f) return f(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function ee(t) {
            return !C && (u || c) && typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" })
                  .then(function (e) {
                    if (!e.ok)
                      throw "failed to load wasm binary file at '" + t + "'";
                    return e.arrayBuffer();
                  })
                  .catch(function () {
                    return Z(t);
                  })
              : (e || (e = n("Promise"))).resolve().then(function () {
                  return Z(t);
                });
          }
          function te(e, t, n) {
            return ee(e)
              .then(function (e) {
                return WebAssembly.instantiate(e, t);
              })
              .then(function (e) {
                return e;
              })
              .then(n, function (e) {
                (y("failed to asynchronously prepare wasm: " + e), Q(e));
              });
          }
          function ne(e, t, n, r) {
            return !e &&
              typeof WebAssembly.instantiateStreaming == "function" &&
              !Y(t) &&
              typeof fetch == "function"
              ? fetch(t, { credentials: "same-origin" }).then(function (e) {
                  var o = WebAssembly.instantiateStreaming(e, n);
                  return o.then(r, function (e) {
                    return (
                      y("wasm streaming compile failed: " + e),
                      y("falling back to ArrayBuffer instantiation"),
                      te(t, n, r)
                    );
                  });
                })
              : te(t, n, r);
          }
          function re() {
            var e = { a: Tt };
            function t(e, t) {
              var n = e.exports;
              return (
                (v = n),
                (b = v.u),
                N(),
                (M = v.A),
                U(v.v),
                K("wasm-instantiate"),
                n
              );
            }
            j("wasm-instantiate");
            function n(e) {
              t(e.instance);
            }
            if (o.instantiateWasm)
              try {
                return o.instantiateWasm(e, t);
              } catch (e) {
                (y("Module.instantiateWasm callback failed with error: " + e),
                  i(e));
              }
            return (ne(C, J, e, n).catch(i), {});
          }
          var oe,
            ae,
            ie = function (t) {
              for (; t.length > 0; ) t.shift()(o);
            };
          function le(e, t) {
            switch (
              (t === void 0 && (t = "i8"), t.endsWith("*") && (t = "*"), t)
            ) {
              case "i1":
                return E[e >> 0];
              case "i8":
                return E[e >> 0];
              case "i16":
                return I[e >> 1];
              case "i32":
                return D[e >> 2];
              case "i64":
                Q("to do getValue(i64) use WASM_BIGINT");
              case "float":
                return $[e >> 2];
              case "double":
                return P[e >> 3];
              case "*":
                return x[e >> 2];
              default:
                Q("invalid type for getValue: " + t);
            }
          }
          function se(e, t, n) {
            switch (
              (n === void 0 && (n = "i8"), n.endsWith("*") && (n = "*"), n)
            ) {
              case "i1":
                E[e >> 0] = t;
                break;
              case "i8":
                E[e >> 0] = t;
                break;
              case "i16":
                I[e >> 1] = t;
                break;
              case "i32":
                D[e >> 2] = t;
                break;
              case "i64":
                Q("to do setValue(i64) use WASM_BIGINT");
              case "float":
                $[e >> 2] = t;
                break;
              case "double":
                P[e >> 3] = t;
                break;
              case "*":
                x[e >> 2] = t;
                break;
              default:
                Q("invalid type for setValue: " + n);
            }
          }
          var ue =
              typeof TextDecoder != "undefined"
                ? new TextDecoder("utf8")
                : void 0,
            ce = function (t, n, r) {
              for (var e = n + r, o = n; t[o] && !(o >= e); ) ++o;
              if (o - n > 16 && t.buffer && ue)
                return ue.decode(t.subarray(n, o));
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
            de = function (t, n) {
              return t ? ce(k, t, n) : "";
            },
            me = function (t, n, r, o) {
              Q(
                "Assertion failed: " +
                  de(t) +
                  ", at: " +
                  [
                    n ? de(n) : "unknown filename",
                    r,
                    o ? de(o) : "unknown function",
                  ],
              );
            },
            pe = function (t) {
              return ((D[ar() >> 2] = t), t);
            },
            _e = {
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
                var e = _e.isAbs(t),
                  n = t.substr(-1) === "/";
                return (
                  (t = _e
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
                var e = _e.splitPath(t),
                  n = e[0],
                  r = e[1];
                return !n && !r
                  ? "."
                  : (r && (r = r.substr(0, r.length - 1)), n + r);
              },
              basename: function (t) {
                if (t === "/") return "/";
                ((t = _e.normalize(t)), (t = t.replace(/\/$/, "")));
                var e = t.lastIndexOf("/");
                return e === -1 ? t : t.substr(e + 1);
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments);
                return _e.normalize(e.join("/"));
              },
              join2: function (t, n) {
                return _e.normalize(t + "/" + n);
              },
            },
            fe = function () {
              if (
                typeof crypto == "object" &&
                typeof crypto.getRandomValues == "function"
              )
                return function (e) {
                  return crypto.getRandomValues(e);
                };
              Q("initRandomDevice");
            },
            ge = function (t) {
              return (ge = fe())(t);
            },
            he = {
              resolve: function () {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  n >= -1 && !t;
                  n--
                ) {
                  var r = n >= 0 ? arguments[n] : Pe.cwd();
                  if (typeof r != "string")
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (!r) return "";
                  ((e = r + "/" + e), (t = _e.isAbs(r)));
                }
                return (
                  (e = _e
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
                ((t = he.resolve(t).substr(1)), (n = he.resolve(n).substr(1)));
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
            ye = [],
            Ce = function (t) {
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
            be = function (t, n, r, o) {
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
            };
          function ve(e, t, n) {
            var r = n > 0 ? n : Ce(e) + 1,
              o = new Array(r),
              a = be(e, o, 0, o.length);
            return (t && (o.length = a), o);
          }
          var Se = function () {
              if (!ye.length) {
                var e = null;
                if (
                  (typeof window != "undefined" &&
                  typeof window.prompt == "function"
                    ? ((e = window.prompt("Input: ")),
                      e !== null && (e += "\n"))
                    : typeof readline == "function" &&
                      ((e = readline()), e !== null && (e += "\n")),
                  !e)
                )
                  return null;
                ye = ve(e, !0);
              }
              return ye.shift();
            },
            Re = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (t, n) {
                ((Re.ttys[t] = { input: [], output: [], ops: n }),
                  Pe.registerDevice(t, Re.stream_ops));
              },
              stream_ops: {
                open: function (t) {
                  var e = Re.ttys[t.node.rdev];
                  if (!e) throw new Pe.ErrnoError(43);
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
                    throw new Pe.ErrnoError(60);
                  for (var e = 0, i = 0; i < o; i++) {
                    var l;
                    try {
                      l = t.tty.ops.get_char(t.tty);
                    } catch (e) {
                      throw new Pe.ErrnoError(29);
                    }
                    if (l === void 0 && e === 0) throw new Pe.ErrnoError(6);
                    if (l == null) break;
                    (e++, (n[r + i] = l));
                  }
                  return (e && (t.node.timestamp = Date.now()), e);
                },
                write: function (t, n, r, o, a) {
                  if (!t.tty || !t.tty.ops.put_char)
                    throw new Pe.ErrnoError(60);
                  try {
                    for (var e = 0; e < o; e++)
                      t.tty.ops.put_char(t.tty, n[r + e]);
                  } catch (e) {
                    throw new Pe.ErrnoError(29);
                  }
                  return (o && (t.node.timestamp = Date.now()), e);
                },
              },
              default_tty_ops: {
                get_char: function (t) {
                  return Se();
                },
                put_char: function (t, n) {
                  n === null || n === 10
                    ? (h(ce(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (h(ce(t.output, 0)), (t.output = []));
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
                    ? (y(ce(t.output, 0)), (t.output = []))
                    : n != 0 && t.output.push(n);
                },
                fsync: function (t) {
                  t.output &&
                    t.output.length > 0 &&
                    (y(ce(t.output, 0)), (t.output = []));
                },
              },
            },
            Le = function (t) {
              Q();
            },
            Ee = {
              ops_table: null,
              mount: function (t) {
                return Ee.createNode(null, "/", 16895, 0);
              },
              createNode: function (t, n, r, o) {
                if (Pe.isBlkdev(r) || Pe.isFIFO(r)) throw new Pe.ErrnoError(63);
                Ee.ops_table ||
                  (Ee.ops_table = {
                    dir: {
                      node: {
                        getattr: Ee.node_ops.getattr,
                        setattr: Ee.node_ops.setattr,
                        lookup: Ee.node_ops.lookup,
                        mknod: Ee.node_ops.mknod,
                        rename: Ee.node_ops.rename,
                        unlink: Ee.node_ops.unlink,
                        rmdir: Ee.node_ops.rmdir,
                        readdir: Ee.node_ops.readdir,
                        symlink: Ee.node_ops.symlink,
                      },
                      stream: { llseek: Ee.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: Ee.node_ops.getattr,
                        setattr: Ee.node_ops.setattr,
                      },
                      stream: {
                        llseek: Ee.stream_ops.llseek,
                        read: Ee.stream_ops.read,
                        write: Ee.stream_ops.write,
                        allocate: Ee.stream_ops.allocate,
                        mmap: Ee.stream_ops.mmap,
                        msync: Ee.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: Ee.node_ops.getattr,
                        setattr: Ee.node_ops.setattr,
                        readlink: Ee.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: Ee.node_ops.getattr,
                        setattr: Ee.node_ops.setattr,
                      },
                      stream: Pe.chrdev_stream_ops,
                    },
                  });
                var e = Pe.createNode(t, n, r, o);
                return (
                  Pe.isDir(e.mode)
                    ? ((e.node_ops = Ee.ops_table.dir.node),
                      (e.stream_ops = Ee.ops_table.dir.stream),
                      (e.contents = {}))
                    : Pe.isFile(e.mode)
                      ? ((e.node_ops = Ee.ops_table.file.node),
                        (e.stream_ops = Ee.ops_table.file.stream),
                        (e.usedBytes = 0),
                        (e.contents = null))
                      : Pe.isLink(e.mode)
                        ? ((e.node_ops = Ee.ops_table.link.node),
                          (e.stream_ops = Ee.ops_table.link.stream))
                        : Pe.isChrdev(e.mode) &&
                          ((e.node_ops = Ee.ops_table.chrdev.node),
                          (e.stream_ops = Ee.ops_table.chrdev.stream)),
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
                    (e.dev = Pe.isChrdev(t.mode) ? t.id : 1),
                    (e.ino = t.id),
                    (e.mode = t.mode),
                    (e.nlink = 1),
                    (e.uid = 0),
                    (e.gid = 0),
                    (e.rdev = t.rdev),
                    Pe.isDir(t.mode)
                      ? (e.size = 4096)
                      : Pe.isFile(t.mode)
                        ? (e.size = t.usedBytes)
                        : Pe.isLink(t.mode)
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
                    n.size !== void 0 && Ee.resizeFileStorage(t, n.size));
                },
                lookup: function (t, n) {
                  throw Pe.genericErrors[44];
                },
                mknod: function (t, n, r, o) {
                  return Ee.createNode(t, n, r, o);
                },
                rename: function (t, n, r) {
                  if (Pe.isDir(t.mode)) {
                    var e;
                    try {
                      e = Pe.lookupNode(n, r);
                    } catch (e) {}
                    if (e)
                      for (var o in e.contents) throw new Pe.ErrnoError(55);
                  }
                  (delete t.parent.contents[t.name],
                    (t.parent.timestamp = Date.now()),
                    (t.name = r),
                    (n.contents[r] = t),
                    (n.timestamp = t.parent.timestamp),
                    (t.parent = n));
                },
                unlink: function (t, n) {
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                rmdir: function (t, n) {
                  var e = Pe.lookupNode(t, n);
                  for (var r in e.contents) throw new Pe.ErrnoError(55);
                  (delete t.contents[n], (t.timestamp = Date.now()));
                },
                readdir: function (t) {
                  var e = [".", ".."];
                  for (var n in t.contents)
                    Object.prototype.hasOwnProperty.call(t.contents, n) &&
                      e.push(n);
                  return e;
                },
                symlink: function (t, n, r) {
                  var e = Ee.createNode(t, n, 41471, 0);
                  return ((e.link = r), e);
                },
                readlink: function (t) {
                  if (!Pe.isLink(t.mode)) throw new Pe.ErrnoError(28);
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
                  if (!o) return 0;
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
                    (Ee.expandFileStorage(e, a + o),
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
                        Pe.isFile(t.node.mode) &&
                        (e += t.node.usedBytes),
                    e < 0)
                  )
                    throw new Pe.ErrnoError(28);
                  return e;
                },
                allocate: function (t, n, r) {
                  (Ee.expandFileStorage(t.node, n + r),
                    (t.node.usedBytes = Math.max(t.node.usedBytes, n + r)));
                },
                mmap: function (t, n, r, o, a) {
                  if (!Pe.isFile(t.node.mode)) throw new Pe.ErrnoError(43);
                  var e,
                    i,
                    l = t.node.contents;
                  if (!(a & 2) && l.buffer === E.buffer)
                    ((i = !1), (e = l.byteOffset));
                  else {
                    if (
                      ((r > 0 || r + n < l.length) &&
                        (l.subarray
                          ? (l = l.subarray(r, r + n))
                          : (l = Array.prototype.slice.call(l, r, r + n))),
                      (i = !0),
                      (e = Le(n)),
                      !e)
                    )
                      throw new Pe.ErrnoError(48);
                    E.set(l, e);
                  }
                  return { ptr: e, allocated: i };
                },
                msync: function (t, n, r, o, a) {
                  return (Ee.stream_ops.write(t, n, 0, o, r, !1), 0);
                },
              },
            },
            ke = function (t, n, r, o) {
              var e = o ? "" : "al " + t;
              (_(
                t,
                function (r) {
                  (L(
                    r,
                    'Loading data file "' + t + '" failed (no arrayBuffer).',
                  ),
                    n(new Uint8Array(r)),
                    e && K(e));
                },
                function (e) {
                  if (r) r();
                  else throw 'Loading data file "' + t + '" failed.';
                },
              ),
                e && j(e));
            },
            Ie = [];
          function Te(e, t, n, r) {
            typeof Browser != "undefined" && Browser.init();
            var o = !1;
            return (
              Ie.forEach(function (a) {
                o || (a.canHandle(t) && (a.handle(e, t, n, r), (o = !0)));
              }),
              o
            );
          }
          function De(e, t, n, r, o, a, i, l, s, u) {
            var c = t ? he.resolve(_e.join2(e, t)) : e,
              d = "cp " + c;
            function m(n) {
              function m(n) {
                (u && u(),
                  l || Pe.createDataFile(e, t, n, r, o, s),
                  a && a(),
                  K(d));
              }
              Te(n, c, m, function () {
                (i && i(), K(d));
              }) || m(n);
            }
            (j(d),
              typeof n == "string"
                ? ke(
                    n,
                    function (e) {
                      return m(e);
                    },
                    i,
                  )
                : m(n));
          }
          function xe(e) {
            var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
              n = t[e];
            if (typeof n == "undefined")
              throw new Error("Unknown file open mode: " + e);
            return n;
          }
          function $e(e, t) {
            var n = 0;
            return (e && (n |= 365), t && (n |= 146), n);
          }
          var Pe = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: "/",
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: null,
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              lookupPath: function (t, n) {
                if ((n === void 0 && (n = {}), (t = he.resolve(t)), !t))
                  return { path: "", node: null };
                var e = { follow_mount: !0, recurse_count: 0 };
                if (((n = Object.assign(e, n)), n.recurse_count > 8))
                  throw new Pe.ErrnoError(32);
                for (
                  var r = t.split("/").filter(function (e) {
                      return !!e;
                    }),
                    o = Pe.root,
                    a = "/",
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = i === r.length - 1;
                  if (l && n.parent) break;
                  if (
                    ((o = Pe.lookupNode(o, r[i])),
                    (a = _e.join2(a, r[i])),
                    Pe.isMountpoint(o) &&
                      (!l || (l && n.follow_mount)) &&
                      (o = o.mounted.root),
                    !l || n.follow)
                  )
                    for (var s = 0; Pe.isLink(o.mode); ) {
                      var u = Pe.readlink(a);
                      a = he.resolve(_e.dirname(a), u);
                      var c = Pe.lookupPath(a, {
                        recurse_count: n.recurse_count + 1,
                      });
                      if (((o = c.node), s++ > 40)) throw new Pe.ErrnoError(32);
                    }
                }
                return { path: a, node: o };
              },
              getPath: function (t) {
                for (var e; ; ) {
                  if (Pe.isRoot(t)) {
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
                return ((t + e) >>> 0) % Pe.nameTable.length;
              },
              hashAddNode: function (t) {
                var e = Pe.hashName(t.parent.id, t.name);
                ((t.name_next = Pe.nameTable[e]), (Pe.nameTable[e] = t));
              },
              hashRemoveNode: function (t) {
                var e = Pe.hashName(t.parent.id, t.name);
                if (Pe.nameTable[e] === t) Pe.nameTable[e] = t.name_next;
                else
                  for (var n = Pe.nameTable[e]; n; ) {
                    if (n.name_next === t) {
                      n.name_next = t.name_next;
                      break;
                    }
                    n = n.name_next;
                  }
              },
              lookupNode: function (t, n) {
                var e = Pe.mayLookup(t);
                if (e) throw new Pe.ErrnoError(e, t);
                for (
                  var r = Pe.hashName(t.id, n), o = Pe.nameTable[r];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === t.id && a === n) return o;
                }
                return Pe.lookup(t, n);
              },
              createNode: function (t, n, r, o) {
                var e = new Pe.FSNode(t, n, r, o);
                return (Pe.hashAddNode(e), e);
              },
              destroyNode: function (t) {
                Pe.hashRemoveNode(t);
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
                return Pe.ignorePermissions
                  ? 0
                  : (n.includes("r") && !(t.mode & 292)) ||
                      (n.includes("w") && !(t.mode & 146)) ||
                      (n.includes("x") && !(t.mode & 73))
                    ? 2
                    : 0;
              },
              mayLookup: function (t) {
                var e = Pe.nodePermissions(t, "x");
                return e || (t.node_ops.lookup ? 0 : 2);
              },
              mayCreate: function (t, n) {
                try {
                  var e = Pe.lookupNode(t, n);
                  return 20;
                } catch (e) {}
                return Pe.nodePermissions(t, "wx");
              },
              mayDelete: function (t, n, r) {
                var e;
                try {
                  e = Pe.lookupNode(t, n);
                } catch (e) {
                  return e.errno;
                }
                var o = Pe.nodePermissions(t, "wx");
                if (o) return o;
                if (r) {
                  if (!Pe.isDir(e.mode)) return 54;
                  if (Pe.isRoot(e) || Pe.getPath(e) === Pe.cwd()) return 10;
                } else if (Pe.isDir(e.mode)) return 31;
                return 0;
              },
              mayOpen: function (t, n) {
                return t
                  ? Pe.isLink(t.mode)
                    ? 32
                    : Pe.isDir(t.mode) &&
                        (Pe.flagsToPermissionString(n) !== "r" || n & 512)
                      ? 31
                      : Pe.nodePermissions(t, Pe.flagsToPermissionString(n))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function () {
                for (var e = 0; e <= Pe.MAX_OPEN_FDS; e++)
                  if (!Pe.streams[e]) return e;
                throw new Pe.ErrnoError(33);
              },
              getStreamChecked: function (t) {
                var e = Pe.getStream(t);
                if (!e) throw new Pe.ErrnoError(8);
                return e;
              },
              getStream: function (t) {
                return Pe.streams[t];
              },
              createStream: function (t, n) {
                return (
                  n === void 0 && (n = -1),
                  Pe.FSStream ||
                    ((Pe.FSStream = function () {
                      this.shared = {};
                    }),
                    (Pe.FSStream.prototype = {}),
                    Object.defineProperties(Pe.FSStream.prototype, {
                      object: {
                        get: function () {
                          return this.node;
                        },
                        set: function (t) {
                          this.node = t;
                        },
                      },
                      isRead: {
                        get: function () {
                          return (this.flags & 2097155) !== 1;
                        },
                      },
                      isWrite: {
                        get: function () {
                          return (this.flags & 2097155) !== 0;
                        },
                      },
                      isAppend: {
                        get: function () {
                          return this.flags & 1024;
                        },
                      },
                      flags: {
                        get: function () {
                          return this.shared.flags;
                        },
                        set: function (t) {
                          this.shared.flags = t;
                        },
                      },
                      position: {
                        get: function () {
                          return this.shared.position;
                        },
                        set: function (t) {
                          this.shared.position = t;
                        },
                      },
                    })),
                  (t = Object.assign(new Pe.FSStream(), t)),
                  n == -1 && (n = Pe.nextfd()),
                  (t.fd = n),
                  (Pe.streams[n] = t),
                  t
                );
              },
              closeStream: function (t) {
                Pe.streams[t] = null;
              },
              chrdev_stream_ops: {
                open: function (t) {
                  var e = Pe.getDevice(t.node.rdev);
                  ((t.stream_ops = e.stream_ops),
                    t.stream_ops.open && t.stream_ops.open(t));
                },
                llseek: function () {
                  throw new Pe.ErrnoError(70);
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
                Pe.devices[t] = { stream_ops: n };
              },
              getDevice: function (t) {
                return Pe.devices[t];
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
                  Pe.syncFSRequests++,
                  Pe.syncFSRequests > 1 &&
                    y(
                      "warning: " +
                        Pe.syncFSRequests +
                        " FS.syncfs operations in flight at once, probably just doing extra work",
                    ));
                var e = Pe.getMounts(Pe.root.mount),
                  r = 0;
                function o(e) {
                  return (Pe.syncFSRequests--, n(e));
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
                if (e && Pe.root) throw new Pe.ErrnoError(10);
                if (!e && !o) {
                  var i = Pe.lookupPath(r, { follow_mount: !1 });
                  if (((r = i.path), (a = i.node), Pe.isMountpoint(a)))
                    throw new Pe.ErrnoError(10);
                  if (!Pe.isDir(a.mode)) throw new Pe.ErrnoError(54);
                }
                var l = { type: t, opts: n, mountpoint: r, mounts: [] },
                  s = t.mount(l);
                return (
                  (s.mount = l),
                  (l.root = s),
                  e
                    ? (Pe.root = s)
                    : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
                  s
                );
              },
              unmount: function (t) {
                var e = Pe.lookupPath(t, { follow_mount: !1 });
                if (!Pe.isMountpoint(e.node)) throw new Pe.ErrnoError(28);
                var n = e.node,
                  r = n.mounted,
                  o = Pe.getMounts(r);
                (Object.keys(Pe.nameTable).forEach(function (e) {
                  for (var t = Pe.nameTable[e]; t; ) {
                    var n = t.name_next;
                    (o.includes(t.mount) && Pe.destroyNode(t), (t = n));
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
                var e = Pe.lookupPath(t, { parent: !0 }),
                  o = e.node,
                  a = _e.basename(t);
                if (!a || a === "." || a === "..") throw new Pe.ErrnoError(28);
                var i = Pe.mayCreate(o, a);
                if (i) throw new Pe.ErrnoError(i);
                if (!o.node_ops.mknod) throw new Pe.ErrnoError(63);
                return o.node_ops.mknod(o, a, n, r);
              },
              create: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 438),
                  (n &= 4095),
                  (n |= 32768),
                  Pe.mknod(t, n, 0)
                );
              },
              mkdir: function (t, n) {
                return (
                  (n = n !== void 0 ? n : 511),
                  (n &= 1023),
                  (n |= 16384),
                  Pe.mknod(t, n, 0)
                );
              },
              mkdirTree: function (t, n) {
                for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o)
                  if (e[o]) {
                    r += "/" + e[o];
                    try {
                      Pe.mkdir(r, n);
                    } catch (e) {
                      if (e.errno != 20) throw e;
                    }
                  }
              },
              mkdev: function (t, n, r) {
                return (
                  typeof r == "undefined" && ((r = n), (n = 438)),
                  (n |= 8192),
                  Pe.mknod(t, n, r)
                );
              },
              symlink: function (t, n) {
                if (!he.resolve(t)) throw new Pe.ErrnoError(44);
                var e = Pe.lookupPath(n, { parent: !0 }),
                  r = e.node;
                if (!r) throw new Pe.ErrnoError(44);
                var o = _e.basename(n),
                  a = Pe.mayCreate(r, o);
                if (a) throw new Pe.ErrnoError(a);
                if (!r.node_ops.symlink) throw new Pe.ErrnoError(63);
                return r.node_ops.symlink(r, o, t);
              },
              rename: function (t, n) {
                var e = _e.dirname(t),
                  r = _e.dirname(n),
                  o = _e.basename(t),
                  a = _e.basename(n),
                  i,
                  l,
                  s;
                if (
                  ((i = Pe.lookupPath(t, { parent: !0 })),
                  (l = i.node),
                  (i = Pe.lookupPath(n, { parent: !0 })),
                  (s = i.node),
                  !l || !s)
                )
                  throw new Pe.ErrnoError(44);
                if (l.mount !== s.mount) throw new Pe.ErrnoError(75);
                var u = Pe.lookupNode(l, o),
                  c = he.relative(t, r);
                if (c.charAt(0) !== ".") throw new Pe.ErrnoError(28);
                if (((c = he.relative(n, e)), c.charAt(0) !== "."))
                  throw new Pe.ErrnoError(55);
                var d;
                try {
                  d = Pe.lookupNode(s, a);
                } catch (e) {}
                if (u !== d) {
                  var m = Pe.isDir(u.mode),
                    p = Pe.mayDelete(l, o, m);
                  if (p) throw new Pe.ErrnoError(p);
                  if (((p = d ? Pe.mayDelete(s, a, m) : Pe.mayCreate(s, a)), p))
                    throw new Pe.ErrnoError(p);
                  if (!l.node_ops.rename) throw new Pe.ErrnoError(63);
                  if (Pe.isMountpoint(u) || (d && Pe.isMountpoint(d)))
                    throw new Pe.ErrnoError(10);
                  if (s !== l && ((p = Pe.nodePermissions(l, "w")), p))
                    throw new Pe.ErrnoError(p);
                  Pe.hashRemoveNode(u);
                  try {
                    l.node_ops.rename(u, s, a);
                  } catch (e) {
                    throw e;
                  } finally {
                    Pe.hashAddNode(u);
                  }
                }
              },
              rmdir: function (t) {
                var e = Pe.lookupPath(t, { parent: !0 }),
                  n = e.node,
                  r = _e.basename(t),
                  o = Pe.lookupNode(n, r),
                  a = Pe.mayDelete(n, r, !0);
                if (a) throw new Pe.ErrnoError(a);
                if (!n.node_ops.rmdir) throw new Pe.ErrnoError(63);
                if (Pe.isMountpoint(o)) throw new Pe.ErrnoError(10);
                (n.node_ops.rmdir(n, r), Pe.destroyNode(o));
              },
              readdir: function (t) {
                var e = Pe.lookupPath(t, { follow: !0 }),
                  n = e.node;
                if (!n.node_ops.readdir) throw new Pe.ErrnoError(54);
                return n.node_ops.readdir(n);
              },
              unlink: function (t) {
                var e = Pe.lookupPath(t, { parent: !0 }),
                  n = e.node;
                if (!n) throw new Pe.ErrnoError(44);
                var r = _e.basename(t),
                  o = Pe.lookupNode(n, r),
                  a = Pe.mayDelete(n, r, !1);
                if (a) throw new Pe.ErrnoError(a);
                if (!n.node_ops.unlink) throw new Pe.ErrnoError(63);
                if (Pe.isMountpoint(o)) throw new Pe.ErrnoError(10);
                (n.node_ops.unlink(n, r), Pe.destroyNode(o));
              },
              readlink: function (t) {
                var e = Pe.lookupPath(t),
                  n = e.node;
                if (!n) throw new Pe.ErrnoError(44);
                if (!n.node_ops.readlink) throw new Pe.ErrnoError(28);
                return he.resolve(Pe.getPath(n.parent), n.node_ops.readlink(n));
              },
              stat: function (t, n) {
                var e = Pe.lookupPath(t, { follow: !n }),
                  r = e.node;
                if (!r) throw new Pe.ErrnoError(44);
                if (!r.node_ops.getattr) throw new Pe.ErrnoError(63);
                return r.node_ops.getattr(r);
              },
              lstat: function (t) {
                return Pe.stat(t, !0);
              },
              chmod: function (t, n, r) {
                var e;
                if (typeof t == "string") {
                  var o = Pe.lookupPath(t, { follow: !r });
                  e = o.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Pe.ErrnoError(63);
                e.node_ops.setattr(e, {
                  mode: (n & 4095) | (e.mode & -4096),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (t, n) {
                Pe.chmod(t, n, !0);
              },
              fchmod: function (t, n) {
                var e = Pe.getStreamChecked(t);
                Pe.chmod(e.node, n);
              },
              chown: function (t, n, r, o) {
                var e;
                if (typeof t == "string") {
                  var a = Pe.lookupPath(t, { follow: !o });
                  e = a.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Pe.ErrnoError(63);
                e.node_ops.setattr(e, { timestamp: Date.now() });
              },
              lchown: function (t, n, r) {
                Pe.chown(t, n, r, !0);
              },
              fchown: function (t, n, r) {
                var e = Pe.getStreamChecked(t);
                Pe.chown(e.node, n, r);
              },
              truncate: function (t, n) {
                if (n < 0) throw new Pe.ErrnoError(28);
                var e;
                if (typeof t == "string") {
                  var r = Pe.lookupPath(t, { follow: !0 });
                  e = r.node;
                } else e = t;
                if (!e.node_ops.setattr) throw new Pe.ErrnoError(63);
                if (Pe.isDir(e.mode)) throw new Pe.ErrnoError(31);
                if (!Pe.isFile(e.mode)) throw new Pe.ErrnoError(28);
                var o = Pe.nodePermissions(e, "w");
                if (o) throw new Pe.ErrnoError(o);
                e.node_ops.setattr(e, { size: n, timestamp: Date.now() });
              },
              ftruncate: function (t, n) {
                var e = Pe.getStreamChecked(t);
                if ((e.flags & 2097155) === 0) throw new Pe.ErrnoError(28);
                Pe.truncate(e.node, n);
              },
              utime: function (t, n, r) {
                var e = Pe.lookupPath(t, { follow: !0 }),
                  o = e.node;
                o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
              },
              open: function (t, n, r) {
                if (t === "") throw new Pe.ErrnoError(44);
                ((n = typeof n == "string" ? xe(n) : n),
                  (r = typeof r == "undefined" ? 438 : r),
                  n & 64 ? (r = (r & 4095) | 32768) : (r = 0));
                var e;
                if (typeof t == "object") e = t;
                else {
                  t = _e.normalize(t);
                  try {
                    var a = Pe.lookupPath(t, { follow: !(n & 131072) });
                    e = a.node;
                  } catch (e) {}
                }
                var i = !1;
                if (n & 64)
                  if (e) {
                    if (n & 128) throw new Pe.ErrnoError(20);
                  } else ((e = Pe.mknod(t, r, 0)), (i = !0));
                if (!e) throw new Pe.ErrnoError(44);
                if (
                  (Pe.isChrdev(e.mode) && (n &= -513),
                  n & 65536 && !Pe.isDir(e.mode))
                )
                  throw new Pe.ErrnoError(54);
                if (!i) {
                  var l = Pe.mayOpen(e, n);
                  if (l) throw new Pe.ErrnoError(l);
                }
                (n & 512 && !i && Pe.truncate(e, 0), (n &= -131713));
                var s = Pe.createStream({
                  node: e,
                  path: Pe.getPath(e),
                  flags: n,
                  seekable: !0,
                  position: 0,
                  stream_ops: e.stream_ops,
                  ungotten: [],
                  error: !1,
                });
                return (
                  s.stream_ops.open && s.stream_ops.open(s),
                  o.logReadFiles &&
                    !(n & 1) &&
                    (Pe.readFiles || (Pe.readFiles = {}),
                    t in Pe.readFiles || (Pe.readFiles[t] = 1)),
                  s
                );
              },
              close: function (t) {
                if (Pe.isClosed(t)) throw new Pe.ErrnoError(8);
                t.getdents && (t.getdents = null);
                try {
                  t.stream_ops.close && t.stream_ops.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  Pe.closeStream(t.fd);
                }
                t.fd = null;
              },
              isClosed: function (t) {
                return t.fd === null;
              },
              llseek: function (t, n, r) {
                if (Pe.isClosed(t)) throw new Pe.ErrnoError(8);
                if (!t.seekable || !t.stream_ops.llseek)
                  throw new Pe.ErrnoError(70);
                if (r != 0 && r != 1 && r != 2) throw new Pe.ErrnoError(28);
                return (
                  (t.position = t.stream_ops.llseek(t, n, r)),
                  (t.ungotten = []),
                  t.position
                );
              },
              read: function (t, n, r, o, a) {
                if (o < 0 || a < 0) throw new Pe.ErrnoError(28);
                if (Pe.isClosed(t)) throw new Pe.ErrnoError(8);
                if ((t.flags & 2097155) === 1) throw new Pe.ErrnoError(8);
                if (Pe.isDir(t.node.mode)) throw new Pe.ErrnoError(31);
                if (!t.stream_ops.read) throw new Pe.ErrnoError(28);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Pe.ErrnoError(70);
                var i = t.stream_ops.read(t, n, r, o, a);
                return (e || (t.position += i), i);
              },
              write: function (t, n, r, o, a, i) {
                if (o < 0 || a < 0) throw new Pe.ErrnoError(28);
                if (Pe.isClosed(t)) throw new Pe.ErrnoError(8);
                if ((t.flags & 2097155) === 0) throw new Pe.ErrnoError(8);
                if (Pe.isDir(t.node.mode)) throw new Pe.ErrnoError(31);
                if (!t.stream_ops.write) throw new Pe.ErrnoError(28);
                t.seekable && t.flags & 1024 && Pe.llseek(t, 0, 2);
                var e = typeof a != "undefined";
                if (!e) a = t.position;
                else if (!t.seekable) throw new Pe.ErrnoError(70);
                var l = t.stream_ops.write(t, n, r, o, a, i);
                return (e || (t.position += l), l);
              },
              allocate: function (t, n, r) {
                if (Pe.isClosed(t)) throw new Pe.ErrnoError(8);
                if (n < 0 || r <= 0) throw new Pe.ErrnoError(28);
                if ((t.flags & 2097155) === 0) throw new Pe.ErrnoError(8);
                if (!Pe.isFile(t.node.mode) && !Pe.isDir(t.node.mode))
                  throw new Pe.ErrnoError(43);
                if (!t.stream_ops.allocate) throw new Pe.ErrnoError(138);
                t.stream_ops.allocate(t, n, r);
              },
              mmap: function (t, n, r, o, a) {
                if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2)
                  throw new Pe.ErrnoError(2);
                if ((t.flags & 2097155) === 1) throw new Pe.ErrnoError(2);
                if (!t.stream_ops.mmap) throw new Pe.ErrnoError(43);
                return t.stream_ops.mmap(t, n, r, o, a);
              },
              msync: function (t, n, r, o, a) {
                return t.stream_ops.msync
                  ? t.stream_ops.msync(t, n, r, o, a)
                  : 0;
              },
              munmap: function (t) {
                return 0;
              },
              ioctl: function (t, n, r) {
                if (!t.stream_ops.ioctl) throw new Pe.ErrnoError(59);
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
                  r = Pe.open(t, n.flags),
                  o = Pe.stat(t),
                  a = o.size,
                  i = new Uint8Array(a);
                return (
                  Pe.read(r, i, 0, a, 0),
                  n.encoding === "utf8"
                    ? (e = ce(i, 0))
                    : n.encoding === "binary" && (e = i),
                  Pe.close(r),
                  e
                );
              },
              writeFile: function (t, n, r) {
                (r === void 0 && (r = {}), (r.flags = r.flags || 577));
                var e = Pe.open(t, r.flags, r.mode);
                if (typeof n == "string") {
                  var o = new Uint8Array(Ce(n) + 1),
                    a = be(n, o, 0, o.length);
                  Pe.write(e, o, 0, a, void 0, r.canOwn);
                } else if (ArrayBuffer.isView(n))
                  Pe.write(e, n, 0, n.byteLength, void 0, r.canOwn);
                else throw new Error("Unsupported data type");
                Pe.close(e);
              },
              cwd: function () {
                return Pe.currentPath;
              },
              chdir: function (t) {
                var e = Pe.lookupPath(t, { follow: !0 });
                if (e.node === null) throw new Pe.ErrnoError(44);
                if (!Pe.isDir(e.node.mode)) throw new Pe.ErrnoError(54);
                var n = Pe.nodePermissions(e.node, "x");
                if (n) throw new Pe.ErrnoError(n);
                Pe.currentPath = e.path;
              },
              createDefaultDirectories: function () {
                (Pe.mkdir("/tmp"),
                  Pe.mkdir("/home"),
                  Pe.mkdir("/home/web_user"));
              },
              createDefaultDevices: function () {
                (Pe.mkdir("/dev"),
                  Pe.registerDevice(Pe.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (t, n, r, o, a) {
                      return o;
                    },
                  }),
                  Pe.mkdev("/dev/null", Pe.makedev(1, 3)),
                  Re.register(Pe.makedev(5, 0), Re.default_tty_ops),
                  Re.register(Pe.makedev(6, 0), Re.default_tty1_ops),
                  Pe.mkdev("/dev/tty", Pe.makedev(5, 0)),
                  Pe.mkdev("/dev/tty1", Pe.makedev(6, 0)));
                var e = new Uint8Array(1024),
                  t = 0,
                  n = function () {
                    return (t === 0 && (t = ge(e).byteLength), e[--t]);
                  };
                (Pe.createDevice("/dev", "random", n),
                  Pe.createDevice("/dev", "urandom", n),
                  Pe.mkdir("/dev/shm"),
                  Pe.mkdir("/dev/shm/tmp"));
              },
              createSpecialDirectories: function () {
                Pe.mkdir("/proc");
                var e = Pe.mkdir("/proc/self");
                (Pe.mkdir("/proc/self/fd"),
                  Pe.mount(
                    {
                      mount: function () {
                        var t = Pe.createNode(e, "fd", 16895, 73);
                        return (
                          (t.node_ops = {
                            lookup: function (t, n) {
                              var e = +n,
                                r = Pe.getStreamChecked(e),
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
                (o.stdin
                  ? Pe.createDevice("/dev", "stdin", o.stdin)
                  : Pe.symlink("/dev/tty", "/dev/stdin"),
                  o.stdout
                    ? Pe.createDevice("/dev", "stdout", null, o.stdout)
                    : Pe.symlink("/dev/tty", "/dev/stdout"),
                  o.stderr
                    ? Pe.createDevice("/dev", "stderr", null, o.stderr)
                    : Pe.symlink("/dev/tty1", "/dev/stderr"));
                var e = Pe.open("/dev/stdin", 0),
                  t = Pe.open("/dev/stdout", 1),
                  n = Pe.open("/dev/stderr", 1);
              },
              ensureErrnoError: function () {
                Pe.ErrnoError ||
                  ((Pe.ErrnoError = function (t, n) {
                    ((this.name = "ErrnoError"),
                      (this.node = n),
                      (this.setErrno = function (e) {
                        this.errno = e;
                      }),
                      this.setErrno(t),
                      (this.message = "FS error"));
                  }),
                  (Pe.ErrnoError.prototype = new Error()),
                  (Pe.ErrnoError.prototype.constructor = Pe.ErrnoError),
                  [44].forEach(function (e) {
                    ((Pe.genericErrors[e] = new Pe.ErrnoError(e)),
                      (Pe.genericErrors[e].stack =
                        "<generic error, no stack>"));
                  }));
              },
              staticInit: function () {
                (Pe.ensureErrnoError(),
                  (Pe.nameTable = new Array(4096)),
                  Pe.mount(Ee, {}, "/"),
                  Pe.createDefaultDirectories(),
                  Pe.createDefaultDevices(),
                  Pe.createSpecialDirectories(),
                  (Pe.filesystems = { MEMFS: Ee }));
              },
              init: function (t, n, r) {
                ((Pe.init.initialized = !0),
                  Pe.ensureErrnoError(),
                  (o.stdin = t || o.stdin),
                  (o.stdout = n || o.stdout),
                  (o.stderr = r || o.stderr),
                  Pe.createStandardStreams());
              },
              quit: function () {
                Pe.init.initialized = !1;
                for (var e = 0; e < Pe.streams.length; e++) {
                  var t = Pe.streams[e];
                  t && Pe.close(t);
                }
              },
              findObject: function (t, n) {
                var e = Pe.analyzePath(t, n);
                return e.exists ? e.object : null;
              },
              analyzePath: function (t, n) {
                try {
                  var e = Pe.lookupPath(t, { follow: !n });
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
                  var e = Pe.lookupPath(t, { parent: !0 });
                  ((r.parentExists = !0),
                    (r.parentPath = e.path),
                    (r.parentObject = e.node),
                    (r.name = _e.basename(t)),
                    (e = Pe.lookupPath(t, { follow: !n })),
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
                t = typeof t == "string" ? t : Pe.getPath(t);
                for (var e = n.split("/").reverse(); e.length; ) {
                  var a = e.pop();
                  if (a) {
                    var i = _e.join2(t, a);
                    try {
                      Pe.mkdir(i);
                    } catch (e) {}
                    t = i;
                  }
                }
                return i;
              },
              createFile: function (t, n, r, o, a) {
                var e = _e.join2(typeof t == "string" ? t : Pe.getPath(t), n),
                  i = $e(o, a);
                return Pe.create(e, i);
              },
              createDataFile: function (t, n, r, o, a, i) {
                var e = n;
                t &&
                  ((t = typeof t == "string" ? t : Pe.getPath(t)),
                  (e = n ? _e.join2(t, n) : t));
                var l = $e(o, a),
                  s = Pe.create(e, l);
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
                  Pe.chmod(s, l | 146);
                  var m = Pe.open(s, 577);
                  (Pe.write(m, r, 0, r.length, 0, i),
                    Pe.close(m),
                    Pe.chmod(s, l));
                }
                return s;
              },
              createDevice: function (t, n, r, o) {
                var e = _e.join2(typeof t == "string" ? t : Pe.getPath(t), n),
                  a = $e(!!r, !!o);
                Pe.createDevice.major || (Pe.createDevice.major = 64);
                var i = Pe.makedev(Pe.createDevice.major++, 0);
                return (
                  Pe.registerDevice(i, {
                    open: function (t) {
                      t.seekable = !1;
                    },
                    close: function (t) {
                      o && o.buffer && o.buffer.length && o(10);
                    },
                    read: function (t, n, o, a, i) {
                      for (var e = 0, l = 0; l < a; l++) {
                        var s;
                        try {
                          s = r();
                        } catch (e) {
                          throw new Pe.ErrnoError(29);
                        }
                        if (s === void 0 && e === 0) throw new Pe.ErrnoError(6);
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
                          throw new Pe.ErrnoError(29);
                        }
                      return (a && (t.node.timestamp = Date.now()), e);
                    },
                  }),
                  Pe.mkdev(e, a, i)
                );
              },
              forceLoadFile: function (t) {
                if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
                if (typeof XMLHttpRequest != "undefined")
                  throw new Error(
                    "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                  );
                if (p)
                  try {
                    ((t.contents = ve(p(t.url), !0)),
                      (t.usedBytes = t.contents.length));
                  } catch (e) {
                    throw new Pe.ErrnoError(29);
                  }
                else
                  throw new Error(
                    "Cannot load without read() or XMLHttpRequest.",
                  );
              },
              createLazyFile: function (t, n, r, o, a) {
                function e() {
                  ((this.lengthKnown = !1), (this.chunks = []));
                }
                if (
                  ((e.prototype.get = function (t) {
                    if (!(t > this.length - 1 || t < 0)) {
                      var e = t % this.chunkSize,
                        n = (t / this.chunkSize) | 0;
                      return this.getter(n)[e];
                    }
                  }),
                  (e.prototype.setDataGetter = function (t) {
                    this.getter = t;
                  }),
                  (e.prototype.cacheLength = function () {
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
                            "only " + t + " bytes available! programmer error!",
                          );
                        var e = new XMLHttpRequest();
                        if (
                          (e.open("GET", r, !1),
                          t !== i &&
                            e.setRequestHeader("Range", "bytes=" + n + "-" + o),
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
                          : ve(e.responseText || "", !0);
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
                        h(
                          "LazyFiles on gzip forces download of the whole file when length is accessed",
                        )),
                      (this._length = t),
                      (this._chunkSize = i),
                      (this.lengthKnown = !0));
                  }),
                  typeof XMLHttpRequest != "undefined")
                ) {
                  throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                  var i, l;
                } else var l = { isDevice: !1, url: r };
                var s = Pe.createFile(t, n, l, o, a);
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
                    return (Pe.forceLoadFile(s), t.apply(null, arguments));
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
                    return (Pe.forceLoadFile(s), d(e, t, n, r, o));
                  }),
                  (u.mmap = function (e, t, n, r, o) {
                    Pe.forceLoadFile(s);
                    var a = Le(t);
                    if (!a) throw new Pe.ErrnoError(48);
                    return (d(e, E, a, t, n), { ptr: a, allocated: !0 });
                  }),
                  (s.stream_ops = u),
                  s
                );
              },
            },
            Ne = {
              DEFAULT_POLLMASK: 5,
              calculateAt: function (t, n, r) {
                if (_e.isAbs(n)) return n;
                var e;
                if (t === -100) e = Pe.cwd();
                else {
                  var o = Ne.getStreamFromFD(t);
                  e = o.path;
                }
                if (n.length == 0) {
                  if (!r) throw new Pe.ErrnoError(44);
                  return e;
                }
                return _e.join2(e, n);
              },
              doStat: function (t, n, r) {
                try {
                  var e = t(n);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    _e.normalize(n) !== _e.normalize(Pe.getPath(e.node))
                  )
                    return -54;
                  throw e;
                }
                ((D[r >> 2] = e.dev),
                  (D[(r + 4) >> 2] = e.mode),
                  (x[(r + 8) >> 2] = e.nlink),
                  (D[(r + 12) >> 2] = e.uid),
                  (D[(r + 16) >> 2] = e.gid),
                  (D[(r + 20) >> 2] = e.rdev),
                  (ae = [
                    e.size >>> 0,
                    ((oe = e.size),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (D[(r + 24) >> 2] = ae[0]),
                  (D[(r + 28) >> 2] = ae[1]),
                  (D[(r + 32) >> 2] = 4096),
                  (D[(r + 36) >> 2] = e.blocks));
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
                  (D[(r + 40) >> 2] = ae[0]),
                  (D[(r + 44) >> 2] = ae[1]),
                  (x[(r + 48) >> 2] = (o % 1e3) * 1e3),
                  (ae = [
                    Math.floor(a / 1e3) >>> 0,
                    ((oe = Math.floor(a / 1e3)),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (D[(r + 56) >> 2] = ae[0]),
                  (D[(r + 60) >> 2] = ae[1]),
                  (x[(r + 64) >> 2] = (a % 1e3) * 1e3),
                  (ae = [
                    Math.floor(i / 1e3) >>> 0,
                    ((oe = Math.floor(i / 1e3)),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (D[(r + 72) >> 2] = ae[0]),
                  (D[(r + 76) >> 2] = ae[1]),
                  (x[(r + 80) >> 2] = (i % 1e3) * 1e3),
                  (ae = [
                    e.ino >>> 0,
                    ((oe = e.ino),
                    +Math.abs(oe) >= 1
                      ? oe > 0
                        ? +Math.floor(oe / 4294967296) >>> 0
                        : ~~+Math.ceil((oe - +(~~oe >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (D[(r + 88) >> 2] = ae[0]),
                  (D[(r + 92) >> 2] = ae[1]),
                  0
                );
              },
              doMsync: function (t, n, r, o, a) {
                if (!Pe.isFile(n.node.mode)) throw new Pe.ErrnoError(43);
                if (o & 2) return 0;
                var e = k.slice(t, t + r);
                Pe.msync(n, e, a, r, o);
              },
              varargs: void 0,
              get: function () {
                Ne.varargs += 4;
                var e = D[(Ne.varargs - 4) >> 2];
                return e;
              },
              getStr: function (t) {
                var e = de(t);
                return e;
              },
              getStreamFromFD: function (t) {
                var e = Pe.getStreamChecked(t);
                return e;
              },
            };
          function Me(e, t, n) {
            Ne.varargs = n;
            try {
              var r = Ne.getStreamFromFD(e);
              switch (t) {
                case 0: {
                  var o = Ne.get();
                  if (o < 0) return -28;
                  var a;
                  return ((a = Pe.createStream(r, o)), a.fd);
                }
                case 1:
                case 2:
                  return 0;
                case 3:
                  return r.flags;
                case 4: {
                  var o = Ne.get();
                  return ((r.flags |= o), 0);
                }
                case 5: {
                  var o = Ne.get(),
                    i = 0;
                  return ((I[(o + i) >> 1] = 2), 0);
                }
                case 6:
                case 7:
                  return 0;
                case 16:
                case 8:
                  return -28;
                case 9:
                  return (pe(28), -1);
                default:
                  return -28;
              }
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function we(e, t) {
            try {
              var n = Ne.getStreamFromFD(e);
              return Ne.doStat(Pe.stat, n.path, t);
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Ae = function (t, n, r) {
            return be(t, k, n, r);
          };
          function Fe(e, t) {
            try {
              if (t === 0) return -28;
              var n = Pe.cwd(),
                r = Ce(n) + 1;
              return t < r ? -68 : (Ae(n, e, t), r);
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Oe(e, t) {
            try {
              return ((e = Ne.getStr(e)), Ne.doStat(Pe.lstat, e, t));
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function Be(e, t, n, r) {
            try {
              t = Ne.getStr(t);
              var o = r & 256,
                a = r & 4096;
              return (
                (r = r & -6401),
                (t = Ne.calculateAt(e, t, a)),
                Ne.doStat(o ? Pe.lstat : Pe.stat, t, n)
              );
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function We(e, t, n, r) {
            Ne.varargs = r;
            try {
              ((t = Ne.getStr(t)), (t = Ne.calculateAt(e, t)));
              var o = r ? Ne.get() : 0;
              return Pe.open(t, n, o).fd;
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          function qe(e, t) {
            try {
              return ((e = Ne.getStr(e)), Ne.doStat(Pe.stat, e, t));
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return -e.errno;
            }
          }
          var Ue = !0,
            Ve = function () {
              return Ue;
            },
            He = function () {
              Q("");
            };
          function Ge() {
            return Date.now();
          }
          var ze;
          ze = function () {
            return performance.now();
          };
          var je = function (t, n, r) {
              return k.copyWithin(t, n, n + r);
            },
            Ke = function (t) {
              Q("OOM");
            },
            Qe = function (t) {
              var e = k.length;
              ((t >>>= 0), Ke(t));
            },
            Xe = {},
            Ye = function () {
              return s || "./this.program";
            },
            Je = function () {
              if (!Je.strings) {
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
                    _: Ye(),
                  };
                for (var n in Xe)
                  Xe[n] === void 0 ? delete t[n] : (t[n] = Xe[n]);
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                Je.strings = r;
              }
              return Je.strings;
            },
            Ze = function (t, n) {
              for (var e = 0; e < t.length; ++e) E[n++ >> 0] = t.charCodeAt(e);
              E[n >> 0] = 0;
            },
            et = function (t, n) {
              var e = 0;
              return (
                Je().forEach(function (r, o) {
                  var a = n + e;
                  ((x[(t + o * 4) >> 2] = a), Ze(r, a), (e += r.length + 1));
                }),
                0
              );
            },
            tt = function (t, n) {
              var e = Je();
              x[t >> 2] = e.length;
              var r = 0;
              return (
                e.forEach(function (e) {
                  r += e.length + 1;
                }),
                (x[n >> 2] = r),
                0
              );
            };
          function nt(e) {
            try {
              var t = Ne.getStreamFromFD(e);
              return (Pe.close(t), 0);
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var rt = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = x[n >> 2],
                l = x[(n + 4) >> 2];
              n += 8;
              var s = Pe.read(t, E, i, l, o);
              if (s < 0) return -1;
              if (((e += s), s < l)) break;
              typeof o != "undefined" && (o += s);
            }
            return e;
          };
          function ot(e, t, n, r) {
            try {
              var o = Ne.getStreamFromFD(e),
                a = rt(o, t, n);
              return ((x[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var at = function (t, n, r, o) {
            for (var e = 0, a = 0; a < r; a++) {
              var i = x[n >> 2],
                l = x[(n + 4) >> 2];
              n += 8;
              var s = Pe.write(t, E, i, l, o);
              if (s < 0) return -1;
              ((e += s), typeof o != "undefined" && (o += s));
            }
            return e;
          };
          function it(e, t, n, r) {
            try {
              var o = Ne.getStreamFromFD(e),
                a = at(o, t, n);
              return ((x[r >> 2] = a), 0);
            } catch (e) {
              if (typeof Pe == "undefined" || e.name !== "ErrnoError") throw e;
              return e.errno;
            }
          }
          var lt = function (t, n) {
              return (ge(k.subarray(t, t + n)), 0);
            },
            st = function (t) {
              return M.get(t);
            };
          function ut(e, t) {
            e < 128 ? t.push(e) : t.push((e % 128) | 128, e >> 7);
          }
          function ct(e) {
            for (
              var t = { i: "i32", j: "i64", f: "f32", d: "f64", p: "i32" },
                n = { parameters: [], results: e[0] == "v" ? [] : [t[e[0]]] },
                r = 1;
              r < e.length;
              ++r
            )
              n.parameters.push(t[e[r]]);
            return n;
          }
          function dt(e, t) {
            var n = e.slice(0, 1),
              r = e.slice(1),
              o = { i: 127, p: 127, j: 126, f: 125, d: 124 };
            (t.push(96), ut(r.length, t));
            for (var a = 0; a < r.length; ++a) t.push(o[r[a]]);
            n == "v" ? t.push(0) : t.push(1, o[n]);
          }
          function mt(e, t) {
            if (typeof WebAssembly.Function == "function")
              return new WebAssembly.Function(ct(t), e);
            var n = [1];
            dt(t, n);
            var r = [0, 97, 115, 109, 1, 0, 0, 0, 1];
            (ut(n.length, r),
              r.push.apply(r, n),
              r.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0));
            var o = new WebAssembly.Module(new Uint8Array(r)),
              a = new WebAssembly.Instance(o, { e: { f: e } }),
              i = a.exports.f;
            return i;
          }
          function pt(e, t) {
            if (_t)
              for (var n = e; n < e + t; n++) {
                var r = st(n);
                r && _t.set(r, n);
              }
          }
          var _t = void 0;
          function ft(e) {
            return (
              _t || ((_t = new WeakMap()), pt(0, M.length)),
              _t.get(e) || 0
            );
          }
          var gt = [];
          function ht() {
            if (gt.length) return gt.pop();
            try {
              M.grow(1);
            } catch (e) {
              throw e instanceof RangeError
                ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
                : e;
            }
            return M.length - 1;
          }
          var yt = function (t, n) {
            return M.set(t, n);
          };
          function Ct(e, t) {
            var n = ft(e);
            if (n) return n;
            var r = ht();
            try {
              yt(r, e);
            } catch (n) {
              if (!(n instanceof TypeError)) throw n;
              var o = mt(e, t);
              yt(r, o);
            }
            return (_t.set(e, r), r);
          }
          function bt(e) {
            var t = o["_" + e];
            return t;
          }
          var vt = function (t, n) {
              E.set(t, n);
            },
            St = function (t) {
              var e = Ce(t) + 1,
                n = pr(e);
              return (Ae(t, n, e), n);
            },
            Rt = function (t, n, r, o, a) {
              var e = {
                string: function (t) {
                  var e = 0;
                  return (t != null && t !== 0 && (e = St(t)), e);
                },
                array: function (t) {
                  var e = pr(t.length);
                  return (vt(t, e), e);
                },
              };
              function i(e) {
                return n === "string" ? de(e) : n === "boolean" ? !!e : e;
              }
              var l = bt(t),
                s = [],
                u = 0;
              if (o)
                for (var c = 0; c < o.length; c++) {
                  var d = e[r[c]];
                  d ? (u === 0 && (u = dr()), (s[c] = d(o[c]))) : (s[c] = o[c]);
                }
              var m = l.apply(null, s);
              function p(e) {
                return (u !== 0 && mr(u), i(e));
              }
              return ((m = p(m)), m);
            };
          function Lt(e) {
            (_t.delete(st(e)), gt.push(e));
          }
          var Et = function (t, n, r, o) {
              (t || (t = this),
                (this.parent = t),
                (this.mount = t.mount),
                (this.mounted = null),
                (this.id = Pe.nextInode++),
                (this.name = n),
                (this.mode = r),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = o));
            },
            kt = 365,
            It = 146;
          (Object.defineProperties(Et.prototype, {
            read: {
              get: function () {
                return (this.mode & kt) === kt;
              },
              set: function (t) {
                t ? (this.mode |= kt) : (this.mode &= ~kt);
              },
            },
            write: {
              get: function () {
                return (this.mode & It) === It;
              },
              set: function (t) {
                t ? (this.mode |= It) : (this.mode &= ~It);
              },
            },
            isFolder: {
              get: function () {
                return Pe.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return Pe.isChrdev(this.mode);
              },
            },
          }),
            (Pe.FSNode = Et),
            (Pe.createPreloadedFile = De),
            Pe.staticInit());
          var Tt = {
              a: me,
              t: Me,
              s: we,
              o: Fe,
              p: Oe,
              q: Be,
              n: We,
              r: qe,
              e: Ve,
              c: He,
              f: Ge,
              b: ze,
              g: je,
              k: Qe,
              i: et,
              j: tt,
              h: nt,
              m: ot,
              l: it,
              d: lt,
            },
            Dt = re(),
            xt = function () {
              return (xt = v.v)();
            },
            $t = (o._SmaxEnableLogger = function (e, t) {
              return ($t = o._SmaxEnableLogger = v.w)(e, t);
            }),
            Pt = (o._SmaxVisualizeStanza = function (e, t, n, r, a) {
              return (Pt = o._SmaxVisualizeStanza = v.x)(e, t, n, r, a);
            }),
            Nt = (o._SmaxRunnerErrorFree = function (e) {
              return (Nt = o._SmaxRunnerErrorFree = v.y)(e);
            }),
            Mt = (o._SmaxVisualizedStanzaFree = function (e) {
              return (Mt = o._SmaxVisualizedStanzaFree = v.z)(e);
            }),
            wt = (o._SmaxAutomaticRunnerBuilderCreate = function () {
              return (wt = o._SmaxAutomaticRunnerBuilderCreate = v.B)();
            }),
            At = (o._SmaxDisableLocationReporting = function () {
              return (At = o._SmaxDisableLocationReporting = v.C)();
            }),
            Ft = (o._SmaxManualRunnerBuilderCreate = function () {
              return (Ft = o._SmaxManualRunnerBuilderCreate = v.D)();
            }),
            Ot = (o._SmaxRunnerEventsCount = function (e) {
              return (Ot = o._SmaxRunnerEventsCount = v.E)(e);
            }),
            Bt = (o._SmaxRunnerEventsFree = function (e) {
              return (Bt = o._SmaxRunnerEventsFree = v.F)(e);
            }),
            Wt = (o._SmaxRunnerEventsGetEventType = function (e, t) {
              return (Wt = o._SmaxRunnerEventsGetEventType = v.G)(e, t);
            }),
            qt = (o._SmaxRunnerEventsGetInjectionEvent = function (e, t) {
              return (qt = o._SmaxRunnerEventsGetInjectionEvent = v.H)(e, t);
            }),
            Ut = (o._SmaxRunnerEventsGetInjectionToServerEvent = function (
              e,
              t,
            ) {
              return (Ut = o._SmaxRunnerEventsGetInjectionToServerEvent = v.I)(
                e,
                t,
              );
            }),
            Vt = (o._SmaxRunnerEventsGetMockCompletedEvent = function (e, t) {
              return (Vt = o._SmaxRunnerEventsGetMockCompletedEvent = v.J)(
                e,
                t,
              );
            }),
            Ht = (o._SmaxRunnerEventsGetMockRequestMatchedEvent = function (
              e,
              t,
            ) {
              return (Ht = o._SmaxRunnerEventsGetMockRequestMatchedEvent = v.K)(
                e,
                t,
              );
            }),
            Gt = (o._SmaxRunnerEventsGetSequenceCompletedEvent = function (
              e,
              t,
            ) {
              return (Gt = o._SmaxRunnerEventsGetSequenceCompletedEvent = v.L)(
                e,
                t,
              );
            }),
            zt = (o._SmaxAutomaticMockRunnerMatchServerStanza = function (
              e,
              t,
              n,
              r,
              a,
            ) {
              return (zt = o._SmaxAutomaticMockRunnerMatchServerStanza = v.M)(
                e,
                t,
                n,
                r,
                a,
              );
            }),
            jt = (o._SmaxAutomaticMockRunnerSend = function (e, t, n, r) {
              return (jt = o._SmaxAutomaticMockRunnerSend = v.N)(e, t, n, r);
            }),
            Kt = (o._SmaxAutomaticMockRunnerStart = function (e, t, n, r) {
              return (Kt = o._SmaxAutomaticMockRunnerStart = v.O)(e, t, n, r);
            }),
            Qt = (o._SmaxBinaryStanzaConnectionCreate = function (e, t, n, r) {
              return (Qt = o._SmaxBinaryStanzaConnectionCreate = v.P)(
                e,
                t,
                n,
                r,
              );
            }),
            Xt = (o._SmaxBinaryStanzaFree = function (e, t) {
              return (Xt = o._SmaxBinaryStanzaFree = v.Q)(e, t);
            }),
            Yt = (o._SmaxBinaryStanzaReaderFree = function (e) {
              return (Yt = o._SmaxBinaryStanzaReaderFree = v.R)(e);
            }),
            Jt = (o._SmaxBinaryStanzaReaderNextStanzaBytes = function (
              e,
              t,
              n,
              r,
            ) {
              return (Jt = o._SmaxBinaryStanzaReaderNextStanzaBytes = v.S)(
                e,
                t,
                n,
                r,
              );
            }),
            Zt = (o._SmaxBinaryStanzaWriterFree = function (e) {
              return (Zt = o._SmaxBinaryStanzaWriterFree = v.T)(e);
            }),
            en = (o._SmaxBinaryStanzaWriterWriteStanzaBytes = function (
              e,
              t,
              n,
              r,
            ) {
              return (en = o._SmaxBinaryStanzaWriterWriteStanzaBytes = v.U)(
                e,
                t,
                n,
                r,
              );
            }),
            tn = (o._SmaxEventReaderCreate = function (e, t, n) {
              return (tn = o._SmaxEventReaderCreate = v.V)(e, t, n);
            }),
            nn = (o._SmaxEventReaderFree = function (e) {
              return (nn = o._SmaxEventReaderFree = v.W)(e);
            }),
            rn = (o._SmaxEventReaderNextEvent = function (e, t, n) {
              return (rn = o._SmaxEventReaderNextEvent = v.X)(e, t, n);
            }),
            on = (o._SmaxRunnerBuilderAddDefaultIdentityName = function (
              e,
              t,
              n,
            ) {
              return (on = o._SmaxRunnerBuilderAddDefaultIdentityName = v.Y)(
                e,
                t,
                n,
              );
            }),
            an = (o._SmaxRunnerBuilderAddDeviceJid = function (e, t, n) {
              return (an = o._SmaxRunnerBuilderAddDeviceJid = v.Z)(e, t, n);
            }),
            ln = (o._SmaxRunnerBuilderAddFileRepo = function (e, t, n) {
              return (ln = o._SmaxRunnerBuilderAddFileRepo = v._)(e, t, n);
            }),
            sn = (o._SmaxRunnerBuilderAddIdentityFolder = function (e, t, n) {
              return (sn = o._SmaxRunnerBuilderAddIdentityFolder = v.$)(
                e,
                t,
                n,
              );
            }),
            un = (o._SmaxRunnerBuilderAddLidUserJid = function (e, t, n) {
              return (un = o._SmaxRunnerBuilderAddLidUserJid = v.aa)(e, t, n);
            }),
            cn = (o._SmaxRunnerBuilderAddMockFile = function (e, t, n) {
              return (cn = o._SmaxRunnerBuilderAddMockFile = v.ba)(e, t, n);
            }),
            dn = (o._SmaxRunnerBuilderAddResponseMapping = function (
              e,
              t,
              n,
              r,
            ) {
              return (dn = o._SmaxRunnerBuilderAddResponseMapping = v.ca)(
                e,
                t,
                n,
                r,
              );
            }),
            mn = (o._SmaxRunnerBuilderAddRunnerMode = function (e, t, n) {
              return (mn = o._SmaxRunnerBuilderAddRunnerMode = v.da)(e, t, n);
            }),
            pn = (o._SmaxRunnerBuilderAddStoredMutationsProvider = function (
              e,
              t,
              n,
            ) {
              return (pn = o._SmaxRunnerBuilderAddStoredMutationsProvider =
                v.ea)(e, t, n);
            }),
            _n = (o._SmaxRunnerBuilderAddVariable = function (e, t, n, r) {
              return (_n = o._SmaxRunnerBuilderAddVariable = v.fa)(e, t, n, r);
            }),
            fn = (o._SmaxRunnerBuilderBuild = function (e, t, n) {
              return (fn = o._SmaxRunnerBuilderBuild = v.ga)(e, t, n);
            }),
            gn = (o._SmaxRunnerBuilderFree = function (e) {
              return (gn = o._SmaxRunnerBuilderFree = v.ha)(e);
            }),
            hn = (o._SmaxRunnerBuilderSetDictionaryVersion = function (
              e,
              t,
              n,
            ) {
              return (hn = o._SmaxRunnerBuilderSetDictionaryVersion = v.ia)(
                e,
                t,
                n,
              );
            }),
            yn = (o._SmaxVisualizeProto = function (e, t, n, r, a) {
              return (yn = o._SmaxVisualizeProto = v.ja)(e, t, n, r, a);
            }),
            Cn = (o._SmaxVisualizedProtoFree = function (e) {
              return (Cn = o._SmaxVisualizedProtoFree = v.ka)(e);
            }),
            bn = (o._SmaxFlipperConnectionConnect = function (e) {
              return (bn = o._SmaxFlipperConnectionConnect = v.la)(e);
            }),
            vn = (o._SmaxFlipperConnectionCreate = function (e, t, n, r, a) {
              return (vn = o._SmaxFlipperConnectionCreate = v.ma)(
                e,
                t,
                n,
                r,
                a,
              );
            }),
            Sn = (o._SmaxFlipperConnectionFree = function (e) {
              return (Sn = o._SmaxFlipperConnectionFree = v.na)(e);
            }),
            Rn = (o._SmaxMockRunnerAddMockFile = function (e, t, n) {
              return (Rn = o._SmaxMockRunnerAddMockFile = v.oa)(e, t, n);
            }),
            Ln = (o._SmaxMockRunnerAddResponseMapping = function (e, t, n, r) {
              return (Ln = o._SmaxMockRunnerAddResponseMapping = v.pa)(
                e,
                t,
                n,
                r,
              );
            }),
            En = (o._SmaxMockRunnerAddSyncdKey = function (e, t, n, r, a, i) {
              return (En = o._SmaxMockRunnerAddSyncdKey = v.qa)(
                e,
                t,
                n,
                r,
                a,
                i,
              );
            }),
            kn = (o._SmaxMockRunnerComplete = function (e, t) {
              return (kn = o._SmaxMockRunnerComplete = v.ra)(e, t);
            }),
            In = (o._SmaxMockRunnerDeregisterListener = function (e, t, n, r) {
              return (In = o._SmaxMockRunnerDeregisterListener = v.sa)(
                e,
                t,
                n,
                r,
              );
            }),
            Tn = (o._SmaxMockRunnerFree = function (e) {
              return (Tn = o._SmaxMockRunnerFree = v.ta)(e);
            }),
            Dn = (o._SmaxMockRunnerGetPaymentsMockNotificationsFeatures =
              function (e, t, n) {
                return (Dn =
                  o._SmaxMockRunnerGetPaymentsMockNotificationsFeatures =
                    v.ua)(e, t, n);
              }),
            xn = (o._SmaxMockRunnerGetPreKeyBundleForIdentity = function (
              e,
              t,
              n,
              r,
              a,
            ) {
              return (xn = o._SmaxMockRunnerGetPreKeyBundleForIdentity = v.va)(
                e,
                t,
                n,
                r,
                a,
              );
            }),
            $n = (o._SmaxMockRunnerGetRunnerMode = function (e, t, n) {
              return ($n = o._SmaxMockRunnerGetRunnerMode = v.wa)(e, t, n);
            }),
            Pn = (o._SmaxMockRunnerGetSequenceCollection = function (e, t, n) {
              return (Pn = o._SmaxMockRunnerGetSequenceCollection = v.xa)(
                e,
                t,
                n,
              );
            }),
            Nn = (o._SmaxMockRunnerMatchStanza = function (e, t, n, r, a) {
              return (Nn = o._SmaxMockRunnerMatchStanza = v.ya)(e, t, n, r, a);
            }),
            Mn = (o._SmaxMockRunnerOverrideFunction = function (e, t, n, r) {
              return (Mn = o._SmaxMockRunnerOverrideFunction = v.za)(
                e,
                t,
                n,
                r,
              );
            }),
            wn = (o._SmaxMockRunnerProcessPreKeyBundle = function (
              e,
              t,
              n,
              r,
              a,
              i,
              l,
              s,
              u,
            ) {
              return (wn = o._SmaxMockRunnerProcessPreKeyBundle = v.Aa)(
                e,
                t,
                n,
                r,
                a,
                i,
                l,
                s,
                u,
              );
            }),
            An = (o._SmaxMockRunnerProcessPreKeyBundleByAddress = function (
              e,
              t,
              n,
              r,
              a,
              i,
              l,
              s,
              u,
            ) {
              return (An = o._SmaxMockRunnerProcessPreKeyBundleByAddress =
                v.Ba)(e, t, n, r, a, i, l, s, u);
            }),
            Fn = (o._SmaxMockRunnerRegisterListener = function (e, t, n, r) {
              return (Fn = o._SmaxMockRunnerRegisterListener = v.Ca)(
                e,
                t,
                n,
                r,
              );
            }),
            On = (o._SmaxMockRunnerSetAddressName = function (e, t, n, r) {
              return (On = o._SmaxMockRunnerSetAddressName = v.Da)(e, t, n, r);
            }),
            Bn = (o._SmaxMockRunnerSetDefaultIdentityName = function (e, t, n) {
              return (Bn = o._SmaxMockRunnerSetDefaultIdentityName = v.Ea)(
                e,
                t,
                n,
              );
            }),
            Wn = (o._SmaxMockRunnerSetDeviceJID = function (e, t, n) {
              return (Wn = o._SmaxMockRunnerSetDeviceJID = v.Fa)(e, t, n);
            }),
            qn = (o._SmaxMockRunnerSetLidUserJID = function (e, t, n) {
              return (qn = o._SmaxMockRunnerSetLidUserJID = v.Ga)(e, t, n);
            }),
            Un = (o._SmaxMockRunnerSetRunnerMode = function (e, t, n) {
              return (Un = o._SmaxMockRunnerSetRunnerMode = v.Ha)(e, t, n);
            }),
            Vn = (o._SmaxMockRunnerSetVariable = function (e, t, n, r) {
              return (Vn = o._SmaxMockRunnerSetVariable = v.Ia)(e, t, n, r);
            }),
            Hn = (o._SmaxPaymentsMockNotificationsAttributeCount = function (
              e,
              t,
            ) {
              return (Hn = o._SmaxPaymentsMockNotificationsAttributeCount =
                v.Ja)(e, t);
            }),
            Gn = (o._SmaxPaymentsMockNotificationsCount = function (e) {
              return (Gn = o._SmaxPaymentsMockNotificationsCount = v.Ka)(e);
            }),
            zn = (o._SmaxPaymentsMockNotificationsFree = function (e) {
              return (zn = o._SmaxPaymentsMockNotificationsFree = v.La)(e);
            }),
            jn = (o._SmaxPaymentsMockNotificationsGetAttributes = function (
              e,
              t,
            ) {
              return (jn = o._SmaxPaymentsMockNotificationsGetAttributes =
                v.Ma)(e, t);
            }),
            Kn = (o._SmaxRunnerSequenceCollectionViewFree = function (e) {
              return (Kn = o._SmaxRunnerSequenceCollectionViewFree = v.Na)(e);
            }),
            Qn = (o._SmaxFlipperPluginBackendCreate = function (e, t, n) {
              return (Qn = o._SmaxFlipperPluginBackendCreate = v.Oa)(e, t, n);
            }),
            Xn = (o._SmaxFlipperPluginBackendFree = function (e) {
              return (Xn = o._SmaxFlipperPluginBackendFree = v.Pa)(e);
            }),
            Yn = (o._SmaxFlipperPluginBackendFreeResponse = function (e) {
              return (Yn = o._SmaxFlipperPluginBackendFreeResponse = v.Qa)(e);
            }),
            Jn = (o._SmaxFlipperPluginBackendHandleRpc = function (e, t, n, r) {
              return (Jn = o._SmaxFlipperPluginBackendHandleRpc = v.Ra)(
                e,
                t,
                n,
                r,
              );
            }),
            Zn = (o._SmaxManualMockRunnerNext = function (e, t, n) {
              return (Zn = o._SmaxManualMockRunnerNext = v.Sa)(e, t, n);
            }),
            er = (o._SmaxManualMockRunnerStart = function (e, t, n) {
              return (er = o._SmaxManualMockRunnerStart = v.Ta)(e, t, n);
            }),
            tr = (o._SmaxManualMockRunnerStartAndInject = function (
              e,
              t,
              n,
              r,
            ) {
              return (tr = o._SmaxManualMockRunnerStartAndInject = v.Ua)(
                e,
                t,
                n,
                r,
              );
            }),
            nr = (o._SmaxRunnerPreKeyBundleFree = function (e) {
              return (nr = o._SmaxRunnerPreKeyBundleFree = v.Va)(e);
            }),
            rr = (o._malloc = function (e) {
              return (rr = o._malloc = v.Wa)(e);
            }),
            or = (o._free = function (e) {
              return (or = o._free = v.Xa)(e);
            }),
            ar = function () {
              return (ar = v.Ya)();
            },
            ir = function (t) {
              return (ir = v.htonl)(t);
            },
            lr = function (t) {
              return (lr = v.htons)(t);
            },
            sr = function (t) {
              return (sr = v.ntohs)(t);
            },
            ur = function (t, n) {
              return (ur = v.setThrew)(t, n);
            },
            cr = function (t) {
              return (cr = v.Za)(t);
            },
            dr = function () {
              return (dr = v._a)();
            },
            mr = function (t) {
              return (mr = v.$a)(t);
            },
            pr = function (t) {
              return (pr = v.ab)(t);
            },
            _r = function (t) {
              return (_r = v.__cxa_free_exception)(t);
            },
            fr = function (t) {
              return (fr = v.__cxa_increment_exception_refcount)(t);
            },
            gr = function (t) {
              return (gr = v.__cxa_decrement_exception_refcount)(t);
            },
            hr = function (t, n, r) {
              return (hr = v.bb)(t, n, r);
            },
            yr = function (t) {
              return (yr = v.cb)(t);
            };
          ((o.ccall = Rt),
            (o.addFunction = Ct),
            (o.removeFunction = Lt),
            (o.setValue = se),
            (o.getValue = le),
            (o.UTF8ToString = de),
            (o.stringToUTF8 = Ae),
            (o.lengthBytesUTF8 = Ce));
          var Cr;
          G = function e() {
            (Cr || br(), Cr || (G = e));
          };
          function br() {
            if (V > 0 || (B(), V > 0)) return;
            function e() {
              Cr || ((Cr = !0), (o.calledRun = !0), !S && (W(), a(o), q()));
            }
            e();
          }
          return (br(), r.ready);
        };
      })(),
      s = l;
    i.default = s;
  },
  66,
);

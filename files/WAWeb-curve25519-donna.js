__d(
  "WAWeb-curve25519-donna",
  [],
  function $module_WAWeb_curve25519_donna(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    var e = {},
      aa = {},
      l;
    for (l in e) e.hasOwnProperty(l) && (aa[l] = e[l]);
    ((e.read = function (t) {
      var r = new XMLHttpRequest();
      return (r.open("GET", t, !1), r.send(null), r.responseText);
    }),
      typeof arguments != "undefined" && (e.arguments = arguments),
      typeof console != "undefined"
        ? (e.print || (e.print = function (t) {}),
          e.printErr || (e.printErr = function (t) {}))
        : e.print || (e.print = function () {}),
      typeof e.setWindowTitle == "undefined" &&
        (e.setWindowTitle = function (t) {
          document.title = t;
        }));
    function ba(t) {
      eval.call(null, t);
    }
    (!e.load &&
      e.read &&
      (e.load = function (t) {
        ba(e.read(t));
      }),
      e.print || (e.print = function () {}),
      e.printErr || (e.printErr = e.print),
      e.arguments || (e.arguments = []),
      e.thisProgram || (e.thisProgram = "./this.program"),
      (e.print = e.print),
      (e.S = e.printErr),
      (e.preRun = []),
      (e.postRun = []));
    for (l in aa) aa.hasOwnProperty(l) && (e[l] = aa[l]);
    var n = {
      cb: function (t) {
        ca = t;
      },
      Ua: function () {
        return ca;
      },
      na: function () {
        return m;
      },
      X: function (t) {
        m = t;
      },
      Aa: function (t) {
        switch (t) {
          case "i1":
          case "i8":
            return 1;
          case "i16":
            return 2;
          case "i32":
            return 4;
          case "i64":
            return 8;
          case "float":
            return 4;
          case "double":
            return 8;
          default:
            return t[t.length - 1] === "*"
              ? n.H
              : t[0] === "i"
                ? ((t = parseInt(t.substr(1))), assert(t % 8 === 0), t / 8)
                : 0;
        }
      },
      Ta: function (t) {
        return Math.max(n.Aa(t), n.H);
      },
      dd: 16,
      Bd: function (t, r) {
        return (
          r === "double" || r === "i64"
            ? t & 7 && (assert((t & 7) === 4), (t += 4))
            : assert((t & 3) === 0),
          t
        );
      },
      od: function (t, r, o) {
        return o || (t != "i64" && t != "double")
          ? t
            ? Math.min(r || (t ? n.Ta(t) : 0), n.H)
            : Math.min(r, 8)
          : 8;
      },
      J: function (t, r, o) {
        return o && o.length
          ? (o.splice || (o = Array.prototype.slice.call(o)),
            o.splice(0, 0, r),
            e["dynCall_" + t].apply(null, o))
          : e["dynCall_" + t].call(null, r);
      },
      U: [],
      Ma: function (t) {
        for (var r = 0; r < n.U.length; r++)
          if (!n.U[r]) return ((n.U[r] = t), 2 * (1 + r));
        throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
      },
      $a: function (t) {
        n.U[(t - 2) / 2] = null;
      },
      M: function (t) {
        (n.M.ma || (n.M.ma = {}), n.M.ma[t] || ((n.M.ma[t] = 1), e.S(t)));
      },
      ha: {},
      rd: function (t, r) {
        (assert(r), n.ha[r] || (n.ha[r] = {}));
        var o = n.ha[r];
        return (
          o[t] ||
            (o[t] = function () {
              return n.J(r, t, arguments);
            }),
          o[t]
        );
      },
      pd: function () {
        throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
      },
      W: function (t) {
        var r = m;
        return ((m = (m + t) | 0), (m = (m + 15) & -16), r);
      },
      Ia: function (t) {
        var r = p;
        return ((p = (p + t) | 0), (p = (p + 15) & -16), r);
      },
      P: function (t) {
        var r = v;
        return (
          (v = (v + t) | 0),
          (v = (v + 15) & -16),
          (t = v >= w) &&
            (z(
              "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
                w +
                ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ",
            ),
            (t = !0)),
          t ? ((v = r), 0) : r
        );
      },
      ea: function (t, r) {
        return Math.ceil(t / (r || 16)) * (r || 16);
      },
      xd: function (t, r, o) {
        return o
          ? +(t >>> 0) + 4294967296 * +(r >>> 0)
          : +(t >>> 0) + 4294967296 * +(r | 0);
      },
      La: 8,
      H: 4,
      ed: 0,
    };
    ((e.Runtime = n), (n.addFunction = n.Ma), (n.removeFunction = n.$a));
    var A = !1,
      da,
      fa,
      ca;
    function assert(t, r) {
      t || z("Assertion failed: " + r);
    }
    function ga(a) {
      var b = e["_" + a];
      if (!b)
        try {
          b = eval("_" + a);
        } catch (t) {}
      return (
        assert(
          b,
          "Cannot call unknown function " +
            a +
            " (perhaps LLVM optimizations or closure removed it?)",
        ),
        b
      );
    }
    var ha, ia;
    ((function () {
      function a(t) {
        return (
          (t = t.toString().match(d).slice(1)),
          { arguments: t[0], body: t[1], returnValue: t[2] }
        );
      }
      var b = {
          stackSave: function () {
            n.na();
          },
          stackRestore: function () {
            n.X();
          },
          arrayToC: function (t) {
            var r = n.W(t.length);
            return (ja(t, r), r);
          },
          stringToC: function (t) {
            var r = 0;
            return (
              t != null &&
                t !== 0 &&
                ((r = n.W((t.length << 2) + 1)), ka(t, r)),
              r
            );
          },
        },
        c = { string: b.stringToC, array: b.arrayToC };
      ia = function (t, r, o, i, s) {
        t = ga(t);
        var _ = [],
          g = 0;
        if (i)
          for (var C = 0; C < i.length; C++) {
            var k = c[o[C]];
            k ? (g === 0 && (g = n.na()), (_[C] = k(i[C]))) : (_[C] = i[C]);
          }
        if (((o = t.apply(null, _)), r === "string" && (o = la(o)), g !== 0)) {
          if (s && s.async) {
            EmterpreterAsync.hd.push(function () {
              n.X(g);
            });
            return;
          }
          n.X(g);
        }
        return o;
      };
      var d =
          /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
        f = {},
        h;
      for (h in b) b.hasOwnProperty(h) && (f[h] = a(b[h]));
      ha = function (b, c, d) {
        d = d || [];
        var h = ga(b);
        b = d.every(function (t) {
          return t === "number";
        });
        var u = c !== "string";
        if (u && b) return h;
        var q = d.map(function (t, r) {
          return "$" + r;
        });
        c = "(function(" + q.join(",") + ") {";
        var y = d.length;
        if (!b) {
          c += "var stack = " + f.stackSave.body + ";";
          for (var B = 0; B < y; B++) {
            var J = q[B],
              ea = d[B];
            ea !== "number" &&
              ((ea = f[ea + "ToC"]),
              (c += "var " + ea.arguments + " = " + J + ";"),
              (c += ea.body + ";"),
              (c += J + "=" + ea.returnValue + ";"));
          }
        }
        return (
          (d = a(function () {
            return h;
          }).returnValue),
          (c += "var ret = " + d + "(" + q.join(",") + ");"),
          u ||
            ((d = a(function () {
              return la;
            }).returnValue),
            (c += "ret = " + d + "(ret);")),
          b || (c += f.stackRestore.body.replace("()", "(stack)") + ";"),
          eval(c + "return ret})")
        );
      };
    })(),
      (e.ccall = ia),
      (e.cwrap = ha));
    function ma(t, r, o) {
      switch (
        ((o = o || "i8"), o.charAt(o.length - 1) === "*" && (o = "i32"), o)
      ) {
        case "i1":
          D[t >> 0] = r;
          break;
        case "i8":
          D[t >> 0] = r;
          break;
        case "i16":
          E[t >> 1] = r;
          break;
        case "i32":
          F[t >> 2] = r;
          break;
        case "i64":
          ((fa = [
            r >>> 0,
            ((da = r),
            1 <= +na(da)
              ? 0 < da
                ? (oa(+pa(da / 4294967296), 4294967295) | 0) >>> 0
                : ~~+qa((da - +(~~da >>> 0)) / 4294967296) >>> 0
              : 0),
          ]),
            (F[t >> 2] = fa[0]),
            (F[(t + 4) >> 2] = fa[1]));
          break;
        case "float":
          ra[t >> 2] = r;
          break;
        case "double":
          sa[t >> 3] = r;
          break;
        default:
          z("invalid type for setValue: " + o);
      }
    }
    e.setValue = ma;
    function ta(t, r) {
      switch (
        ((r = r || "i8"), r.charAt(r.length - 1) === "*" && (r = "i32"), r)
      ) {
        case "i1":
          return D[t >> 0];
        case "i8":
          return D[t >> 0];
        case "i16":
          return E[t >> 1];
        case "i32":
          return F[t >> 2];
        case "i64":
          return F[t >> 2];
        case "float":
          return ra[t >> 2];
        case "double":
          return sa[t >> 3];
        default:
          z("invalid type for setValue: " + r);
      }
      return null;
    }
    ((e.getValue = ta),
      (e.ALLOC_NORMAL = 0),
      (e.ALLOC_STACK = 1),
      (e.ALLOC_STATIC = 2),
      (e.ALLOC_DYNAMIC = 3),
      (e.ALLOC_NONE = 4));
    function G(t, r, o, i) {
      var s, _;
      typeof t == "number" ? ((s = !0), (_ = t)) : ((s = !1), (_ = t.length));
      var g = typeof r == "string" ? r : null;
      if (
        ((o =
          o == 4
            ? i
            : [ua, n.W, n.Ia, n.P][o === void 0 ? 2 : o](
                Math.max(_, g ? 1 : r.length),
              )),
        s)
      ) {
        for (i = o, assert((o & 3) == 0), t = o + (_ & -4); i < t; i += 4)
          F[i >> 2] = 0;
        for (t = o + _; i < t; ) D[i++ >> 0] = 0;
        return o;
      }
      if (g === "i8")
        return (
          t.subarray || t.slice ? H.set(t, o) : H.set(new Uint8Array(t), o),
          o
        );
      i = 0;
      for (var C, k; i < _; ) {
        var x = t[i];
        (typeof x == "function" && (x = n.sd(x)),
          (s = g || r[i]),
          s === 0
            ? i++
            : (s == "i64" && (s = "i32"),
              ma(o + i, x, s),
              k !== s && ((C = n.Aa(s)), (k = s)),
              (i += C)));
      }
      return o;
    }
    ((e.allocate = G),
      (e.getMemory = function (t) {
        return va
          ? (typeof wa != "undefined" && !wa.C) || !xa
            ? n.P(t)
            : ua(t)
          : n.Ia(t);
      }));
    function la(t, r) {
      if (r === 0 || !t) return "";
      for (
        var o = 0, i, s = 0;
        (i = H[(t + s) >> 0]),
          (o |= i),
          !((i == 0 && !r) || (s++, r && s == r));
      );
      if ((r || (r = s), (i = ""), 128 > o)) {
        for (; 0 < r; )
          ((o = String.fromCharCode.apply(
            String,
            H.subarray(t, t + Math.min(r, 1024)),
          )),
            (i = i ? i + o : o),
            (t += 1024),
            (r -= 1024));
        return i;
      }
      return e.UTF8ToString(t);
    }
    ((e.Pointer_stringify = la),
      (e.AsciiToString = function (t) {
        for (var r = ""; ; ) {
          var o = D[t++ >> 0];
          if (!o) return r;
          r += String.fromCharCode(o);
        }
      }),
      (e.stringToAscii = function (t, r) {
        return ya(t, r, !1);
      }));
    function za(t, r) {
      for (var o, i, s, _, g, C, k = ""; ; ) {
        if (((o = t[r++]), !o)) return k;
        o & 128
          ? ((i = t[r++] & 63),
            (o & 224) == 192
              ? (k += String.fromCharCode(((o & 31) << 6) | i))
              : ((s = t[r++] & 63),
                (o & 240) == 224
                  ? (o = ((o & 15) << 12) | (i << 6) | s)
                  : ((_ = t[r++] & 63),
                    (o & 248) == 240
                      ? (o = ((o & 7) << 18) | (i << 12) | (s << 6) | _)
                      : ((g = t[r++] & 63),
                        (o & 252) == 248
                          ? (o =
                              ((o & 3) << 24) |
                              (i << 18) |
                              (s << 12) |
                              (_ << 6) |
                              g)
                          : ((C = t[r++] & 63),
                            (o =
                              ((o & 1) << 30) |
                              (i << 24) |
                              (s << 18) |
                              (_ << 12) |
                              (g << 6) |
                              C)))),
                65536 > o
                  ? (k += String.fromCharCode(o))
                  : ((o -= 65536),
                    (k += String.fromCharCode(
                      55296 | (o >> 10),
                      56320 | (o & 1023),
                    )))))
          : (k += String.fromCharCode(o));
      }
    }
    ((e.UTF8ArrayToString = za),
      (e.UTF8ToString = function (t) {
        return za(H, t);
      }));
    function Aa(t, r, o, i) {
      if (!(0 < i)) return 0;
      var s = o;
      i = o + i - 1;
      for (var _ = 0; _ < t.length; ++_) {
        var g = t.charCodeAt(_);
        if (
          (55296 <= g &&
            57343 >= g &&
            (g = (65536 + ((g & 1023) << 10)) | (t.charCodeAt(++_) & 1023)),
          127 >= g)
        ) {
          if (o >= i) break;
          r[o++] = g;
        } else {
          if (2047 >= g) {
            if (o + 1 >= i) break;
            r[o++] = 192 | (g >> 6);
          } else {
            if (65535 >= g) {
              if (o + 2 >= i) break;
              r[o++] = 224 | (g >> 12);
            } else {
              if (2097151 >= g) {
                if (o + 3 >= i) break;
                r[o++] = 240 | (g >> 18);
              } else {
                if (67108863 >= g) {
                  if (o + 4 >= i) break;
                  r[o++] = 248 | (g >> 24);
                } else {
                  if (o + 5 >= i) break;
                  ((r[o++] = 252 | (g >> 30)),
                    (r[o++] = 128 | ((g >> 24) & 63)));
                }
                r[o++] = 128 | ((g >> 18) & 63);
              }
              r[o++] = 128 | ((g >> 12) & 63);
            }
            r[o++] = 128 | ((g >> 6) & 63);
          }
          r[o++] = 128 | (g & 63);
        }
      }
      return ((r[o] = 0), o - s);
    }
    ((e.stringToUTF8Array = Aa),
      (e.stringToUTF8 = function (t, r, o) {
        return Aa(t, H, r, o);
      }));
    function Ba(t) {
      for (var r = 0, o = 0; o < t.length; ++o) {
        var i = t.charCodeAt(o);
        (55296 <= i &&
          57343 >= i &&
          (i = (65536 + ((i & 1023) << 10)) | (t.charCodeAt(++o) & 1023)),
          127 >= i
            ? ++r
            : (r =
                2047 >= i
                  ? r + 2
                  : 65535 >= i
                    ? r + 3
                    : 2097151 >= i
                      ? r + 4
                      : 67108863 >= i
                        ? r + 5
                        : r + 6));
      }
      return r;
    }
    ((e.lengthBytesUTF8 = Ba),
      (e.UTF16ToString = function (t) {
        for (var r = 0, o = ""; ; ) {
          var i = E[(t + 2 * r) >> 1];
          if (i == 0) return o;
          (++r, (o += String.fromCharCode(i)));
        }
      }),
      (e.stringToUTF16 = function (t, r, o) {
        if ((o === void 0 && (o = 2147483647), 2 > o)) return 0;
        o -= 2;
        var i = r;
        o = o < 2 * t.length ? o / 2 : t.length;
        for (var s = 0; s < o; ++s) ((E[r >> 1] = t.charCodeAt(s)), (r += 2));
        return ((E[r >> 1] = 0), r - i);
      }),
      (e.lengthBytesUTF16 = function (t) {
        return 2 * t.length;
      }),
      (e.UTF32ToString = function (t) {
        for (var r = 0, o = ""; ; ) {
          var i = F[(t + 4 * r) >> 2];
          if (i == 0) return o;
          (++r,
            65536 <= i
              ? ((i = i - 65536),
                (o += String.fromCharCode(
                  55296 | (i >> 10),
                  56320 | (i & 1023),
                )))
              : (o += String.fromCharCode(i)));
        }
      }),
      (e.stringToUTF32 = function (t, r, o) {
        if ((o === void 0 && (o = 2147483647), 4 > o)) return 0;
        var i = r;
        o = i + o - 4;
        for (var s = 0; s < t.length; ++s) {
          var g = t.charCodeAt(s);
          if (55296 <= g && 57343 >= g)
            var _ = t.charCodeAt(++s),
              g = (65536 + ((g & 1023) << 10)) | (_ & 1023);
          if (((F[r >> 2] = g), (r += 4), r + 4 > o)) break;
        }
        return ((F[r >> 2] = 0), r - i);
      }),
      (e.lengthBytesUTF32 = function (t) {
        for (var r = 0, o = 0; o < t.length; ++o) {
          var i = t.charCodeAt(o);
          (55296 <= i && 57343 >= i && ++o, (r += 4));
        }
        return r;
      }));
    function Ca(t) {
      function r(o, i, s) {
        i = i || 1 / 0;
        var x = "",
          $ = [],
          j;
        if (t[_] === "N") {
          for (_++, t[_] === "K" && _++, j = []; t[_] !== "E"; )
            if (t[_] === "S") {
              _++;
              var Q = t.indexOf("_", _);
              (j.push(C[t.substring(_, Q) || 0] || "?"), (_ = Q + 1));
            } else if (t[_] === "C") (j.push(j[j.length - 1]), (_ += 2));
            else {
              var Q = parseInt(t.substr(_)),
                ee = Q.toString().length;
              if (!Q || !ee) {
                _--;
                break;
              }
              var te = t.substr(_ + ee, Q);
              (j.push(te), C.push(te), (_ += ee + Q));
            }
          if ((_++, (j = j.join("::")), i--, i === 0)) return o ? [j] : j;
        } else
          ((t[_] === "K" || (k && t[_] === "L")) && _++,
            (Q = parseInt(t.substr(_))) &&
              ((ee = Q.toString().length),
              (j = t.substr(_ + ee, Q)),
              (_ += ee + Q)));
        ((k = !1),
          t[_] === "I"
            ? (_++,
              (Q = r(!0)),
              (ee = r(!0, 1, !0)),
              (x += ee[0] + " " + j + "<" + Q.join(", ") + ">"))
            : (x = j));
        e: for (; _ < t.length && 0 < i--; )
          if (((j = t[_++]), j in g)) $.push(g[j]);
          else
            switch (j) {
              case "P":
                $.push(r(!0, 1, !0)[0] + "*");
                break;
              case "R":
                $.push(r(!0, 1, !0)[0] + "&");
                break;
              case "L":
                (_++,
                  (Q = t.indexOf("E", _) - _),
                  $.push(t.substr(_, Q)),
                  (_ += Q + 2));
                break;
              case "A":
                if (
                  ((Q = parseInt(t.substr(_))),
                  (_ += Q.toString().length),
                  t[_] !== "_")
                )
                  throw "?";
                (_++, $.push(r(!0, 1, !0)[0] + " [" + Q + "]"));
                break;
              case "E":
                break e;
              default:
                x += "?" + j;
                break e;
            }
        return (
          s || $.length !== 1 || $[0] !== "void" || ($ = []),
          o ? (x && $.push(x + "?"), $) : x + ("(" + $.join(", ") + ")")
        );
      }
      var o = !!e.___cxa_demangle;
      if (o)
        try {
          var x = ua(t.length);
          ka(t.substr(1), x);
          var i = ua(4),
            s = e.___cxa_demangle(x, 0, 0, i);
          if (ta(i, "i32") === 0 && s) return la(s);
        } catch (t) {
        } finally {
          (x && Da(x), i && Da(i), s && Da(s));
        }
      var _ = 3,
        g = {
          v: "void",
          b: "bool",
          c: "char",
          s: "short",
          i: "int",
          l: "long",
          f: "float",
          d: "double",
          w: "wchar_t",
          a: "signed char",
          h: "unsigned char",
          t: "unsigned short",
          j: "unsigned int",
          m: "unsigned long",
          x: "long long",
          y: "unsigned long long",
          z: "...",
        },
        C = [],
        k = !0,
        x = t;
      try {
        if (t == "Object._main" || t == "_main") return "main()";
        if (
          (typeof t == "number" && (t = la(t)),
          t[0] !== "_" || t[1] !== "_" || t[2] !== "Z")
        )
          return t;
        switch (t[3]) {
          case "n":
            return "operator new()";
          case "d":
            return "operator delete()";
        }
        x = r();
      } catch (t) {
        x += "?";
      }
      return (
        0 <= x.indexOf("?") &&
          !o &&
          n.M(
            "warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling",
          ),
        x
      );
    }
    function Ea() {
      return Fa().replace(/__Z[\w\d_]+/g, function (t) {
        var r = Ca(t);
        return t === r ? t : t + " [" + r + "]";
      });
    }
    function Fa() {
      var t = Error();
      if (!t.stack) {
        try {
          throw Error(0);
        } catch (r) {
          t = r;
        }
        if (!t.stack) return "(no stack trace available)";
      }
      return t.stack.toString();
    }
    e.stackTrace = function () {
      return Ea();
    };
    function Ga() {
      var t = v;
      return (0 < t % 4096 && (t += 4096 - (t % 4096)), t);
    }
    for (
      var D,
        H,
        E,
        Ha,
        F,
        Ia,
        ra,
        sa,
        Ja = 0,
        p = 0,
        va = !1,
        Ka = 0,
        m = 0,
        La = 0,
        Ma = 0,
        v = 0,
        Na = e.TOTAL_STACK || 524288,
        w = e.TOTAL_MEMORY || 1048576,
        I = 65536;
      I < w || I < 2 * Na;
    )
      I = 16777216 > I ? 2 * I : I + 16777216;
    (I !== w && (w = I),
      assert(
        typeof Int32Array != "undefined" &&
          typeof Float64Array != "undefined" &&
          !!new Int32Array(1).subarray &&
          !!new Int32Array(1).set,
        "JS engine does not provide full typed array support",
      ));
    var buffer;
    ((buffer = new ArrayBuffer(w)),
      (D = new Int8Array(buffer)),
      (E = new Int16Array(buffer)),
      (F = new Int32Array(buffer)),
      (H = new Uint8Array(buffer)),
      (Ha = new Uint16Array(buffer)),
      (Ia = new Uint32Array(buffer)),
      (ra = new Float32Array(buffer)),
      (sa = new Float64Array(buffer)),
      (F[0] = 255),
      assert(
        H[0] === 255 && H[3] === 0,
        "Typed arrays 2 must be run on a little-endian system",
      ),
      (e.HEAP = void 0),
      (e.buffer = buffer),
      (e.HEAP8 = D),
      (e.HEAP16 = E),
      (e.HEAP32 = F),
      (e.HEAPU8 = H),
      (e.HEAPU16 = Ha),
      (e.HEAPU32 = Ia),
      (e.HEAPF32 = ra),
      (e.HEAPF64 = sa));
    function Oa(t) {
      for (; 0 < t.length; ) {
        var r = t.shift();
        if (typeof r == "function") r();
        else {
          var o = r.Qa;
          typeof o == "number"
            ? r.T === void 0
              ? n.J("v", o)
              : n.J("vi", o, [r.T])
            : o(r.T === void 0 ? null : r.T);
        }
      }
    }
    var Pa = [],
      Qa = [],
      Ra = [],
      K = [],
      Sa = [],
      xa = !1;
    function Ta(t) {
      Pa.unshift(t);
    }
    ((e.addOnPreRun = Ta),
      (e.addOnInit = function (t) {
        Qa.unshift(t);
      }),
      (e.addOnPreMain = function (t) {
        Ra.unshift(t);
      }),
      (e.addOnExit = function (t) {
        K.unshift(t);
      }));
    function Ua(t) {
      Sa.unshift(t);
    }
    e.addOnPostRun = Ua;
    function Va(t, r, o) {
      return (
        (o = Array(0 < o ? o : Ba(t) + 1)),
        (t = Aa(t, o, 0, o.length)),
        r && (o.length = t),
        o
      );
    }
    ((e.intArrayFromString = Va),
      (e.intArrayToString = function (t) {
        for (var r = [], o = 0; o < t.length; o++) {
          var i = t[o];
          (255 < i && (i &= 255), r.push(String.fromCharCode(i)));
        }
        return r.join("");
      }));
    function ka(t, r, o) {
      for (t = Va(t, o), o = 0; o < t.length; )
        ((D[(r + o) >> 0] = t[o]), (o += 1));
    }
    e.writeStringToMemory = ka;
    function ja(t, r) {
      for (var o = 0; o < t.length; o++) D[r++ >> 0] = t[o];
    }
    e.writeArrayToMemory = ja;
    function ya(t, r, o) {
      for (var i = 0; i < t.length; ++i) D[r++ >> 0] = t.charCodeAt(i);
      o || (D[r >> 0] = 0);
    }
    ((e.writeAsciiToMemory = ya),
      (Math.imul && Math.imul(4294967295, 5) === -5) ||
        (Math.imul = function (t, r) {
          var o = t & 65535,
            i = r & 65535;
          return (o * i + (((t >>> 16) * i + o * (r >>> 16)) << 16)) | 0;
        }),
      (Math.td = Math.imul),
      Math.clz32 ||
        (Math.clz32 = function (t) {
          t = t >>> 0;
          for (var r = 0; 32 > r; r++) if (t & (1 << (31 - r))) return r;
          return 32;
        }),
      (Math.kd = Math.clz32));
    var na = Math.abs,
      qa = Math.ceil,
      pa = Math.floor,
      oa = Math.min,
      L = 0,
      Wa = null,
      Xa = null;
    function Ya() {
      (L++, e.monitorRunDependencies && e.monitorRunDependencies(L));
    }
    e.addRunDependency = Ya;
    function Za() {
      if (
        (L--,
        e.monitorRunDependencies && e.monitorRunDependencies(L),
        L == 0 && (Wa !== null && (clearInterval(Wa), (Wa = null)), Xa))
      ) {
        var t = Xa;
        ((Xa = null), t());
      }
    }
    ((e.removeRunDependency = Za),
      (e.preloadedImages = {}),
      (e.preloadedAudios = {}),
      (Ja = 8),
      (p = Ja + 1696),
      Qa.push(),
      G(
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0,
          0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          2, 0, 0, 0, 164, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        "i8",
        4,
        n.La,
      ));
    var $a = n.ea(G(12, "i8", 2), 8);
    (assert($a % 8 == 0),
      (e._bitshift64Ashr = ab),
      (e._i64Subtract = bb),
      (e._i64Add = cb),
      (e._memset = db));
    function eb(t, r) {
      (K.push(function () {
        n.J("vi", t, [r]);
      }),
        (eb.level = K.length));
    }
    ((e._bitshift64Lshr = fb), (e._bitshift64Shl = gb));
    var M = {
        G: 1,
        B: 2,
        Qc: 3,
        Nb: 4,
        F: 5,
        sa: 6,
        gb: 7,
        kc: 8,
        Z: 9,
        ub: 10,
        oa: 11,
        $c: 11,
        Ka: 12,
        Y: 13,
        Gb: 14,
        wc: 15,
        $: 16,
        pa: 17,
        ad: 18,
        ba: 19,
        qa: 20,
        N: 21,
        u: 22,
        fc: 23,
        Ja: 24,
        O: 25,
        Xc: 26,
        Hb: 27,
        sc: 28,
        da: 29,
        Nc: 30,
        Zb: 31,
        Gc: 32,
        Db: 33,
        Kc: 34,
        oc: 42,
        Kb: 43,
        vb: 44,
        Qb: 45,
        Rb: 46,
        Sb: 47,
        Yb: 48,
        Yc: 49,
        ic: 50,
        Pb: 51,
        Ab: 35,
        lc: 37,
        mb: 52,
        pb: 53,
        bd: 54,
        gc: 55,
        qb: 56,
        rb: 57,
        Bb: 35,
        sb: 59,
        uc: 60,
        jc: 61,
        Uc: 62,
        tc: 63,
        pc: 64,
        qc: 65,
        Mc: 66,
        mc: 67,
        jb: 68,
        Rc: 69,
        wb: 70,
        Hc: 71,
        ac: 72,
        Eb: 73,
        ob: 74,
        Bc: 76,
        nb: 77,
        Lc: 78,
        Tb: 79,
        Ub: 80,
        Xb: 81,
        Wb: 82,
        Vb: 83,
        vc: 38,
        ra: 39,
        bc: 36,
        aa: 40,
        Cc: 95,
        Fc: 96,
        zb: 104,
        hc: 105,
        kb: 97,
        Jc: 91,
        zc: 88,
        rc: 92,
        Oc: 108,
        yb: 111,
        hb: 98,
        xb: 103,
        ec: 101,
        cc: 100,
        Vc: 110,
        Ib: 112,
        Jb: 113,
        Mb: 115,
        lb: 114,
        Cb: 89,
        $b: 90,
        Ic: 93,
        Pc: 94,
        ib: 99,
        dc: 102,
        Ob: 106,
        xc: 107,
        Wc: 109,
        Zc: 87,
        Fb: 122,
        Sc: 116,
        Ac: 95,
        nc: 123,
        Lb: 84,
        Dc: 75,
        tb: 125,
        yc: 131,
        Ec: 130,
        Tc: 86,
      },
      hb = {
        0: "Success",
        1: "Not super-user",
        2: "No such file or directory",
        3: "No such process",
        4: "Interrupted system call",
        5: "I/O error",
        6: "No such device or address",
        7: "Arg list too long",
        8: "Exec format error",
        9: "Bad file number",
        10: "No children",
        11: "No more processes",
        12: "Not enough core",
        13: "Permission denied",
        14: "Bad address",
        15: "Block device required",
        16: "Mount device busy",
        17: "File exists",
        18: "Cross-device link",
        19: "No such device",
        20: "Not a directory",
        21: "Is a directory",
        22: "Invalid argument",
        23: "Too many open files in system",
        24: "Too many open files",
        25: "Not a typewriter",
        26: "Text file busy",
        27: "File too large",
        28: "No space left on device",
        29: "Illegal seek",
        30: "Read only file system",
        31: "Too many links",
        32: "Broken pipe",
        33: "Math arg out of domain of func",
        34: "Math result not representable",
        35: "File locking deadlock error",
        36: "File or path name too long",
        37: "No record locks available",
        38: "Function not implemented",
        39: "Directory not empty",
        40: "Too many symbolic links",
        42: "No message of desired type",
        43: "Identifier removed",
        44: "Channel number out of range",
        45: "Level 2 not synchronized",
        46: "Level 3 halted",
        47: "Level 3 reset",
        48: "Link number out of range",
        49: "Protocol driver not attached",
        50: "No CSI structure available",
        51: "Level 2 halted",
        52: "Invalid exchange",
        53: "Invalid request descriptor",
        54: "Exchange full",
        55: "No anode",
        56: "Invalid request code",
        57: "Invalid slot",
        59: "Bad font file fmt",
        60: "Device not a stream",
        61: "No data (for no delay io)",
        62: "Timer expired",
        63: "Out of streams resources",
        64: "Machine is not on the network",
        65: "Package not installed",
        66: "The object is remote",
        67: "The link has been severed",
        68: "Advertise error",
        69: "Srmount error",
        70: "Communication error on send",
        71: "Protocol error",
        72: "Multihop attempted",
        73: "Cross mount point (not really error)",
        74: "Trying to read unreadable message",
        75: "Value too large for defined data type",
        76: "Given log. name not unique",
        77: "f.d. invalid for this operation",
        78: "Remote address changed",
        79: "Can   access a needed shared lib",
        80: "Accessing a corrupted shared lib",
        81: ".lib section in a.out corrupted",
        82: "Attempting to link in too many libs",
        83: "Attempting to exec a shared library",
        84: "Illegal byte sequence",
        86: "Streams pipe error",
        87: "Too many users",
        88: "Socket operation on non-socket",
        89: "Destination address required",
        90: "Message too long",
        91: "Protocol wrong type for socket",
        92: "Protocol not available",
        93: "Unknown protocol",
        94: "Socket type not supported",
        95: "Not supported",
        96: "Protocol family not supported",
        97: "Address family not supported by protocol family",
        98: "Address already in use",
        99: "Address not available",
        100: "Network interface is not configured",
        101: "Network is unreachable",
        102: "Connection reset by network",
        103: "Connection aborted",
        104: "Connection reset by peer",
        105: "No buffer space available",
        106: "Socket is already connected",
        107: "Socket is not connected",
        108: "Can't send after socket shutdown",
        109: "Too many references",
        110: "Connection timed out",
        111: "Connection refused",
        112: "Host is down",
        113: "Host is unreachable",
        114: "Socket already connected",
        115: "Connection already in progress",
        116: "Stale file handle",
        122: "Quota exceeded",
        123: "No medium (in tape drive)",
        125: "Operation canceled",
        130: "Previous owner died",
        131: "State not recoverable",
      };
    function ib(t) {
      return (e.___errno_location && (F[e.___errno_location() >> 2] = t), t);
    }
    function jb(t, r) {
      for (var o = 0, i = t.length - 1; 0 <= i; i--) {
        var s = t[i];
        s === "."
          ? t.splice(i, 1)
          : s === ".."
            ? (t.splice(i, 1), o++)
            : o && (t.splice(i, 1), o--);
      }
      if (r) for (; o--; o) t.unshift("..");
      return t;
    }
    function N(t) {
      var r = t.charAt(0) === "/",
        o = t.substr(-1) === "/";
      return (
        (t = jb(
          t.split("/").filter(function (t) {
            return !!t;
          }),
          !r,
        ).join("/")) ||
          r ||
          (t = "."),
        t && o && (t += "/"),
        (r ? "/" : "") + t
      );
    }
    function kb(t) {
      var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
        .exec(t)
        .slice(1);
      return (
        (t = r[0]),
        (r = r[1]),
        !t && !r ? "." : (r && (r = r.substr(0, r.length - 1)), t + r)
      );
    }
    function lb(t) {
      if (t === "/") return "/";
      var r = t.lastIndexOf("/");
      return r === -1 ? t : t.substr(r + 1);
    }
    function mb() {
      for (var t = "", r = !1, o = arguments.length - 1; -1 <= o && !r; o--) {
        if (((r = 0 <= o ? arguments[o] : "/"), typeof r != "string"))
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!r) return "";
        ((t = r + "/" + t), (r = r.charAt(0) === "/"));
      }
      return (
        (t = jb(
          t.split("/").filter(function (t) {
            return !!t;
          }),
          !r,
        ).join("/")),
        (r ? "/" : "") + t || "."
      );
    }
    var nb = [];
    function ob(t, r) {
      ((nb[t] = { input: [], output: [], L: r }), pb(t, qb));
    }
    var qb = {
        open: function (t) {
          var r = nb[t.g.rdev];
          if (!r) throw new O(M.ba);
          ((t.tty = r), (t.seekable = !1));
        },
        close: function (t) {
          t.tty.L.flush(t.tty);
        },
        flush: function (t) {
          t.tty.L.flush(t.tty);
        },
        read: function (t, r, o, i) {
          if (!t.tty || !t.tty.L.Ba) throw new O(M.sa);
          for (var s = 0, _ = 0; _ < i; _++) {
            var g;
            try {
              g = t.tty.L.Ba(t.tty);
            } catch (t) {
              throw new O(M.F);
            }
            if (g === void 0 && s === 0) throw new O(M.oa);
            if (g == null) break;
            (s++, (r[o + _] = g));
          }
          return (s && (t.g.timestamp = Date.now()), s);
        },
        write: function (t, r, o, i) {
          if (!t.tty || !t.tty.L.ja) throw new O(M.sa);
          for (var s = 0; s < i; s++)
            try {
              t.tty.L.ja(t.tty, r[o + s]);
            } catch (t) {
              throw new O(M.F);
            }
          return (i && (t.g.timestamp = Date.now()), s);
        },
      },
      rb = {
        Ba: function (t) {
          if (!t.input.length) {
            var r = null;
            if (
              (typeof window != "undefined" &&
              typeof window.prompt == "function"
                ? ((r = window.prompt("Input: ")), r !== null && (r += "\n"))
                : typeof readline == "function" &&
                  ((r = readline()), r !== null && (r += "\n")),
              !r)
            )
              return null;
            t.input = Va(r, !0);
          }
          return t.input.shift();
        },
        ja: function (t, r) {
          r === null || r === 10
            ? (e.print(za(t.output, 0)), (t.output = []))
            : r != 0 && t.output.push(r);
        },
        flush: function (t) {
          t.output &&
            0 < t.output.length &&
            (e.print(za(t.output, 0)), (t.output = []));
        },
      },
      sb = {
        ja: function (t, r) {
          r === null || r === 10
            ? (e.printErr(za(t.output, 0)), (t.output = []))
            : r != 0 && t.output.push(r);
        },
        flush: function (t) {
          t.output &&
            0 < t.output.length &&
            (e.printErr(za(t.output, 0)), (t.output = []));
        },
      },
      P = {
        q: null,
        A: function () {
          return P.createNode(null, "/", 16895, 0);
        },
        createNode: function (t, r, o, i) {
          if ((o & 61440) === 24576 || (o & 61440) === 4096) throw new O(M.G);
          return (
            P.q ||
              (P.q = {
                dir: {
                  g: {
                    D: P.k.D,
                    p: P.k.p,
                    lookup: P.k.lookup,
                    V: P.k.V,
                    rename: P.k.rename,
                    unlink: P.k.unlink,
                    rmdir: P.k.rmdir,
                    readdir: P.k.readdir,
                    symlink: P.k.symlink,
                  },
                  stream: { I: P.n.I },
                },
                file: {
                  g: { D: P.k.D, p: P.k.p },
                  stream: {
                    I: P.n.I,
                    read: P.n.read,
                    write: P.n.write,
                    ta: P.n.ta,
                    Ea: P.n.Ea,
                    Ga: P.n.Ga,
                  },
                },
                link: {
                  g: { D: P.k.D, p: P.k.p, readlink: P.k.readlink },
                  stream: {},
                },
                va: { g: { D: P.k.D, p: P.k.p }, stream: tb },
              }),
            (o = ub(t, r, o, i)),
            (o.mode & 61440) === 16384
              ? ((o.k = P.q.dir.g), (o.n = P.q.dir.stream), (o.e = {}))
              : (o.mode & 61440) === 32768
                ? ((o.k = P.q.file.g),
                  (o.n = P.q.file.stream),
                  (o.o = 0),
                  (o.e = null))
                : (o.mode & 61440) === 40960
                  ? ((o.k = P.q.link.g), (o.n = P.q.link.stream))
                  : (o.mode & 61440) === 8192 &&
                    ((o.k = P.q.va.g), (o.n = P.q.va.stream)),
            (o.timestamp = Date.now()),
            t && (t.e[r] = o),
            o
          );
        },
        Sa: function (t) {
          if (t.e && t.e.subarray) {
            for (var r = [], o = 0; o < t.o; ++o) r.push(t.e[o]);
            return r;
          }
          return t.e;
        },
        qd: function (t) {
          return t.e
            ? t.e.subarray
              ? t.e.subarray(0, t.o)
              : new Uint8Array(t.e)
            : new Uint8Array();
        },
        ya: function (t, r) {
          if (
            (t.e &&
              t.e.subarray &&
              r > t.e.length &&
              ((t.e = P.Sa(t)), (t.o = t.e.length)),
            !t.e || t.e.subarray)
          ) {
            var o = t.e ? t.e.buffer.byteLength : 0;
            o >= r ||
              ((r = Math.max(r, (o * (1048576 > o ? 2 : 1.125)) | 0)),
              o != 0 && (r = Math.max(r, 256)),
              (o = t.e),
              (t.e = new Uint8Array(r)),
              0 < t.o && t.e.set(o.subarray(0, t.o), 0));
          } else
            for (!t.e && 0 < r && (t.e = []); t.e.length < r; ) t.e.push(0);
        },
        ab: function (t, r) {
          if (t.o != r)
            if (r == 0) ((t.e = null), (t.o = 0));
            else {
              if (!t.e || t.e.subarray) {
                var o = t.e;
                ((t.e = new Uint8Array(new ArrayBuffer(r))),
                  o && t.e.set(o.subarray(0, Math.min(r, t.o))));
              } else if ((t.e || (t.e = []), t.e.length > r)) t.e.length = r;
              else for (; t.e.length < r; ) t.e.push(0);
              t.o = r;
            }
        },
        k: {
          D: function (t) {
            var r = {};
            return (
              (r.dev = (t.mode & 61440) === 8192 ? t.id : 1),
              (r.ino = t.id),
              (r.mode = t.mode),
              (r.nlink = 1),
              (r.uid = 0),
              (r.gid = 0),
              (r.rdev = t.rdev),
              (t.mode & 61440) === 16384
                ? (r.size = 4096)
                : (t.mode & 61440) === 32768
                  ? (r.size = t.o)
                  : (t.mode & 61440) === 40960
                    ? (r.size = t.link.length)
                    : (r.size = 0),
              (r.atime = new Date(t.timestamp)),
              (r.mtime = new Date(t.timestamp)),
              (r.ctime = new Date(t.timestamp)),
              (r.Pa = 4096),
              (r.blocks = Math.ceil(r.size / r.Pa)),
              r
            );
          },
          p: function (t, r) {
            (r.mode !== void 0 && (t.mode = r.mode),
              r.timestamp !== void 0 && (t.timestamp = r.timestamp),
              r.size !== void 0 && P.ab(t, r.size));
          },
          lookup: function () {
            throw vb[M.B];
          },
          V: function (t, r, o, i) {
            return P.createNode(t, r, o, i);
          },
          rename: function (t, r, o) {
            if ((t.mode & 61440) === 16384) {
              var i;
              try {
                i = wb(r, o);
              } catch (t) {}
              if (i) for (var s in i.e) throw new O(M.ra);
            }
            (delete t.parent.e[t.name],
              (t.name = o),
              (r.e[o] = t),
              (t.parent = r));
          },
          unlink: function (t, r) {
            delete t.e[r];
          },
          rmdir: function (t, r) {
            var o = wb(t, r),
              i;
            for (i in o.e) throw new O(M.ra);
            delete t.e[r];
          },
          readdir: function (t) {
            var r = [".", ".."],
              o;
            for (o in t.e) t.e.hasOwnProperty(o) && r.push(o);
            return r;
          },
          symlink: function (t, r, o) {
            return ((t = P.createNode(t, r, 41471, 0)), (t.link = o), t);
          },
          readlink: function (t) {
            if ((t.mode & 61440) !== 40960) throw new O(M.u);
            return t.link;
          },
        },
        n: {
          read: function (t, r, o, i, s) {
            var _ = t.g.e;
            if (s >= t.g.o) return 0;
            if (
              ((t = Math.min(t.g.o - s, i)),
              assert(0 <= t),
              8 < t && _.subarray)
            )
              r.set(_.subarray(s, s + t), o);
            else for (i = 0; i < t; i++) r[o + i] = _[s + i];
            return t;
          },
          write: function (t, r, o, i, s, _) {
            if (!i) return 0;
            if (
              ((t = t.g),
              (t.timestamp = Date.now()),
              r.subarray && (!t.e || t.e.subarray))
            ) {
              if (_) return ((t.e = r.subarray(o, o + i)), (t.o = i));
              if (t.o === 0 && s === 0)
                return (
                  (t.e = new Uint8Array(r.subarray(o, o + i))),
                  (t.o = i)
                );
              if (s + i <= t.o) return (t.e.set(r.subarray(o, o + i), s), i);
            }
            if ((P.ya(t, s + i), t.e.subarray && r.subarray))
              t.e.set(r.subarray(o, o + i), s);
            else for (_ = 0; _ < i; _++) t.e[s + _] = r[o + _];
            return ((t.o = Math.max(t.o, s + i)), i);
          },
          I: function (t, r, o) {
            if (
              (o === 1
                ? (r += t.position)
                : o === 2 && (t.g.mode & 61440) === 32768 && (r += t.g.o),
              0 > r)
            )
              throw new O(M.u);
            return r;
          },
          ta: function (t, r, o) {
            (P.ya(t.g, r + o), (t.g.o = Math.max(t.g.o, r + o)));
          },
          Ea: function (t, r, o, i, s, _, g) {
            if ((t.g.mode & 61440) !== 32768) throw new O(M.ba);
            if (
              ((o = t.g.e), g & 2 || (o.buffer !== r && o.buffer !== r.buffer))
            ) {
              if (
                ((0 < s || s + i < t.g.o) &&
                  (o.subarray
                    ? (o = o.subarray(s, s + i))
                    : (o = Array.prototype.slice.call(o, s, s + i))),
                (t = !0),
                (i = ua(i)),
                !i)
              )
                throw new O(M.Ka);
              r.set(o, i);
            } else ((t = !1), (i = o.byteOffset));
            return { Cd: i, gd: t };
          },
          Ga: function (t, r, o, i, s) {
            if ((t.g.mode & 61440) !== 32768) throw new O(M.ba);
            return (s & 2 || P.n.write(t, r, 0, i, o, !1), 0);
          },
        },
      };
    (G(1, "i32*", 2), G(1, "i32*", 2), G(1, "i32*", 2));
    var xb = null,
      yb = [null],
      zb = [],
      Ab = 1,
      R = null,
      Cb = !0,
      S = {},
      O = null,
      vb = {};
    function T(t, r) {
      if (((t = mb("/", t)), (r = r || {}), !t)) return { path: "", g: null };
      var i = { za: !0, ka: 0 },
        o;
      for (o in i) r[o] === void 0 && (r[o] = i[o]);
      if (8 < r.ka) throw new O(M.aa);
      var i = jb(
          t.split("/").filter(function (t) {
            return !!t;
          }),
          !1,
        ),
        s = xb;
      o = "/";
      for (var _ = 0; _ < i.length; _++) {
        var g = _ === i.length - 1;
        if (g && r.parent) break;
        if (
          ((s = wb(s, i[_])),
          (o = N(o + "/" + i[_])),
          s.R && (!g || (g && r.za)) && (s = s.R.root),
          !g || r.ga)
        ) {
          for (g = 0; (s.mode & 61440) === 40960; )
            if (
              ((s = Db(o)),
              (o = mb(kb(o), s)),
              (s = T(o, { ka: r.ka }).g),
              40 < g++)
            )
              throw new O(M.aa);
        }
      }
      return { path: o, g: s };
    }
    function U(t) {
      for (var r; ; ) {
        if (t === t.parent)
          return (
            (t = t.A.Fa),
            r ? (t[t.length - 1] !== "/" ? t + "/" + r : t + r) : t
          );
        ((r = r ? t.name + "/" + r : t.name), (t = t.parent));
      }
    }
    function Eb(t, r) {
      for (var o = 0, i = 0; i < r.length; i++)
        o = ((o << 5) - o + r.charCodeAt(i)) | 0;
      return ((t + o) >>> 0) % R.length;
    }
    function Fb(t) {
      var r = Eb(t.parent.id, t.name);
      ((t.K = R[r]), (R[r] = t));
    }
    function wb(t, r) {
      var o;
      if ((o = (o = Gb(t, "x")) ? o : t.k.lookup ? 0 : M.Y)) throw new O(o, t);
      for (o = R[Eb(t.id, r)]; o; o = o.K) {
        var i = o.name;
        if (o.parent.id === t.id && i === r) return o;
      }
      return t.k.lookup(t, r);
    }
    function ub(t, r, o, i) {
      return (
        Hb ||
          ((Hb = function (t, r, o, i) {
            (t || (t = this),
              (this.parent = t),
              (this.A = t.A),
              (this.R = null),
              (this.id = Ab++),
              (this.name = r),
              (this.mode = o),
              (this.k = {}),
              (this.n = {}),
              (this.rdev = i));
          }),
          (Hb.prototype = {}),
          Object.defineProperties(Hb.prototype, {
            read: {
              get: function () {
                return (this.mode & 365) === 365;
              },
              set: function (t) {
                t ? (this.mode |= 365) : (this.mode &= -366);
              },
            },
            write: {
              get: function () {
                return (this.mode & 146) === 146;
              },
              set: function (t) {
                t ? (this.mode |= 146) : (this.mode &= -147);
              },
            },
            Xa: {
              get: function () {
                return (this.mode & 61440) === 16384;
              },
            },
            Ca: {
              get: function () {
                return (this.mode & 61440) === 8192;
              },
            },
          })),
        (t = new Hb(t, r, o, i)),
        Fb(t),
        t
      );
    }
    var Ib = {
      r: 0,
      rs: 1052672,
      "r+": 2,
      w: 577,
      wx: 705,
      xw: 705,
      "w+": 578,
      "wx+": 706,
      "xw+": 706,
      a: 1089,
      ax: 1217,
      xa: 1217,
      "a+": 1090,
      "ax+": 1218,
      "xa+": 1218,
    };
    function Gb(t, r) {
      if (Cb) return 0;
      if (r.indexOf("r") === -1 || t.mode & 292) {
        if (
          (r.indexOf("w") !== -1 && !(t.mode & 146)) ||
          (r.indexOf("x") !== -1 && !(t.mode & 73))
        )
          return M.Y;
      } else return M.Y;
      return 0;
    }
    function Jb(t, r) {
      try {
        return (wb(t, r), M.pa);
      } catch (t) {}
      return Gb(t, "wx");
    }
    function Kb() {
      var t;
      t = 4096;
      for (var r = 0; r <= t; r++) if (!zb[r]) return r;
      throw new O(M.Ja);
    }
    function Lb(t) {
      Mb ||
        ((Mb = function () {}),
        (Mb.prototype = {}),
        Object.defineProperties(Mb.prototype, {
          object: {
            get: function () {
              return this.g;
            },
            set: function (t) {
              this.g = t;
            },
          },
          vd: {
            get: function () {
              return (this.flags & 2097155) !== 1;
            },
          },
          wd: {
            get: function () {
              return (this.flags & 2097155) !== 0;
            },
          },
          ud: {
            get: function () {
              return this.flags & 1024;
            },
          },
        }));
      var r = new Mb(),
        o;
      for (o in t) r[o] = t[o];
      return ((t = r), (r = Kb()), (t.fd = r), (zb[r] = t));
    }
    var tb = {
      open: function (t) {
        ((t.n = yb[t.g.rdev].n), t.n.open && t.n.open(t));
      },
      I: function () {
        throw new O(M.da);
      },
    };
    function pb(t, r) {
      yb[t] = { n: r };
    }
    function Nb(t, r) {
      var o = r === "/",
        s = !r,
        i;
      if (o && xb) throw new O(M.$);
      if (!o && !s) {
        if (((i = T(r, { za: !1 })), (r = i.path), (i = i.g), i.R))
          throw new O(M.$);
        if ((i.mode & 61440) !== 16384) throw new O(M.qa);
      }
      var s = { type: t, Ad: {}, Fa: r, Ya: [] },
        _ = t.A(s);
      ((_.A = s),
        (s.root = _),
        o ? (xb = _) : i && ((i.R = s), i.A && i.A.Ya.push(s)));
    }
    function Ob(t, r, o) {
      var i = T(t, { parent: !0 }).g;
      if (((t = lb(t)), !t || t === "." || t === "..")) throw new O(M.u);
      var s = Jb(i, t);
      if (s) throw new O(s);
      if (!i.k.V) throw new O(M.G);
      return i.k.V(i, t, r, o);
    }
    function Pb(t, r) {
      return ((r = (r !== void 0 ? r : 438) & 4095), (r |= 32768), Ob(t, r, 0));
    }
    function V(t, r) {
      return ((r = (r !== void 0 ? r : 511) & 1023), (r |= 16384), Ob(t, r, 0));
    }
    function Qb(t, r, o) {
      return (
        typeof o == "undefined" && ((o = r), (r = 438)),
        Ob(t, r | 8192, o)
      );
    }
    function Rb(t, r) {
      if (!mb(t)) throw new O(M.B);
      var o = T(r, { parent: !0 }).g;
      if (!o) throw new O(M.B);
      var i = lb(r),
        s = Jb(o, i);
      if (s) throw new O(s);
      if (!o.k.symlink) throw new O(M.G);
      return o.k.symlink(o, i, t);
    }
    function Db(t) {
      if (((t = T(t).g), !t)) throw new O(M.B);
      if (!t.k.readlink) throw new O(M.u);
      return mb(U(t.parent), t.k.readlink(t));
    }
    function Sb(t, r) {
      var o;
      if ((typeof t == "string" ? (o = T(t, { ga: !0 }).g) : (o = t), !o.k.p))
        throw new O(M.G);
      o.k.p(o, { mode: (r & 4095) | (o.mode & -4096), timestamp: Date.now() });
    }
    function Tb(t, r) {
      var o;
      if (t === "") throw new O(M.B);
      var i;
      if (typeof r == "string") {
        if (((i = Ib[r]), typeof i == "undefined"))
          throw Error("Unknown file open mode: " + r);
      } else i = r;
      ((r = i),
        (o =
          r & 64 ? ((typeof o == "undefined" ? 438 : o) & 4095) | 32768 : 0));
      var s;
      if (typeof t == "object") s = t;
      else {
        t = N(t);
        try {
          s = T(t, { ga: !(r & 131072) }).g;
        } catch (t) {}
      }
      if (((i = !1), r & 64))
        if (s) {
          if (r & 128) throw new O(M.pa);
        } else ((s = Ob(t, o, 0)), (i = !0));
      if (!s) throw new O(M.B);
      if (
        ((s.mode & 61440) === 8192 && (r &= -513),
        r & 65536 && (s.mode & 61440) !== 16384)
      )
        throw new O(M.qa);
      if (
        !i &&
        (s
          ? (s.mode & 61440) === 40960
            ? (o = M.aa)
            : (s.mode & 61440) === 16384 && ((r & 2097155) !== 0 || r & 512)
              ? (o = M.N)
              : ((o = ["r", "w", "rw"][r & 3]),
                r & 512 && (o += "w"),
                (o = Gb(s, o)))
          : (o = M.B),
        o)
      )
        throw new O(o);
      if (r & 512) {
        o = s;
        var _;
        if ((typeof o == "string" ? (_ = T(o, { ga: !0 }).g) : (_ = o), !_.k.p))
          throw new O(M.G);
        if ((_.mode & 61440) === 16384) throw new O(M.N);
        if ((_.mode & 61440) !== 32768) throw new O(M.u);
        if ((o = Gb(_, "w"))) throw new O(o);
        _.k.p(_, { size: 0, timestamp: Date.now() });
      }
      ((r &= -641),
        (s = Lb({
          g: s,
          path: U(s),
          flags: r,
          seekable: !0,
          position: 0,
          n: s.n,
          eb: [],
          error: !1,
        })),
        s.n.open && s.n.open(s),
        !e.logReadFiles ||
          r & 1 ||
          (Ub || (Ub = {}),
          t in Ub || ((Ub[t] = 1), e.printErr("read file: " + t))));
      try {
        S.onOpenFile &&
          ((_ = 0),
          (r & 2097155) !== 1 && (_ |= 1),
          (r & 2097155) !== 0 && (_ |= 2),
          S.onOpenFile(t, _));
      } catch (r) {
        "" + t + r.message;
      }
      return s;
    }
    function Vb(t) {
      t.ia && (t.ia = null);
      try {
        t.n.close && t.n.close(t);
      } catch (t) {
        throw t;
      } finally {
        zb[t.fd] = null;
      }
    }
    function Wb(t, r, o) {
      if (!t.seekable || !t.n.I) throw new O(M.da);
      ((t.position = t.n.I(t, r, o)), (t.eb = []));
    }
    function Xb(t, r, o, i, s, _) {
      if (0 > i || 0 > s) throw new O(M.u);
      if ((t.flags & 2097155) === 0) throw new O(M.Z);
      if ((t.g.mode & 61440) === 16384) throw new O(M.N);
      if (!t.n.write) throw new O(M.u);
      t.flags & 1024 && Wb(t, 0, 2);
      var g = !0;
      if (typeof s == "undefined") ((s = t.position), (g = !1));
      else if (!t.seekable) throw new O(M.da);
      ((r = t.n.write(t, r, o, i, s, _)), g || (t.position += r));
      try {
        t.path && S.onWriteToFile && S.onWriteToFile(t.path);
      } catch (t) {
        "" + path + t.message;
      }
      return r;
    }
    function Yb() {
      O ||
        ((O = function (t, r) {
          ((this.g = r),
            (this.bb = function (t) {
              this.Q = t;
              for (var r in M)
                if (M[r] === t) {
                  this.code = r;
                  break;
                }
            }),
            this.bb(t),
            (this.message = hb[t]));
        }),
        (O.prototype = Error()),
        (O.prototype.constructor = O),
        [M.B].forEach(function (t) {
          ((vb[t] = new O(t)), (vb[t].stack = "<generic error, no stack>"));
        }));
    }
    var Zb;
    function $b(t, r) {
      var o = 0;
      return (t && (o |= 365), r && (o |= 146), o);
    }
    function ac(t, r, o, i) {
      return (
        (t = N((typeof t == "string" ? t : U(t)) + "/" + r)),
        Pb(t, $b(o, i))
      );
    }
    function bc(t, r, o, i, s, _) {
      if (
        ((t = r ? N((typeof t == "string" ? t : U(t)) + "/" + r) : t),
        (i = $b(i, s)),
        (s = Pb(t, i)),
        o)
      ) {
        if (typeof o == "string") {
          ((t = Array(o.length)), (r = 0));
          for (var g = o.length; r < g; ++r) t[r] = o.charCodeAt(r);
          o = t;
        }
        (Sb(s, i | 146),
          (t = Tb(s, "w")),
          Xb(t, o, 0, o.length, 0, _),
          Vb(t),
          Sb(s, i));
      }
      return s;
    }
    function W(t, r, o, i) {
      ((t = N((typeof t == "string" ? t : U(t)) + "/" + r)),
        (r = $b(!!o, !!i)),
        W.Da || (W.Da = 64));
      var s = (W.Da++ << 8) | 0;
      return (
        pb(s, {
          open: function (t) {
            t.seekable = !1;
          },
          close: function () {
            i && i.buffer && i.buffer.length && i(10);
          },
          read: function (t, r, i, s) {
            for (var _ = 0, g = 0; g < s; g++) {
              var C;
              try {
                C = o();
              } catch (t) {
                throw new O(M.F);
              }
              if (C === void 0 && _ === 0) throw new O(M.oa);
              if (C == null) break;
              (_++, (r[i + g] = C));
            }
            return (_ && (t.g.timestamp = Date.now()), _);
          },
          write: function (t, r, o, s) {
            for (var _ = 0; _ < s; _++)
              try {
                i(r[o + _]);
              } catch (t) {
                throw new O(M.F);
              }
            return (s && (t.g.timestamp = Date.now()), _);
          },
        }),
        Qb(t, r, s)
      );
    }
    function cc(t) {
      if (t.Ca || t.Xa || t.link || t.e) return !0;
      var r = !0;
      if (typeof XMLHttpRequest != "undefined")
        throw Error(
          "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
        );
      if (e.read)
        try {
          ((t.e = Va(e.read(t.url), !0)), (t.o = t.e.length));
        } catch (t) {
          r = !1;
        }
      else throw Error("Cannot load without read() or XMLHttpRequest.");
      return (r || ib(M.F), r);
    }
    var dc = {},
      Hb,
      Mb,
      Ub,
      ec = 0;
    function X() {
      return ((ec += 4), F[(ec - 4) >> 2]);
    }
    function fc() {
      var t;
      if (((t = X()), (t = zb[t]), !t)) throw new O(M.Z);
      return t;
    }
    function wa(t) {
      wa.C ||
        ((v = Ga()),
        (wa.C = !0),
        assert(n.P),
        (wa.Ra = n.P),
        (n.P = function () {
          z("cannot dynamically allocate, sbrk now has control");
        }));
      var r = v;
      return t == 0 || wa.Ra(t) ? r : 4294967295;
    }
    e._memcpy = gc;
    function hc(t, r) {
      if (((ic = t), (jc = r), !kc)) return 1;
      if (t == 0)
        ((Y = function () {
          setTimeout(lc, r);
        }),
          (mc = "timeout"));
      else if (t == 1)
        ((Y = function () {
          nc(lc);
        }),
          (mc = "rAF"));
      else if (t == 2) {
        if (!window.setImmediate) {
          var o = [];
          (window.addEventListener(
            "message",
            function (t) {
              t.source === window &&
                t.data === "__emcc" &&
                (t.stopPropagation(), o.shift()());
            },
            !0,
          ),
            (window.setImmediate = function (t) {
              (o.push(t), window.postMessage("__emcc", "*"));
            }));
        }
        ((Y = function () {
          window.setImmediate(lc);
        }),
          (mc = "immediate"));
      }
      return 0;
    }
    function oc(t, r, o, i, s) {
      ((e.noExitRuntime = !0),
        assert(
          !kc,
          "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.",
        ),
        (kc = t),
        (pc = i));
      var _ = qc;
      if (
        ((lc = function () {
          if (!A)
            if (0 < rc.length) {
              var r = Date.now(),
                o = rc.shift();
              if ((o.Qa(o.T), sc)) {
                var s = sc,
                  g = s % 1 == 0 ? s - 1 : Math.floor(s);
                sc = o.ld ? g : (8 * s + (g + 0.5)) / 9;
              }
              ("" + o.name + (Date.now() - r), tc(), setTimeout(lc, 0));
            } else
              _ < qc ||
                ((uc = (uc + 1) | 0),
                ic == 1 && 1 < jc && uc % jc != 0
                  ? Y()
                  : (mc === "timeout" &&
                      e.fa &&
                      (e.S(
                        "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!",
                      ),
                      (mc = "")),
                    vc(function () {
                      typeof i != "undefined" ? n.J("vi", t, [i]) : n.J("v", t);
                    }),
                    _ < qc ||
                      (typeof SDL == "object" &&
                        SDL.audio &&
                        SDL.audio.Za &&
                        SDL.audio.Za(),
                      Y())));
        }),
        s || (r && 0 < r ? hc(0, 1e3 / r) : hc(1, 1), Y()),
        o)
      )
        throw "SimulateInfiniteLoop";
    }
    var Y = null,
      mc = "",
      qc = 0,
      kc = null,
      pc = 0,
      ic = 0,
      jc = 0,
      uc = 0,
      rc = [];
    function tc() {
      if (e.setStatus) {
        var t = e.statusMessage || "Please wait...",
          r = sc,
          o = wc.nd;
        r
          ? r < o
            ? e.setStatus(t + " (" + (o - r) + "/" + o + ")")
            : e.setStatus(t)
          : e.setStatus("");
      }
    }
    function vc(t) {
      if (!(A || (e.preMainLoop && e.preMainLoop() === !1))) {
        try {
          t();
        } catch (t) {
          if (t instanceof xc) return;
          throw (
            t &&
              typeof t == "object" &&
              t.stack &&
              e.S("exception thrown: " + [t, t.stack]),
            t
          );
        }
        e.postMainLoop && e.postMainLoop();
      }
    }
    var wc = {},
      lc,
      sc,
      yc = !1,
      zc = !1,
      Ac = [];
    function Bc() {
      function t() {
        zc =
          document.pointerLockElement === r ||
          document.mozPointerLockElement === r ||
          document.webkitPointerLockElement === r ||
          document.msPointerLockElement === r;
      }
      if ((e.preloadPlugins || (e.preloadPlugins = []), !Cc)) {
        Cc = !0;
        try {
          Dc = !0;
        } catch (t) {
          Dc = !1;
        }
        ((Ec =
          typeof MozBlobBuilder != "undefined"
            ? MozBlobBuilder
            : typeof WebKitBlobBuilder != "undefined"
              ? WebKitBlobBuilder
              : Dc
                ? null
                : console.log("warning: no BlobBuilder")),
          (Fc =
            typeof window != "undefined"
              ? window.URL
                ? window.URL
                : window.webkitURL
              : void 0),
          e.Ha || typeof Fc != "undefined" || (e.Ha = !0),
          e.preloadPlugins.push({
            canHandle: function (t) {
              return !e.Ha && /\.(jpg|jpeg|png|bmp)$/i.test(t);
            },
            handle: function (t, r, o, i) {
              var s = null;
              if (Dc)
                try {
                  ((s = new Blob([t], { type: Gc(r) })),
                    s.size !== t.length &&
                      (s = new Blob([new Uint8Array(t).buffer], {
                        type: Gc(r),
                      })));
                } catch (t) {
                  n.M(
                    "Blob constructor present but fails: " +
                      t +
                      "; falling back to blob builder",
                  );
                }
              s ||
                ((s = new Ec()),
                s.append(new Uint8Array(t).buffer),
                (s = s.getBlob()));
              var _ = Fc.createObjectURL(s),
                g = new Image();
              ((g.onload = function () {
                assert(g.complete, "Image " + r + " could not be decoded");
                var i = document.createElement("canvas");
                ((i.width = g.width),
                  (i.height = g.height),
                  i.getContext("2d").drawImage(g, 0, 0),
                  (e.preloadedImages[r] = i),
                  Fc.revokeObjectURL(_),
                  o && o(t));
              }),
                (g.onerror = function () {
                  ("" + _, i && i());
                }),
                (g.src = _));
            },
          }),
          e.preloadPlugins.push({
            canHandle: function (t) {
              return (
                !e.zd && t.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
              );
            },
            handle: function (t, r, o, i) {
              function s(i) {
                g || ((g = !0), (e.preloadedAudios[r] = i), o && o(t));
              }
              function _() {
                g || ((g = !0), (e.preloadedAudios[r] = new Audio()), i && i());
              }
              var g = !1;
              if (Dc) {
                try {
                  var C = new Blob([t], { type: Gc(r) });
                } catch (t) {
                  return _();
                }
                var C = Fc.createObjectURL(C),
                  k = new Audio();
                (k.addEventListener(
                  "canplaythrough",
                  function () {
                    s(k);
                  },
                  !1,
                ),
                  (k.onerror = function () {
                    if (!g) {
                      "" + r;
                      for (var o = "", i = 0, _ = 0, C = 0; C < t.length; C++)
                        for (i = (i << 8) | t[C], _ += 8; 6 <= _; )
                          var x = (i >> (_ - 6)) & 63,
                            _ = _ - 6,
                            o =
                              o +
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                x
                              ];
                      (_ == 2
                        ? ((o +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                              (i & 3) << 4
                            ]),
                          (o += "=="))
                        : _ == 4 &&
                          ((o +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                              (i & 15) << 2
                            ]),
                          (o += "=")),
                        (k.src =
                          "data:audio/x-" + r.substr(-3) + ";base64," + o),
                        s(k));
                    }
                  }),
                  (k.src = C),
                  Hc(function () {
                    s(k);
                  }));
              } else return _();
            },
          }));
        var r = e.canvas;
        r &&
          ((r.la =
            r.requestPointerLock ||
            r.mozRequestPointerLock ||
            r.webkitRequestPointerLock ||
            r.msRequestPointerLock ||
            function () {}),
          (r.wa =
            document.exitPointerLock ||
            document.mozExitPointerLock ||
            document.webkitExitPointerLock ||
            document.msExitPointerLock ||
            function () {}),
          (r.wa = r.wa.bind(document)),
          document.addEventListener("pointerlockchange", t, !1),
          document.addEventListener("mozpointerlockchange", t, !1),
          document.addEventListener("webkitpointerlockchange", t, !1),
          document.addEventListener("mspointerlockchange", t, !1),
          e.elementPointerLock &&
            r.addEventListener(
              "click",
              function (t) {
                !zc && r.la && (r.la(), t.preventDefault());
              },
              !1,
            ));
      }
    }
    function Ic(t, r, o, i) {
      if (r && e.fa && t == e.canvas) return e.fa;
      var s, _;
      if (r) {
        if (((_ = { antialias: !1, alpha: !1 }), i))
          for (var g in i) _[g] = i[g];
        ((_ = GL.createContext(t, _)) && (s = GL.getContext(_).cd),
          (t.style.backgroundColor = "black"));
      } else s = t.getContext("2d");
      return s
        ? (o &&
            (r ||
              assert(
                typeof GLctx == "undefined",
                "cannot set in module if GLctx is used, but we are a non-GL context that would replace it",
              ),
            (e.fa = s),
            r && GL.yd(_),
            (e.Dd = r),
            Ac.forEach(function (t) {
              t();
            }),
            Bc()),
          s)
        : null;
    }
    var Jc = !1,
      Kc = void 0,
      Lc = void 0;
    function Mc(t, r, o) {
      function i() {
        yc = !1;
        var t = s.parentNode;
        ((document.webkitFullScreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.mozFullscreenElement ||
          document.fullScreenElement ||
          document.fullscreenElement ||
          document.msFullScreenElement ||
          document.msFullscreenElement ||
          document.webkitCurrentFullScreenElement) === t
          ? ((s.ua =
              document.cancelFullScreen ||
              document.mozCancelFullScreen ||
              document.webkitCancelFullScreen ||
              document.msExitFullscreen ||
              document.exitFullscreen ||
              function () {}),
            (s.ua = s.ua.bind(document)),
            Kc && s.la(),
            (yc = !0),
            Lc && Nc())
          : (t.parentNode.insertBefore(s, t),
            t.parentNode.removeChild(t),
            Lc && Oc()),
          e.onFullScreen && e.onFullScreen(yc),
          Pc(s));
      }
      ((Kc = t),
        (Lc = r),
        (Qc = o),
        typeof Kc == "undefined" && (Kc = !0),
        typeof Lc == "undefined" && (Lc = !1),
        typeof Qc == "undefined" && (Qc = null));
      var s = e.canvas;
      Jc ||
        ((Jc = !0),
        document.addEventListener("fullscreenchange", i, !1),
        document.addEventListener("mozfullscreenchange", i, !1),
        document.addEventListener("webkitfullscreenchange", i, !1),
        document.addEventListener("MSFullscreenChange", i, !1));
      var _ = document.createElement("div");
      (s.parentNode.insertBefore(_, s),
        _.appendChild(s),
        (_.C =
          _.requestFullScreen ||
          _.mozRequestFullScreen ||
          _.msRequestFullscreen ||
          (_.webkitRequestFullScreen
            ? function () {
                _.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            : null)),
        o ? _.C({ Ed: o }) : _.C());
    }
    var Rc = 0;
    function Sc(t) {
      var r = Date.now();
      if (Rc === 0) Rc = r + 1e3 / 60;
      else for (; r + 2 >= Rc; ) Rc += 1e3 / 60;
      ((r = Math.max(Rc - r, 0)), setTimeout(t, r));
    }
    function nc(t) {
      typeof window == "undefined"
        ? Sc(t)
        : (window.requestAnimationFrame ||
            (window.requestAnimationFrame =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              Sc),
          window.requestAnimationFrame(t));
    }
    function Hc(t) {
      ((e.noExitRuntime = !0),
        setTimeout(function () {
          A || t();
        }, 1e4));
    }
    function Gc(t) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg",
      }[t.substr(t.lastIndexOf(".") + 1)];
    }
    function Tc(t, r, o) {
      var i = new XMLHttpRequest();
      (i.open("GET", t, !0),
        (i.responseType = "arraybuffer"),
        (i.onload = function () {
          i.status == 200 || (i.status == 0 && i.response)
            ? r(i.response)
            : o();
        }),
        (i.onerror = o),
        i.send(null));
    }
    function Uc(t, r, o) {
      (Tc(
        t,
        function (o) {
          (assert(o, 'Loading data file "' + t + '" failed (no arrayBuffer).'),
            r(new Uint8Array(o)),
            Za());
        },
        function () {
          if (o) o();
          else throw 'Loading data file "' + t + '" failed.';
        },
      ),
        Ya());
    }
    var Vc = [];
    function Wc() {
      var t = e.canvas;
      Vc.forEach(function (r) {
        r(t.width, t.height);
      });
    }
    function Nc() {
      if (typeof SDL != "undefined") {
        var t = Ia[(SDL.screen + 0 * n.H) >> 2];
        F[(SDL.screen + 0 * n.H) >> 2] = t | 8388608;
      }
      Wc();
    }
    function Oc() {
      if (typeof SDL != "undefined") {
        var t = Ia[(SDL.screen + 0 * n.H) >> 2];
        F[(SDL.screen + 0 * n.H) >> 2] = t & -8388609;
      }
      Wc();
    }
    function Pc(t, r, o) {
      r && o ? ((t.fb = r), (t.Va = o)) : ((r = t.fb), (o = t.Va));
      var s = r,
        _ = o;
      if (
        (e.forcedAspectRatio &&
          0 < e.forcedAspectRatio &&
          (s / _ < e.forcedAspectRatio
            ? (s = Math.round(_ * e.forcedAspectRatio))
            : (_ = Math.round(s / e.forcedAspectRatio))),
        (document.webkitFullScreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.mozFullscreenElement ||
          document.fullScreenElement ||
          document.fullscreenElement ||
          document.msFullScreenElement ||
          document.msFullscreenElement ||
          document.webkitCurrentFullScreenElement) === t.parentNode &&
          typeof screen != "undefined")
      )
        var i = Math.min(screen.width / s, screen.height / _),
          s = Math.round(s * i),
          _ = Math.round(_ * i);
      Lc
        ? (t.width != s && (t.width = s),
          t.height != _ && (t.height = _),
          typeof t.style != "undefined" &&
            (t.style.removeProperty("width"), t.style.removeProperty("height")))
        : (t.width != r && (t.width = r),
          t.height != o && (t.height = o),
          typeof t.style != "undefined" &&
            (s != r || _ != o
              ? (t.style.setProperty("width", s + "px", "important"),
                t.style.setProperty("height", _ + "px", "important"))
              : (t.style.removeProperty("width"),
                t.style.removeProperty("height"))));
    }
    var Cc, Dc, Ec, Fc, Qc;
    (Yb(),
      (R = Array(4096)),
      Nb(P, "/"),
      V("/tmp"),
      V("/home"),
      V("/home/web_user"),
      (function () {
        (V("/dev"),
          pb(259, {
            read: function () {
              return 0;
            },
            write: function (t, r, o, i) {
              return i;
            },
          }),
          Qb("/dev/null", 259),
          ob(1280, rb),
          ob(1536, sb),
          Qb("/dev/tty", 1280),
          Qb("/dev/tty1", 1536));
        var t;
        if (typeof crypto != "undefined") {
          var r = new Uint8Array(1);
          t = function () {
            return (crypto.getRandomValues(r), r[0]);
          };
        } else
          t = function () {
            return (256 * Math.random()) | 0;
          };
        (W("/dev", "random", t),
          W("/dev", "urandom", t),
          V("/dev/shm"),
          V("/dev/shm/tmp"));
      })(),
      V("/proc"),
      V("/proc/self"),
      V("/proc/self/fd"),
      Nb(
        {
          A: function () {
            var t = ub("/proc/self", "fd", 16895, 73);
            return (
              (t.k = {
                lookup: function (t, r) {
                  var o = zb[+r];
                  if (!o) throw new O(M.Z);
                  var i = {
                    parent: null,
                    A: { Fa: "fake" },
                    k: {
                      readlink: function () {
                        return o.path;
                      },
                    },
                  };
                  return (i.parent = i);
                },
              }),
              t
            );
          },
        },
        "/proc/self/fd",
      ),
      Qa.unshift(function () {
        if (!e.noFSInit && !Zb) {
          (assert(
            !Zb,
            "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
          ),
            (Zb = !0),
            Yb(),
            (e.stdin = e.stdin),
            (e.stdout = e.stdout),
            (e.stderr = e.stderr),
            e.stdin
              ? W("/dev", "stdin", e.stdin)
              : Rb("/dev/tty", "/dev/stdin"),
            e.stdout
              ? W("/dev", "stdout", null, e.stdout)
              : Rb("/dev/tty", "/dev/stdout"),
            e.stderr
              ? W("/dev", "stderr", null, e.stderr)
              : Rb("/dev/tty1", "/dev/stderr"));
          var t = Tb("/dev/stdin", "r");
          (assert(t.fd === 0, "invalid handle for stdin (" + t.fd + ")"),
            (t = Tb("/dev/stdout", "w")),
            assert(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"),
            (t = Tb("/dev/stderr", "w")),
            assert(t.fd === 2, "invalid handle for stderr (" + t.fd + ")"));
        }
      }),
      Ra.push(function () {
        Cb = !1;
      }),
      K.push(function () {
        Zb = !1;
        var t = e._fflush;
        for (t && t(0), t = 0; t < zb.length; t++) {
          var r = zb[t];
          r && Vb(r);
        }
      }),
      (e.FS_createFolder = function (t, r, o, i) {
        return (
          (t = N((typeof t == "string" ? t : U(t)) + "/" + r)),
          V(t, $b(o, i))
        );
      }),
      (e.FS_createPath = function (t, r) {
        t = typeof t == "string" ? t : U(t);
        for (var o = r.split("/").reverse(); o.length; ) {
          var i = o.pop();
          if (i) {
            var s = N(t + "/" + i);
            try {
              V(s);
            } catch (t) {}
            t = s;
          }
        }
        return s;
      }),
      (e.FS_createDataFile = bc),
      (e.FS_createPreloadedFile = function (t, r, o, i, s, _, g, C, k, x) {
        function $(o) {
          function $(o) {
            (x && x(), C || bc(t, r, o, i, s, k), _ && _(), Za());
          }
          var Q = !1;
          (e.preloadPlugins.forEach(function (t) {
            !Q &&
              t.canHandle(j) &&
              (t.handle(o, j, $, function () {
                (g && g(), Za());
              }),
              (Q = !0));
          }),
            Q || $(o));
        }
        Bc();
        var j = r ? mb(N(t + "/" + r)) : t;
        (Ya(),
          typeof o == "string"
            ? Uc(
                o,
                function (t) {
                  $(t);
                },
                g,
              )
            : $(o));
      }),
      (e.FS_createLazyFile = function (t, r, o, i, s) {
        if (typeof XMLHttpRequest != "undefined")
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        o = { Ca: !1, url: o };
        var _ = ac(t, r, i, s);
        (o.e ? (_.e = o.e) : o.url && ((_.e = null), (_.url = o.url)),
          Object.defineProperty(_, "usedBytes", {
            get: function () {
              return this.e.length;
            },
          }));
        var g = {};
        return (
          Object.keys(_.n).forEach(function (t) {
            var r = _.n[t];
            g[t] = function () {
              if (!cc(_)) throw new O(M.F);
              return r.apply(null, arguments);
            };
          }),
          (g.read = function (t, r, o, i, s) {
            if (!cc(_)) throw new O(M.F);
            if (((t = t.g.e), s >= t.length)) return 0;
            if (((i = Math.min(t.length - s, i)), assert(0 <= i), t.slice))
              for (var g = 0; g < i; g++) r[o + g] = t[s + g];
            else for (g = 0; g < i; g++) r[o + g] = t.get(s + g);
            return i;
          }),
          (_.n = g),
          _
        );
      }),
      (e.FS_createLink = function (t, r, o) {
        return ((t = N((typeof t == "string" ? t : U(t)) + "/" + r)), Rb(o, t));
      }),
      (e.FS_createDevice = W),
      (e.FS_unlink = function (t) {
        var r = T(t, { parent: !0 }).g,
          o = lb(t),
          i = wb(r, o),
          s;
        e: {
          try {
            s = wb(r, o);
          } catch (r) {
            s = r.Q;
            break e;
          }
          var _ = Gb(r, "wx");
          s = _ || ((s.mode & 61440) === 16384 ? M.N : 0);
        }
        if (s) throw (s === M.N && (s = M.G), new O(s));
        if (!r.k.unlink) throw new O(M.G);
        if (i.R) throw new O(M.$);
        try {
          S.willDeletePath && S.willDeletePath(t);
        } catch (r) {
          "" + t + r.message;
        }
        if ((r.k.unlink(r, o), (r = Eb(i.parent.id, i.name)), R[r] === i))
          R[r] = i.K;
        else
          for (r = R[r]; r; ) {
            if (r.K === i) {
              r.K = i.K;
              break;
            }
            r = r.K;
          }
        try {
          S.onDeletePath && S.onDeletePath(t);
        } catch (r) {
          "" + t + r.message;
        }
      }),
      Qa.unshift(function () {}),
      K.push(function () {}),
      (e.requestFullScreen = function (t, r, o) {
        Mc(t, r, o);
      }),
      (e.requestAnimationFrame = function (t) {
        nc(t);
      }),
      (e.setCanvasSize = function (t, r, o) {
        (Pc(e.canvas, t, r), o || Wc());
      }),
      (e.pauseMainLoop = function () {
        ((Y = null), qc++);
      }),
      (e.resumeMainLoop = function () {
        qc++;
        var t = ic,
          r = jc,
          o = kc;
        ((kc = null), oc(o, 0, !1, pc, !0), hc(t, r), Y());
      }),
      (e.getUserMedia = function () {
        (window.C ||
          (window.C = navigator.getUserMedia || navigator.mozGetUserMedia),
          window.C(void 0));
      }),
      (e.createContext = function (t, r, o, i) {
        return Ic(t, r, o, i);
      }),
      (Ka = m = n.ea(p)),
      (va = !0),
      (La = Ka + Na),
      (Ma = v = n.ea(La)),
      assert(Ma < w, "TOTAL_MEMORY not big enough for stack"));
    var Xc = G(
      [
        8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0,
        3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
        4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0,
        3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
        5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0,
        3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
        4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0,
        3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
        6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0,
        3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
        4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
      ],
      "i8",
      3,
    );
    ((e.Na = {
      Math: Math,
      Int8Array: Int8Array,
      Int16Array: Int16Array,
      Int32Array: Int32Array,
      Uint8Array: Uint8Array,
      Uint16Array: Uint16Array,
      Uint32Array: Uint32Array,
      Float32Array: Float32Array,
      Float64Array: Float64Array,
      NaN: NaN,
      Infinity: 1 / 0,
    }),
      (e.Oa = {
        abort: z,
        assert: assert,
        invoke_ii: function (t, r) {
          try {
            return e.dynCall_ii(t, r);
          } catch (t) {
            if (typeof t != "number" && t !== "longjmp") throw t;
            Z.setThrew(1, 0);
          }
        },
        invoke_iiii: function (t, r, o, i) {
          try {
            return e.dynCall_iiii(t, r, o, i);
          } catch (t) {
            if (typeof t != "number" && t !== "longjmp") throw t;
            Z.setThrew(1, 0);
          }
        },
        invoke_vi: function (t, r) {
          try {
            e.dynCall_vi(t, r);
          } catch (t) {
            if (typeof t != "number" && t !== "longjmp") throw t;
            Z.setThrew(1, 0);
          }
        },
        _pthread_cleanup_pop: function () {
          (assert(
            eb.level == K.length,
            "cannot pop if something else added meanwhile!",
          ),
            K.pop(),
            (eb.level = K.length));
        },
        ___lock: function () {},
        _emscripten_set_main_loop: oc,
        _pthread_self: function () {
          return 0;
        },
        ___syscall6: function (t, r) {
          ec = r;
          try {
            var o = fc();
            return (Vb(o), 0);
          } catch (t) {
            return ((typeof dc != "undefined" && t instanceof O) || z(t), -t.Q);
          }
        },
        _emscripten_set_main_loop_timing: hc,
        _abort: function () {
          e.abort();
        },
        _sbrk: wa,
        _time: function (t) {
          var r = (Date.now() / 1e3) | 0;
          return (t && (F[t >> 2] = r), r);
        },
        ___setErrNo: ib,
        _emscripten_memcpy_big: function (t, r, o) {
          return (H.set(H.subarray(r, r + o), t), t);
        },
        ___syscall54: function (t, r) {
          ec = r;
          try {
            var o = fc(),
              i = X();
            switch (i) {
              case 21505:
                return o.tty ? 0 : -M.O;
              case 21506:
                return o.tty ? 0 : -M.O;
              case 21519:
                if (!o.tty) return -M.O;
                var s = X();
                return (F[s >> 2] = 0);
              case 21520:
                return o.tty ? -M.u : -M.O;
              case 21531:
                if (((s = X()), !o.n.Wa)) throw new O(M.O);
                return o.n.Wa(o, i, s);
              default:
                z("bad ioctl syscall " + i);
            }
          } catch (t) {
            return ((typeof dc != "undefined" && t instanceof O) || z(t), -t.Q);
          }
        },
        ___unlock: function () {},
        ___syscall140: function (t, r) {
          ec = r;
          try {
            var o = fc(),
              i = X(),
              s = X(),
              _ = X(),
              g = X();
            return (
              assert(i === 0),
              Wb(o, s, g),
              (F[_ >> 2] = o.position),
              o.ia && s === 0 && g === 0 && (o.ia = null),
              0
            );
          } catch (t) {
            return ((typeof dc != "undefined" && t instanceof O) || z(t), -t.Q);
          }
        },
        _pthread_cleanup_push: eb,
        _sysconf: function (t) {
          switch (t) {
            case 30:
              return 4096;
            case 85:
              return I / 4096;
            case 132:
            case 133:
            case 12:
            case 137:
            case 138:
            case 15:
            case 235:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 149:
            case 13:
            case 10:
            case 236:
            case 153:
            case 9:
            case 21:
            case 22:
            case 159:
            case 154:
            case 14:
            case 77:
            case 78:
            case 139:
            case 80:
            case 81:
            case 82:
            case 68:
            case 67:
            case 164:
            case 11:
            case 29:
            case 47:
            case 48:
            case 95:
            case 52:
            case 51:
            case 46:
              return 200809;
            case 79:
              return 0;
            case 27:
            case 246:
            case 127:
            case 128:
            case 23:
            case 24:
            case 160:
            case 161:
            case 181:
            case 182:
            case 242:
            case 183:
            case 184:
            case 243:
            case 244:
            case 245:
            case 165:
            case 178:
            case 179:
            case 49:
            case 50:
            case 168:
            case 169:
            case 175:
            case 170:
            case 171:
            case 172:
            case 97:
            case 76:
            case 32:
            case 173:
            case 35:
              return -1;
            case 176:
            case 177:
            case 7:
            case 155:
            case 8:
            case 157:
            case 125:
            case 126:
            case 92:
            case 93:
            case 129:
            case 130:
            case 131:
            case 94:
            case 91:
              return 1;
            case 74:
            case 60:
            case 69:
            case 70:
            case 4:
              return 1024;
            case 31:
            case 42:
            case 72:
              return 32;
            case 87:
            case 26:
            case 33:
              return 2147483647;
            case 34:
            case 1:
              return 47839;
            case 38:
            case 36:
              return 99;
            case 43:
            case 37:
              return 2048;
            case 0:
              return 2097152;
            case 3:
              return 65536;
            case 28:
              return 32768;
            case 44:
              return 32767;
            case 75:
              return 16384;
            case 39:
              return 1e3;
            case 89:
              return 700;
            case 71:
              return 256;
            case 40:
              return 255;
            case 2:
              return 100;
            case 180:
              return 64;
            case 25:
              return 20;
            case 5:
              return 16;
            case 6:
              return 6;
            case 73:
              return 4;
            case 84:
              return (
                (typeof navigator == "object" &&
                  navigator.hardwareConcurrency) ||
                1
              );
          }
          return (ib(M.u), -1);
        },
        ___syscall146: function (t, r) {
          ec = r;
          try {
            var o = fc(),
              i = X(),
              s;
            e: {
              for (var _ = X(), g = 0, C = 0; C < _; C++) {
                var k = Xb(
                  o,
                  D,
                  F[(i + 8 * C) >> 2],
                  F[(i + (8 * C + 4)) >> 2],
                  void 0,
                );
                if (0 > k) {
                  s = -1;
                  break e;
                }
                g += k;
              }
              s = g;
            }
            return s;
          } catch (t) {
            return ((typeof dc != "undefined" && t instanceof O) || z(t), -t.Q);
          }
        },
        STACKTOP: m,
        STACK_MAX: La,
        tempDoublePtr: $a,
        ABORT: A,
        cttz_i8: Xc,
      }));
    var Z = (function (t, r, o) {
      "avoid using asm because chrome 47+ is broken";
      var i = new t.Int8Array(o),
        s = new t.Int16Array(o),
        _ = new t.Int32Array(o),
        g = new t.Uint8Array(o),
        C = new t.Uint16Array(o),
        k = new t.Uint32Array(o),
        x = new t.Float32Array(o),
        $ = new t.Float64Array(o),
        j = r.STACKTOP | 0,
        Q = r.STACK_MAX | 0,
        ee = r.tempDoublePtr | 0,
        te = r.ABORT | 0,
        ne = r.cttz_i8 | 0,
        re = 0,
        oe = 0,
        ae = 0,
        ie = 0,
        le = t.NaN,
        se = t.Infinity,
        ue = 0,
        ce = 0,
        de = 0,
        me = 0,
        pe = 0,
        _e = 0,
        fe = 0,
        ge = 0,
        he = 0,
        ye = 0,
        Ce = 0,
        be = 0,
        ve = 0,
        Se = 0,
        Re = 0,
        Le = 0,
        Ee = 0,
        ke = 0,
        Ie = 0,
        Te = t.Math.floor,
        De = t.Math.abs,
        xe = t.Math.sqrt,
        $e = t.Math.pow,
        Pe = t.Math.cos,
        Ne = t.Math.sin,
        Me = t.Math.tan,
        we = t.Math.acos,
        Ae = t.Math.asin,
        Fe = t.Math.atan,
        Oe = t.Math.atan2,
        Be = t.Math.exp,
        We = t.Math.log,
        qe = t.Math.ceil,
        Ue = t.Math.imul,
        Ve = t.Math.min,
        He = t.Math.clz32,
        Ge = r.abort,
        ze = r.assert,
        je = r.invoke_ii,
        Ke = r.invoke_iiii,
        Qe = r.invoke_vi,
        Xe = r._pthread_cleanup_pop,
        Ye = r.___lock,
        Je = r._emscripten_set_main_loop,
        Ze = r._pthread_self,
        et = r.___syscall6,
        tt = r._emscripten_set_main_loop_timing,
        nt = r._abort,
        rt = r._sbrk,
        ot = r._time,
        at = r.___setErrNo,
        it = r._emscripten_memcpy_big,
        lt = r.___syscall54,
        st = r.___unlock,
        ut = r.___syscall140,
        ct = r._pthread_cleanup_push,
        dt = r._sysconf,
        mt = r.___syscall146,
        pt = 0;
      function _t(t) {
        t = t | 0;
        var r = 0;
        return ((r = j), (j = (j + t) | 0), (j = (j + 15) & -16), r | 0);
      }
      function ft() {
        return j | 0;
      }
      function gt(t) {
        ((t = t | 0), (j = t));
      }
      function ht(t, r) {
        ((t = t | 0), (r = r | 0), (j = t), (Q = r));
      }
      function yt(t, r) {
        ((t = t | 0), (r = r | 0), re || ((re = t), (oe = r)));
      }
      function Ct(t) {
        ((t = t | 0),
          (i[ee >> 0] = i[t >> 0]),
          (i[(ee + 1) >> 0] = i[(t + 1) >> 0]),
          (i[(ee + 2) >> 0] = i[(t + 2) >> 0]),
          (i[(ee + 3) >> 0] = i[(t + 3) >> 0]));
      }
      function bt(t) {
        ((t = t | 0),
          (i[ee >> 0] = i[t >> 0]),
          (i[(ee + 1) >> 0] = i[(t + 1) >> 0]),
          (i[(ee + 2) >> 0] = i[(t + 2) >> 0]),
          (i[(ee + 3) >> 0] = i[(t + 3) >> 0]),
          (i[(ee + 4) >> 0] = i[(t + 4) >> 0]),
          (i[(ee + 5) >> 0] = i[(t + 5) >> 0]),
          (i[(ee + 6) >> 0] = i[(t + 6) >> 0]),
          (i[(ee + 7) >> 0] = i[(t + 7) >> 0]));
      }
      function vt(t) {
        ((t = t | 0), (ye = t));
      }
      function St() {
        return ye | 0;
      }
      function Rt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var s = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0,
          _e = 0,
          fe = 0,
          ge = 0,
          he = 0,
          Ce = 0,
          be = 0,
          ve = 0,
          Se = 0,
          Re = 0,
          Le = 0,
          Ee = 0,
          ke = 0,
          Ie = 0,
          Te = 0,
          De = 0,
          xe = 0,
          $e = 0,
          Pe = 0,
          Ne = 0,
          Me = 0,
          we = 0,
          Ae = 0,
          Fe = 0,
          Oe = 0,
          Be = 0,
          We = 0,
          qe = 0,
          Ve = 0,
          He = 0,
          Ge = 0,
          ze = 0,
          je = 0,
          Ke = 0,
          Qe = 0,
          Xe = 0,
          Ye = 0,
          Je = 0,
          Ze = 0,
          et = 0,
          tt = 0,
          nt = 0,
          rt = 0,
          ot = 0,
          at = 0,
          it = 0,
          lt = 0,
          st = 0,
          ut = 0,
          ct = 0,
          dt = 0,
          mt = 0,
          pt = 0,
          _t = 0,
          ft = 0,
          gt = 0,
          ht = 0,
          yt = 0,
          Ct = 0,
          bt = 0,
          vt = 0,
          St = 0,
          Rt = 0,
          It = 0,
          Tt = 0,
          Dt = 0,
          xt = 0,
          $t = 0,
          Pt = 0,
          Nt = 0,
          Mt = 0,
          wt = 0,
          At = 0,
          Ft = 0,
          Ot = 0,
          Bt = 0,
          Wt = 0,
          jt = 0,
          Kt = 0,
          Qt = 0,
          Xt = 0,
          Yt = 0,
          Zt = 0,
          en = 0,
          tn = 0,
          nn = 0,
          rn = 0,
          on = 0,
          an = 0,
          ln = 0,
          sn = 0,
          un = 0,
          cn = 0,
          dn = 0,
          mn = 0,
          pn = 0,
          _n = 0,
          fn = 0,
          gn = 0,
          hn = 0,
          yn = 0,
          Cn = 0,
          bn = 0,
          vn = 0,
          Sn = 0,
          Rn = 0,
          Ln = 0,
          En = 0,
          kn = 0,
          In = 0,
          Tn = 0,
          Dn = 0,
          xn = 0,
          $n = 0,
          Pn = 0,
          Nn = 0,
          Mn = 0,
          wn = 0,
          An = 0,
          Fn = 0,
          On = 0,
          Bn = 0,
          Wn = 0,
          qn = 0,
          Un = 0,
          Vn = 0,
          Hn = 0,
          Gn = 0,
          zn = 0,
          jn = 0,
          Kn = 0,
          Qn = 0,
          Xn = 0,
          Yn = 0,
          Jn = 0,
          Zn = 0,
          er = 0,
          tr = 0,
          nr = 0,
          rr = 0,
          or = 0,
          ar = 0,
          ir = 0,
          lr = 0,
          sr = 0,
          ur = 0,
          cr = 0,
          dr = 0,
          mr = 0,
          pr = 0,
          _r = 0,
          fr = 0,
          gr = 0,
          hr = 0,
          yr = 0,
          Cr = 0,
          br = 0,
          vr = 0;
        ((s = j),
          (j = (j + 2640) | 0),
          (C = (s + 2456) | 0),
          (k = (s + 2304) | 0),
          (x = (s + 2152) | 0),
          ($ = (s + 2e3) | 0),
          (Q = (s + 1848) | 0),
          (ee = (s + 1696) | 0),
          (te = (s + 1544) | 0),
          (ne = (s + 1392) | 0),
          (re = (s + 1240) | 0),
          (oe = (s + 1088) | 0),
          (ae = (s + 936) | 0),
          (ie = (s + 784) | 0),
          (le = (s + 632) | 0),
          (se = (s + 480) | 0),
          (ue = (s + 328) | 0),
          (ce = (s + 248) | 0),
          (de = (s + 168) | 0),
          (me = (s + 80) | 0),
          (pe = s),
          (_e = (s + 2608) | 0),
          (fe = _e),
          (ge = r),
          (r = (fe + 32) | 0));
        do
          ((i[fe >> 0] = i[ge >> 0] | 0),
            (fe = (fe + 1) | 0),
            (ge = (ge + 1) | 0));
        while ((fe | 0) < (r | 0));
        ((i[_e >> 0] = (g[_e >> 0] | 0) & 248),
          (he = (_e + 31) | 0),
          (i[he >> 0] = ((g[he >> 0] | 0) & 63) | 64),
          (he = g[o >> 0] | 0),
          (Ce = zt(g[(o + 1) >> 0] | 0 | 0, 0, 8) | 0),
          (be = ye),
          (ve = zt(g[(o + 2) >> 0] | 0 | 0, 0, 16) | 0),
          (Se = be | ye),
          (be = g[(o + 3) >> 0] | 0),
          (Re = zt(be | 0, 0, 24) | 0),
          (Le = ce),
          (_[Le >> 2] = Ce | he | ve | (Re & 50331648)),
          (_[(Le + 4) >> 2] = Se),
          (Se = zt(g[(o + 4) >> 0] | 0 | 0, 0, 8) | 0),
          (Le = ye),
          (Re = zt(g[(o + 5) >> 0] | 0 | 0, 0, 16) | 0),
          (ve = Le | ye),
          (Le = g[(o + 6) >> 0] | 0),
          (he = zt(Le | 0, 0, 24) | 0),
          (Ce = Gt(Se | be | Re | he | 0, ve | ye | 0, 2) | 0),
          (ve = (ce + 8) | 0),
          (_[ve >> 2] = Ce & 33554431),
          (_[(ve + 4) >> 2] = 0),
          (ve = zt(g[(o + 7) >> 0] | 0 | 0, 0, 8) | 0),
          (Ce = ye),
          (he = zt(g[(o + 8) >> 0] | 0 | 0, 0, 16) | 0),
          (Re = Ce | ye),
          (Ce = g[(o + 9) >> 0] | 0),
          (be = zt(Ce | 0, 0, 24) | 0),
          (Se = Gt(ve | Le | he | be | 0, Re | ye | 0, 3) | 0),
          (Re = (ce + 16) | 0),
          (_[Re >> 2] = Se & 67108863),
          (_[(Re + 4) >> 2] = 0),
          (Re = zt(g[(o + 10) >> 0] | 0 | 0, 0, 8) | 0),
          (Se = ye),
          (be = zt(g[(o + 11) >> 0] | 0 | 0, 0, 16) | 0),
          (he = Se | ye),
          (Se = g[(o + 12) >> 0] | 0),
          (Le = zt(Se | 0, 0, 24) | 0),
          (ve = Gt(Re | Ce | be | Le | 0, he | ye | 0, 5) | 0),
          (he = (ce + 24) | 0),
          (_[he >> 2] = ve & 33554431),
          (_[(he + 4) >> 2] = 0),
          (he = zt(g[(o + 13) >> 0] | 0 | 0, 0, 8) | 0),
          (ve = ye),
          (Le = zt(g[(o + 14) >> 0] | 0 | 0, 0, 16) | 0),
          (be = ve | ye),
          (ve = zt(g[(o + 15) >> 0] | 0 | 0, 0, 24) | 0),
          (Ce = Gt(he | Se | Le | ve | 0, be | ye | 0, 6) | 0),
          (be = (ce + 32) | 0),
          (_[be >> 2] = Ce & 67108863),
          (_[(be + 4) >> 2] = 0),
          (be = g[(o + 16) >> 0] | 0),
          (Ce = zt(g[(o + 17) >> 0] | 0 | 0, 0, 8) | 0),
          (ve = ye),
          (Le = zt(g[(o + 18) >> 0] | 0 | 0, 0, 16) | 0),
          (Se = ve | ye),
          (ve = g[(o + 19) >> 0] | 0),
          (he = zt(ve | 0, 0, 24) | 0),
          (Re = (ce + 40) | 0),
          (_[Re >> 2] = Ce | be | Le | (he & 16777216)),
          (_[(Re + 4) >> 2] = Se),
          (Se = zt(g[(o + 20) >> 0] | 0 | 0, 0, 8) | 0),
          (Re = ye),
          (he = zt(g[(o + 21) >> 0] | 0 | 0, 0, 16) | 0),
          (Le = Re | ye),
          (Re = g[(o + 22) >> 0] | 0),
          (be = zt(Re | 0, 0, 24) | 0),
          (Ce = Gt(Se | ve | he | be | 0, Le | ye | 0, 1) | 0),
          (Le = (ce + 48) | 0),
          (_[Le >> 2] = Ce & 67108863),
          (_[(Le + 4) >> 2] = 0),
          (Le = zt(g[(o + 23) >> 0] | 0 | 0, 0, 8) | 0),
          (Ce = ye),
          (be = zt(g[(o + 24) >> 0] | 0 | 0, 0, 16) | 0),
          (he = Ce | ye),
          (Ce = g[(o + 25) >> 0] | 0),
          (ve = zt(Ce | 0, 0, 24) | 0),
          (Se = Gt(Le | Re | be | ve | 0, he | ye | 0, 3) | 0),
          (he = (ce + 56) | 0),
          (_[he >> 2] = Se & 33554431),
          (_[(he + 4) >> 2] = 0),
          (he = zt(g[(o + 26) >> 0] | 0 | 0, 0, 8) | 0),
          (Se = ye),
          (ve = zt(g[(o + 27) >> 0] | 0 | 0, 0, 16) | 0),
          (be = Se | ye),
          (Se = g[(o + 28) >> 0] | 0),
          (Re = zt(Se | 0, 0, 24) | 0),
          (Le = Gt(he | Ce | ve | Re | 0, be | ye | 0, 4) | 0),
          (be = (ce + 64) | 0),
          (_[be >> 2] = Le & 67108863),
          (_[(be + 4) >> 2] = 0),
          (be = zt(g[(o + 29) >> 0] | 0 | 0, 0, 8) | 0),
          (Le = ye),
          (Re = zt(g[(o + 30) >> 0] | 0 | 0, 0, 16) | 0),
          (ve = Le | ye),
          (Le = zt(g[(o + 31) >> 0] | 0 | 0, 0, 24) | 0),
          (o = Gt(be | Se | Re | Le | 0, ve | ye | 0, 6) | 0),
          (ve = (ce + 72) | 0),
          (_[ve >> 2] = o & 33554431),
          (_[(ve + 4) >> 2] = 0),
          Ht(re | 0, 0, 152) | 0,
          (ve = re),
          (_[ve >> 2] = 1),
          (_[(ve + 4) >> 2] = 0),
          Ht(oe | 0, 0, 152) | 0,
          (ve = oe),
          (_[ve >> 2] = 1),
          (_[(ve + 4) >> 2] = 0),
          Ht(ae | 0, 0, 152) | 0,
          Ht(ie | 0, 0, 152) | 0,
          Ht(le | 0, 0, 152) | 0,
          (ve = le),
          (_[ve >> 2] = 1),
          (_[(ve + 4) >> 2] = 0),
          Ht(se | 0, 0, 152) | 0,
          Ht(ue | 0, 0, 152) | 0,
          (ve = ue),
          (_[ve >> 2] = 1),
          (_[(ve + 4) >> 2] = 0),
          (fe = (ne + 80) | 0),
          (r = (fe + 72) | 0));
        do ((_[fe >> 2] = 0), (fe = (fe + 4) | 0));
        while ((fe | 0) < (r | 0));
        ((fe = ne), (ge = ce), (r = (fe + 80) | 0));
        do
          ((_[fe >> 2] = _[ge >> 2]), (fe = (fe + 4) | 0), (ge = (ge + 4) | 0));
        while ((fe | 0) < (r | 0));
        for (
          ve = ($ + 144) | 0,
            o = ($ + 64) | 0,
            Le = ($ + 136) | 0,
            Re = ($ + 56) | 0,
            Se = ($ + 128) | 0,
            be = ($ + 48) | 0,
            Ce = ($ + 120) | 0,
            he = ($ + 40) | 0,
            Ee = ($ + 112) | 0,
            ke = ($ + 32) | 0,
            Ie = ($ + 104) | 0,
            Te = ($ + 24) | 0,
            De = ($ + 96) | 0,
            xe = ($ + 16) | 0,
            $e = ($ + 88) | 0,
            Pe = ($ + 8) | 0,
            Ne = ($ + 80) | 0,
            Me = (Q + 144) | 0,
            we = (Q + 64) | 0,
            Ae = (Q + 136) | 0,
            Fe = (Q + 56) | 0,
            Oe = (Q + 128) | 0,
            Be = (Q + 48) | 0,
            We = (Q + 120) | 0,
            qe = (Q + 40) | 0,
            Ve = (Q + 112) | 0,
            He = (Q + 32) | 0,
            Ge = (Q + 104) | 0,
            ze = (Q + 24) | 0,
            je = (Q + 96) | 0,
            Ke = (Q + 16) | 0,
            Qe = (Q + 88) | 0,
            Xe = (Q + 8) | 0,
            Ye = (Q + 80) | 0,
            Je = ($ + 72) | 0,
            Ze = (Q + 72) | 0,
            et = (k + 8) | 0,
            tt = (x + 8) | 0,
            nt = (k + 16) | 0,
            rt = (x + 16) | 0,
            ot = (k + 24) | 0,
            at = (x + 24) | 0,
            it = (k + 32) | 0,
            lt = (x + 32) | 0,
            st = (k + 40) | 0,
            ut = (x + 40) | 0,
            ct = (k + 48) | 0,
            dt = (x + 48) | 0,
            mt = (k + 56) | 0,
            pt = (x + 56) | 0,
            _t = (k + 64) | 0,
            ft = (x + 64) | 0,
            gt = (k + 72) | 0,
            ht = (x + 72) | 0,
            yt = (C + 80) | 0,
            Ct = (C + 8) | 0,
            bt = (C + 16) | 0,
            vt = (C + 24) | 0,
            St = (C + 32) | 0,
            Rt = (C + 40) | 0,
            It = (C + 48) | 0,
            Tt = (C + 56) | 0,
            Dt = (C + 64) | 0,
            xt = (C + 72) | 0,
            $t = 0,
            Pt = ne,
            Nt = ie,
            ie = re,
            Mt = le,
            le = oe,
            wt = se,
            se = ae,
            ae = ue;
          ;
        ) {
          for (
            ue = i[(_e + (31 - $t)) >> 0] | 0,
              At = 0,
              Ft = Pt,
              Ot = Nt,
              Bt = ie,
              Wt = Mt,
              jt = le,
              Kt = wt,
              Qt = se,
              Xt = ae;
            ;
          ) {
            ((Yt = ue & 255),
              (Zt = Ut(0, 0, (Yt >>> 7) | 0, 0) | 0),
              (en = ye),
              (tn = 0));
            do
              ((nn = (jt + (tn << 3)) | 0),
                (rn = nn),
                (on = _[rn >> 2] | 0),
                (an = _[(rn + 4) >> 2] | 0),
                (rn = (Ft + (tn << 3)) | 0),
                (ln = rn),
                (sn = _[ln >> 2] | 0),
                (un = _[(ln + 4) >> 2] | 0),
                (ln = (sn ^ on) & Zt),
                (cn = (un ^ an) & en),
                (an = qt(0, (ln ^ on) | 0, 32) | 0),
                (on = nn),
                (_[on >> 2] = an),
                (_[(on + 4) >> 2] = ye),
                (on = qt(0, (ln ^ sn) | 0, 32) | 0),
                (sn = rn),
                (_[sn >> 2] = on),
                (_[(sn + 4) >> 2] = ye),
                (tn = (tn + 1) | 0));
            while ((tn | 0) != 10);
            dn = 0;
            do
              ((tn = (Qt + (dn << 3)) | 0),
                (sn = tn),
                (on = _[sn >> 2] | 0),
                (rn = _[(sn + 4) >> 2] | 0),
                (sn = (Bt + (dn << 3)) | 0),
                (ln = sn),
                (an = _[ln >> 2] | 0),
                (nn = _[(ln + 4) >> 2] | 0),
                (ln = (an ^ on) & Zt),
                (un = (nn ^ rn) & en),
                (rn = qt(0, (ln ^ on) | 0, 32) | 0),
                (on = tn),
                (_[on >> 2] = rn),
                (_[(on + 4) >> 2] = ye),
                (on = qt(0, (ln ^ an) | 0, 32) | 0),
                (an = sn),
                (_[an >> 2] = on),
                (_[(an + 4) >> 2] = ye),
                (dn = (dn + 1) | 0));
            while ((dn | 0) != 10);
            ((an = jt),
              (on = _[an >> 2] | 0),
              (sn = _[(an + 4) >> 2] | 0),
              (an = (jt + 8) | 0),
              (ln = an),
              (rn = _[ln >> 2] | 0),
              (tn = _[(ln + 4) >> 2] | 0),
              (ln = (jt + 16) | 0),
              (nn = ln),
              (un = _[nn >> 2] | 0),
              (cn = _[(nn + 4) >> 2] | 0),
              (nn = (jt + 24) | 0),
              (mn = nn),
              (pn = _[mn >> 2] | 0),
              (_n = _[(mn + 4) >> 2] | 0),
              (mn = (jt + 32) | 0),
              (fn = mn),
              (gn = _[fn >> 2] | 0),
              (hn = _[(fn + 4) >> 2] | 0),
              (fn = (jt + 40) | 0),
              (yn = fn),
              (Cn = _[yn >> 2] | 0),
              (bn = _[(yn + 4) >> 2] | 0),
              (yn = (jt + 48) | 0),
              (vn = yn),
              (Sn = _[vn >> 2] | 0),
              (Rn = _[(vn + 4) >> 2] | 0),
              (vn = (jt + 56) | 0),
              (Ln = vn),
              (En = _[Ln >> 2] | 0),
              (kn = _[(Ln + 4) >> 2] | 0),
              (Ln = (jt + 64) | 0),
              (In = Ln),
              (Tn = _[In >> 2] | 0),
              (Dn = _[(In + 4) >> 2] | 0),
              (In = (jt + 72) | 0),
              (xn = In),
              ($n = _[xn >> 2] | 0),
              (Pn = _[(xn + 4) >> 2] | 0),
              (xn = Qt),
              (Nn = _[xn >> 2] | 0),
              (Mn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(Nn | 0, Mn | 0, on | 0, sn | 0) | 0),
              (wn = jt),
              (_[wn >> 2] = xn),
              (_[(wn + 4) >> 2] = ye),
              (wn = (Qt + 8) | 0),
              (xn = wn),
              (An = _[xn >> 2] | 0),
              (Fn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(An | 0, Fn | 0, rn | 0, tn | 0) | 0),
              (On = an),
              (_[On >> 2] = xn),
              (_[(On + 4) >> 2] = ye),
              (On = (Qt + 16) | 0),
              (xn = On),
              (an = _[xn >> 2] | 0),
              (Bn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(an | 0, Bn | 0, un | 0, cn | 0) | 0),
              (Wn = ln),
              (_[Wn >> 2] = xn),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = (Qt + 24) | 0),
              (xn = Wn),
              (ln = _[xn >> 2] | 0),
              (qn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(ln | 0, qn | 0, pn | 0, _n | 0) | 0),
              (Un = nn),
              (_[Un >> 2] = xn),
              (_[(Un + 4) >> 2] = ye),
              (Un = (Qt + 32) | 0),
              (xn = Un),
              (nn = _[xn >> 2] | 0),
              (Vn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(nn | 0, Vn | 0, gn | 0, hn | 0) | 0),
              (Hn = mn),
              (_[Hn >> 2] = xn),
              (_[(Hn + 4) >> 2] = ye),
              (Hn = (Qt + 40) | 0),
              (xn = Hn),
              (mn = _[xn >> 2] | 0),
              (Gn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(mn | 0, Gn | 0, Cn | 0, bn | 0) | 0),
              (zn = fn),
              (_[zn >> 2] = xn),
              (_[(zn + 4) >> 2] = ye),
              (zn = (Qt + 48) | 0),
              (xn = zn),
              (fn = _[xn >> 2] | 0),
              (jn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(fn | 0, jn | 0, Sn | 0, Rn | 0) | 0),
              (Kn = yn),
              (_[Kn >> 2] = xn),
              (_[(Kn + 4) >> 2] = ye),
              (Kn = (Qt + 56) | 0),
              (xn = Kn),
              (yn = _[xn >> 2] | 0),
              (Qn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(yn | 0, Qn | 0, En | 0, kn | 0) | 0),
              (Xn = vn),
              (_[Xn >> 2] = xn),
              (_[(Xn + 4) >> 2] = ye),
              (Xn = (Qt + 64) | 0),
              (xn = Xn),
              (vn = _[xn >> 2] | 0),
              (Yn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(vn | 0, Yn | 0, Tn | 0, Dn | 0) | 0),
              (Jn = Ln),
              (_[Jn >> 2] = xn),
              (_[(Jn + 4) >> 2] = ye),
              (Jn = (Qt + 72) | 0),
              (xn = Jn),
              (Ln = _[xn >> 2] | 0),
              (Zn = _[(xn + 4) >> 2] | 0),
              (xn = Vt(Ln | 0, Zn | 0, $n | 0, Pn | 0) | 0),
              (er = In),
              (_[er >> 2] = xn),
              (_[(er + 4) >> 2] = ye),
              (er = Ut(on | 0, sn | 0, Nn | 0, Mn | 0) | 0),
              (Mn = Qt),
              (_[Mn >> 2] = er),
              (_[(Mn + 4) >> 2] = ye),
              (Mn = Ut(rn | 0, tn | 0, An | 0, Fn | 0) | 0),
              (Fn = wn),
              (_[Fn >> 2] = Mn),
              (_[(Fn + 4) >> 2] = ye),
              (Fn = Ut(un | 0, cn | 0, an | 0, Bn | 0) | 0),
              (Bn = On),
              (_[Bn >> 2] = Fn),
              (_[(Bn + 4) >> 2] = ye),
              (Bn = Ut(pn | 0, _n | 0, ln | 0, qn | 0) | 0),
              (qn = Wn),
              (_[qn >> 2] = Bn),
              (_[(qn + 4) >> 2] = ye),
              (qn = Ut(gn | 0, hn | 0, nn | 0, Vn | 0) | 0),
              (Vn = Un),
              (_[Vn >> 2] = qn),
              (_[(Vn + 4) >> 2] = ye),
              (Vn = Ut(Cn | 0, bn | 0, mn | 0, Gn | 0) | 0),
              (Gn = Hn),
              (_[Gn >> 2] = Vn),
              (_[(Gn + 4) >> 2] = ye),
              (Gn = Ut(Sn | 0, Rn | 0, fn | 0, jn | 0) | 0),
              (jn = zn),
              (_[jn >> 2] = Gn),
              (_[(jn + 4) >> 2] = ye),
              (jn = Ut(En | 0, kn | 0, yn | 0, Qn | 0) | 0),
              (Qn = Kn),
              (_[Qn >> 2] = jn),
              (_[(Qn + 4) >> 2] = ye),
              (Qn = Ut(Tn | 0, Dn | 0, vn | 0, Yn | 0) | 0),
              (Yn = Xn),
              (_[Yn >> 2] = Qn),
              (_[(Yn + 4) >> 2] = ye),
              (Yn = Ut($n | 0, Pn | 0, Ln | 0, Zn | 0) | 0),
              (Zn = Jn),
              (_[Zn >> 2] = Yn),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = Ft),
              (Yn = _[Zn >> 2] | 0),
              (Jn = _[(Zn + 4) >> 2] | 0),
              (Zn = (Ft + 8) | 0),
              (Ln = Zn),
              (Pn = _[Ln >> 2] | 0),
              ($n = _[(Ln + 4) >> 2] | 0),
              (Ln = (Ft + 16) | 0),
              (Qn = Ln),
              (Xn = _[Qn >> 2] | 0),
              (vn = _[(Qn + 4) >> 2] | 0),
              (Qn = (Ft + 24) | 0),
              (Dn = Qn),
              (Tn = _[Dn >> 2] | 0),
              (jn = _[(Dn + 4) >> 2] | 0),
              (Dn = (Ft + 32) | 0),
              (Kn = Dn),
              (yn = _[Kn >> 2] | 0),
              (kn = _[(Kn + 4) >> 2] | 0),
              (Kn = (Ft + 40) | 0),
              (En = Kn),
              (Gn = _[En >> 2] | 0),
              (zn = _[(En + 4) >> 2] | 0),
              (En = (Ft + 48) | 0),
              (fn = En),
              (Rn = _[fn >> 2] | 0),
              (Sn = _[(fn + 4) >> 2] | 0),
              (fn = (Ft + 56) | 0),
              (Vn = fn),
              (Hn = _[Vn >> 2] | 0),
              (mn = _[(Vn + 4) >> 2] | 0),
              (Vn = (Ft + 64) | 0),
              (bn = Vn),
              (Cn = _[bn >> 2] | 0),
              (qn = _[(bn + 4) >> 2] | 0),
              (bn = (Ft + 72) | 0),
              (Un = bn),
              (nn = _[Un >> 2] | 0),
              (hn = _[(Un + 4) >> 2] | 0),
              (Un = Bt),
              (gn = _[Un >> 2] | 0),
              (Bn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(gn | 0, Bn | 0, Yn | 0, Jn | 0) | 0),
              (Wn = Ft),
              (_[Wn >> 2] = Un),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = (Bt + 8) | 0),
              (Un = Wn),
              (ln = _[Un >> 2] | 0),
              (_n = _[(Un + 4) >> 2] | 0),
              (Un = Vt(ln | 0, _n | 0, Pn | 0, $n | 0) | 0),
              (pn = Zn),
              (_[pn >> 2] = Un),
              (_[(pn + 4) >> 2] = ye),
              (pn = (Bt + 16) | 0),
              (Un = pn),
              (Zn = _[Un >> 2] | 0),
              (Fn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Zn | 0, Fn | 0, Xn | 0, vn | 0) | 0),
              (On = Ln),
              (_[On >> 2] = Un),
              (_[(On + 4) >> 2] = ye),
              (On = (Bt + 24) | 0),
              (Un = On),
              (Ln = _[Un >> 2] | 0),
              (an = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Ln | 0, an | 0, Tn | 0, jn | 0) | 0),
              (cn = Qn),
              (_[cn >> 2] = Un),
              (_[(cn + 4) >> 2] = ye),
              (cn = (Bt + 32) | 0),
              (Un = cn),
              (Qn = _[Un >> 2] | 0),
              (un = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Qn | 0, un | 0, yn | 0, kn | 0) | 0),
              (Mn = Dn),
              (_[Mn >> 2] = Un),
              (_[(Mn + 4) >> 2] = ye),
              (Mn = (Bt + 40) | 0),
              (Un = Mn),
              (Dn = _[Un >> 2] | 0),
              (wn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Dn | 0, wn | 0, Gn | 0, zn | 0) | 0),
              (An = Kn),
              (_[An >> 2] = Un),
              (_[(An + 4) >> 2] = ye),
              (An = (Bt + 48) | 0),
              (Un = An),
              (Kn = _[Un >> 2] | 0),
              (tn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Kn | 0, tn | 0, Rn | 0, Sn | 0) | 0),
              (rn = En),
              (_[rn >> 2] = Un),
              (_[(rn + 4) >> 2] = ye),
              (rn = (Bt + 56) | 0),
              (Un = rn),
              (En = _[Un >> 2] | 0),
              (er = _[(Un + 4) >> 2] | 0),
              (Un = Vt(En | 0, er | 0, Hn | 0, mn | 0) | 0),
              (Nn = fn),
              (_[Nn >> 2] = Un),
              (_[(Nn + 4) >> 2] = ye),
              (Nn = (Bt + 64) | 0),
              (Un = Nn),
              (fn = _[Un >> 2] | 0),
              (sn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(fn | 0, sn | 0, Cn | 0, qn | 0) | 0),
              (on = Vn),
              (_[on >> 2] = Un),
              (_[(on + 4) >> 2] = ye),
              (on = (Bt + 72) | 0),
              (Un = on),
              (Vn = _[Un >> 2] | 0),
              (xn = _[(Un + 4) >> 2] | 0),
              (Un = Vt(Vn | 0, xn | 0, nn | 0, hn | 0) | 0),
              (In = bn),
              (_[In >> 2] = Un),
              (_[(In + 4) >> 2] = ye),
              (In = Ut(Yn | 0, Jn | 0, gn | 0, Bn | 0) | 0),
              (Bn = Bt),
              (_[Bn >> 2] = In),
              (_[(Bn + 4) >> 2] = ye),
              (Bn = Ut(Pn | 0, $n | 0, ln | 0, _n | 0) | 0),
              (_n = Wn),
              (_[_n >> 2] = Bn),
              (_[(_n + 4) >> 2] = ye),
              (_n = Ut(Xn | 0, vn | 0, Zn | 0, Fn | 0) | 0),
              (Fn = pn),
              (_[Fn >> 2] = _n),
              (_[(Fn + 4) >> 2] = ye),
              (Fn = Ut(Tn | 0, jn | 0, Ln | 0, an | 0) | 0),
              (an = On),
              (_[an >> 2] = Fn),
              (_[(an + 4) >> 2] = ye),
              (an = Ut(yn | 0, kn | 0, Qn | 0, un | 0) | 0),
              (un = cn),
              (_[un >> 2] = an),
              (_[(un + 4) >> 2] = ye),
              (un = Ut(Gn | 0, zn | 0, Dn | 0, wn | 0) | 0),
              (wn = Mn),
              (_[wn >> 2] = un),
              (_[(wn + 4) >> 2] = ye),
              (wn = Ut(Rn | 0, Sn | 0, Kn | 0, tn | 0) | 0),
              (tn = An),
              (_[tn >> 2] = wn),
              (_[(tn + 4) >> 2] = ye),
              (tn = Ut(Hn | 0, mn | 0, En | 0, er | 0) | 0),
              (er = rn),
              (_[er >> 2] = tn),
              (_[(er + 4) >> 2] = ye),
              (er = Ut(Cn | 0, qn | 0, fn | 0, sn | 0) | 0),
              (sn = Nn),
              (_[sn >> 2] = er),
              (_[(sn + 4) >> 2] = ye),
              (sn = Ut(nn | 0, hn | 0, Vn | 0, xn | 0) | 0),
              (xn = on),
              (_[xn >> 2] = sn),
              (_[(xn + 4) >> 2] = ye),
              Et($, Ft, Qt),
              Et(Q, jt, Bt),
              (xn = ve),
              (sn = _[xn >> 2] | 0),
              (on = _[(xn + 4) >> 2] | 0),
              (xn = o),
              (Vn = _[xn >> 2] | 0),
              (hn = _[(xn + 4) >> 2] | 0),
              (xn = Jt(sn | 0, on | 0, 18, 0) | 0),
              (nn = ye),
              (er = Vt(Vn | 0, hn | 0, sn | 0, on | 0) | 0),
              (on = Vt(er | 0, ye | 0, xn | 0, nn | 0) | 0),
              (nn = o),
              (_[nn >> 2] = on),
              (_[(nn + 4) >> 2] = ye),
              (nn = Le),
              (on = _[nn >> 2] | 0),
              (xn = _[(nn + 4) >> 2] | 0),
              (nn = Re),
              (er = _[nn >> 2] | 0),
              (sn = _[(nn + 4) >> 2] | 0),
              (nn = Jt(on | 0, xn | 0, 18, 0) | 0),
              (hn = ye),
              (Vn = Vt(er | 0, sn | 0, on | 0, xn | 0) | 0),
              (xn = Vt(Vn | 0, ye | 0, nn | 0, hn | 0) | 0),
              (hn = Re),
              (_[hn >> 2] = xn),
              (_[(hn + 4) >> 2] = ye),
              (hn = Se),
              (xn = _[hn >> 2] | 0),
              (nn = _[(hn + 4) >> 2] | 0),
              (hn = be),
              (Vn = _[hn >> 2] | 0),
              (on = _[(hn + 4) >> 2] | 0),
              (hn = Jt(xn | 0, nn | 0, 18, 0) | 0),
              (sn = ye),
              (er = Vt(Vn | 0, on | 0, xn | 0, nn | 0) | 0),
              (nn = Vt(er | 0, ye | 0, hn | 0, sn | 0) | 0),
              (sn = be),
              (_[sn >> 2] = nn),
              (_[(sn + 4) >> 2] = ye),
              (sn = Ce),
              (nn = _[sn >> 2] | 0),
              (hn = _[(sn + 4) >> 2] | 0),
              (sn = he),
              (er = _[sn >> 2] | 0),
              (xn = _[(sn + 4) >> 2] | 0),
              (sn = Jt(nn | 0, hn | 0, 18, 0) | 0),
              (on = ye),
              (Vn = Vt(er | 0, xn | 0, nn | 0, hn | 0) | 0),
              (hn = Vt(Vn | 0, ye | 0, sn | 0, on | 0) | 0),
              (on = he),
              (_[on >> 2] = hn),
              (_[(on + 4) >> 2] = ye),
              (on = Ee),
              (hn = _[on >> 2] | 0),
              (sn = _[(on + 4) >> 2] | 0),
              (on = ke),
              (Vn = _[on >> 2] | 0),
              (nn = _[(on + 4) >> 2] | 0),
              (on = Jt(hn | 0, sn | 0, 18, 0) | 0),
              (xn = ye),
              (er = Vt(Vn | 0, nn | 0, hn | 0, sn | 0) | 0),
              (sn = Vt(er | 0, ye | 0, on | 0, xn | 0) | 0),
              (xn = ke),
              (_[xn >> 2] = sn),
              (_[(xn + 4) >> 2] = ye),
              (xn = Ie),
              (sn = _[xn >> 2] | 0),
              (on = _[(xn + 4) >> 2] | 0),
              (xn = Te),
              (er = _[xn >> 2] | 0),
              (hn = _[(xn + 4) >> 2] | 0),
              (xn = Jt(sn | 0, on | 0, 18, 0) | 0),
              (nn = ye),
              (Vn = Vt(er | 0, hn | 0, sn | 0, on | 0) | 0),
              (on = Vt(Vn | 0, ye | 0, xn | 0, nn | 0) | 0),
              (nn = Te),
              (_[nn >> 2] = on),
              (_[(nn + 4) >> 2] = ye),
              (nn = De),
              (on = _[nn >> 2] | 0),
              (xn = _[(nn + 4) >> 2] | 0),
              (nn = xe),
              (Vn = _[nn >> 2] | 0),
              (sn = _[(nn + 4) >> 2] | 0),
              (nn = Jt(on | 0, xn | 0, 18, 0) | 0),
              (hn = ye),
              (er = Vt(Vn | 0, sn | 0, on | 0, xn | 0) | 0),
              (xn = Vt(er | 0, ye | 0, nn | 0, hn | 0) | 0),
              (hn = xe),
              (_[hn >> 2] = xn),
              (_[(hn + 4) >> 2] = ye),
              (hn = $e),
              (xn = _[hn >> 2] | 0),
              (nn = _[(hn + 4) >> 2] | 0),
              (hn = Pe),
              (er = _[hn >> 2] | 0),
              (on = _[(hn + 4) >> 2] | 0),
              (hn = Jt(xn | 0, nn | 0, 18, 0) | 0),
              (sn = ye),
              (Vn = Vt(er | 0, on | 0, xn | 0, nn | 0) | 0),
              (nn = Vt(Vn | 0, ye | 0, hn | 0, sn | 0) | 0),
              (sn = Pe),
              (_[sn >> 2] = nn),
              (_[(sn + 4) >> 2] = ye),
              (sn = Ne),
              (nn = _[sn >> 2] | 0),
              (hn = _[(sn + 4) >> 2] | 0),
              (sn = $),
              (Vn = _[sn >> 2] | 0),
              (xn = _[(sn + 4) >> 2] | 0),
              (sn = Jt(nn | 0, hn | 0, 18, 0) | 0),
              (on = ye),
              (er = Vt(Vn | 0, xn | 0, nn | 0, hn | 0) | 0),
              (hn = Vt(er | 0, ye | 0, sn | 0, on | 0) | 0),
              (on = ye),
              (sn = $),
              (_[sn >> 2] = hn),
              (_[(sn + 4) >> 2] = on),
              (sn = Ne),
              (_[sn >> 2] = 0),
              (_[(sn + 4) >> 2] = 0),
              (sn = on),
              (on = hn),
              (hn = 0));
            do
              ((er = Vt(((sn >> 31) >>> 6) | 0, 0, on | 0, sn | 0) | 0),
                (nn = qt(er | 0, ye | 0, 26) | 0),
                (er = ye),
                (xn = zt(nn | 0, er | 0, 26) | 0),
                (Vn = Ut(on | 0, sn | 0, xn | 0, ye | 0) | 0),
                (xn = ($ + (hn << 3)) | 0),
                (_[xn >> 2] = Vn),
                (_[(xn + 4) >> 2] = ye),
                (xn = ($ + ((hn | 1) << 3)) | 0),
                (Vn = xn),
                (Nn =
                  Vt(nn | 0, er | 0, _[Vn >> 2] | 0, _[(Vn + 4) >> 2] | 0) | 0),
                (Vn = ye),
                (er = Vt(((Vn >> 31) >>> 7) | 0, 0, Nn | 0, Vn | 0) | 0),
                (nn = qt(er | 0, ye | 0, 25) | 0),
                (er = ye),
                (fn = zt(nn | 0, er | 0, 25) | 0),
                (qn = Ut(Nn | 0, Vn | 0, fn | 0, ye | 0) | 0),
                (fn = xn),
                (_[fn >> 2] = qn),
                (_[(fn + 4) >> 2] = ye),
                (hn = (hn + 2) | 0),
                (fn = ($ + (hn << 3)) | 0),
                (qn = fn),
                (on =
                  Vt(nn | 0, er | 0, _[qn >> 2] | 0, _[(qn + 4) >> 2] | 0) | 0),
                (sn = ye),
                (qn = fn),
                (_[qn >> 2] = on),
                (_[(qn + 4) >> 2] = sn));
            while (hn >>> 0 < 10);
            ((hn = Ne),
              (sn = _[hn >> 2] | 0),
              (on = _[(hn + 4) >> 2] | 0),
              (hn = $),
              (qn = _[hn >> 2] | 0),
              (fn = _[(hn + 4) >> 2] | 0),
              (hn = Jt(sn | 0, on | 0, 18, 0) | 0),
              (er = ye),
              (nn = Vt(qn | 0, fn | 0, sn | 0, on | 0) | 0),
              (on = Vt(nn | 0, ye | 0, hn | 0, er | 0) | 0),
              (er = ye),
              (hn = Ne),
              (_[hn >> 2] = 0),
              (_[(hn + 4) >> 2] = 0),
              (hn = Vt(((er >> 31) >>> 6) | 0, 0, on | 0, er | 0) | 0),
              (nn = qt(hn | 0, ye | 0, 26) | 0),
              (hn = ye),
              (sn = zt(nn | 0, hn | 0, 26) | 0),
              (fn = Ut(on | 0, er | 0, sn | 0, ye | 0) | 0),
              (sn = ye),
              (er = $),
              (_[er >> 2] = fn),
              (_[(er + 4) >> 2] = sn),
              (er = Pe),
              (on =
                Vt(nn | 0, hn | 0, _[er >> 2] | 0, _[(er + 4) >> 2] | 0) | 0),
              (er = ye),
              (hn = Pe),
              (_[hn >> 2] = on),
              (_[(hn + 4) >> 2] = er),
              (hn = Me),
              (nn = _[hn >> 2] | 0),
              (qn = _[(hn + 4) >> 2] | 0),
              (hn = we),
              (xn = _[hn >> 2] | 0),
              (Vn = _[(hn + 4) >> 2] | 0),
              (hn = Jt(nn | 0, qn | 0, 18, 0) | 0),
              (Nn = ye),
              (Cn = Vt(xn | 0, Vn | 0, nn | 0, qn | 0) | 0),
              (qn = Vt(Cn | 0, ye | 0, hn | 0, Nn | 0) | 0),
              (Nn = we),
              (_[Nn >> 2] = qn),
              (_[(Nn + 4) >> 2] = ye),
              (Nn = Ae),
              (qn = _[Nn >> 2] | 0),
              (hn = _[(Nn + 4) >> 2] | 0),
              (Nn = Fe),
              (Cn = _[Nn >> 2] | 0),
              (nn = _[(Nn + 4) >> 2] | 0),
              (Nn = Jt(qn | 0, hn | 0, 18, 0) | 0),
              (Vn = ye),
              (xn = Vt(Cn | 0, nn | 0, qn | 0, hn | 0) | 0),
              (hn = Vt(xn | 0, ye | 0, Nn | 0, Vn | 0) | 0),
              (Vn = Fe),
              (_[Vn >> 2] = hn),
              (_[(Vn + 4) >> 2] = ye),
              (Vn = Oe),
              (hn = _[Vn >> 2] | 0),
              (Nn = _[(Vn + 4) >> 2] | 0),
              (Vn = Be),
              (xn = _[Vn >> 2] | 0),
              (qn = _[(Vn + 4) >> 2] | 0),
              (Vn = Jt(hn | 0, Nn | 0, 18, 0) | 0),
              (nn = ye),
              (Cn = Vt(xn | 0, qn | 0, hn | 0, Nn | 0) | 0),
              (Nn = Vt(Cn | 0, ye | 0, Vn | 0, nn | 0) | 0),
              (nn = Be),
              (_[nn >> 2] = Nn),
              (_[(nn + 4) >> 2] = ye),
              (nn = We),
              (Nn = _[nn >> 2] | 0),
              (Vn = _[(nn + 4) >> 2] | 0),
              (nn = qe),
              (Cn = _[nn >> 2] | 0),
              (hn = _[(nn + 4) >> 2] | 0),
              (nn = Jt(Nn | 0, Vn | 0, 18, 0) | 0),
              (qn = ye),
              (xn = Vt(Cn | 0, hn | 0, Nn | 0, Vn | 0) | 0),
              (Vn = Vt(xn | 0, ye | 0, nn | 0, qn | 0) | 0),
              (qn = qe),
              (_[qn >> 2] = Vn),
              (_[(qn + 4) >> 2] = ye),
              (qn = Ve),
              (Vn = _[qn >> 2] | 0),
              (nn = _[(qn + 4) >> 2] | 0),
              (qn = He),
              (xn = _[qn >> 2] | 0),
              (Nn = _[(qn + 4) >> 2] | 0),
              (qn = Jt(Vn | 0, nn | 0, 18, 0) | 0),
              (hn = ye),
              (Cn = Vt(xn | 0, Nn | 0, Vn | 0, nn | 0) | 0),
              (nn = Vt(Cn | 0, ye | 0, qn | 0, hn | 0) | 0),
              (hn = He),
              (_[hn >> 2] = nn),
              (_[(hn + 4) >> 2] = ye),
              (hn = Ge),
              (nn = _[hn >> 2] | 0),
              (qn = _[(hn + 4) >> 2] | 0),
              (hn = ze),
              (Cn = _[hn >> 2] | 0),
              (Vn = _[(hn + 4) >> 2] | 0),
              (hn = Jt(nn | 0, qn | 0, 18, 0) | 0),
              (Nn = ye),
              (xn = Vt(Cn | 0, Vn | 0, nn | 0, qn | 0) | 0),
              (qn = Vt(xn | 0, ye | 0, hn | 0, Nn | 0) | 0),
              (Nn = ze),
              (_[Nn >> 2] = qn),
              (_[(Nn + 4) >> 2] = ye),
              (Nn = je),
              (qn = _[Nn >> 2] | 0),
              (hn = _[(Nn + 4) >> 2] | 0),
              (Nn = Ke),
              (xn = _[Nn >> 2] | 0),
              (nn = _[(Nn + 4) >> 2] | 0),
              (Nn = Jt(qn | 0, hn | 0, 18, 0) | 0),
              (Vn = ye),
              (Cn = Vt(xn | 0, nn | 0, qn | 0, hn | 0) | 0),
              (hn = Vt(Cn | 0, ye | 0, Nn | 0, Vn | 0) | 0),
              (Vn = Ke),
              (_[Vn >> 2] = hn),
              (_[(Vn + 4) >> 2] = ye),
              (Vn = Qe),
              (hn = _[Vn >> 2] | 0),
              (Nn = _[(Vn + 4) >> 2] | 0),
              (Vn = Xe),
              (Cn = _[Vn >> 2] | 0),
              (qn = _[(Vn + 4) >> 2] | 0),
              (Vn = Jt(hn | 0, Nn | 0, 18, 0) | 0),
              (nn = ye),
              (xn = Vt(Cn | 0, qn | 0, hn | 0, Nn | 0) | 0),
              (Nn = Vt(xn | 0, ye | 0, Vn | 0, nn | 0) | 0),
              (nn = Xe),
              (_[nn >> 2] = Nn),
              (_[(nn + 4) >> 2] = ye),
              (nn = Ye),
              (Nn = _[nn >> 2] | 0),
              (Vn = _[(nn + 4) >> 2] | 0),
              (nn = Q),
              (xn = _[nn >> 2] | 0),
              (hn = _[(nn + 4) >> 2] | 0),
              (nn = Jt(Nn | 0, Vn | 0, 18, 0) | 0),
              (qn = ye),
              (Cn = Vt(xn | 0, hn | 0, Nn | 0, Vn | 0) | 0),
              (Vn = Vt(Cn | 0, ye | 0, nn | 0, qn | 0) | 0),
              (qn = ye),
              (nn = Q),
              (_[nn >> 2] = Vn),
              (_[(nn + 4) >> 2] = qn),
              (nn = Ye),
              (_[nn >> 2] = 0),
              (_[(nn + 4) >> 2] = 0),
              (nn = qn),
              (qn = Vn),
              (Vn = 0));
            do
              ((Cn = Vt(((nn >> 31) >>> 6) | 0, 0, qn | 0, nn | 0) | 0),
                (Nn = qt(Cn | 0, ye | 0, 26) | 0),
                (Cn = ye),
                (hn = zt(Nn | 0, Cn | 0, 26) | 0),
                (xn = Ut(qn | 0, nn | 0, hn | 0, ye | 0) | 0),
                (hn = (Q + (Vn << 3)) | 0),
                (_[hn >> 2] = xn),
                (_[(hn + 4) >> 2] = ye),
                (hn = (Q + ((Vn | 1) << 3)) | 0),
                (xn = hn),
                (tn =
                  Vt(Nn | 0, Cn | 0, _[xn >> 2] | 0, _[(xn + 4) >> 2] | 0) | 0),
                (xn = ye),
                (Cn = Vt(((xn >> 31) >>> 7) | 0, 0, tn | 0, xn | 0) | 0),
                (Nn = qt(Cn | 0, ye | 0, 25) | 0),
                (Cn = ye),
                (rn = zt(Nn | 0, Cn | 0, 25) | 0),
                (En = Ut(tn | 0, xn | 0, rn | 0, ye | 0) | 0),
                (rn = hn),
                (_[rn >> 2] = En),
                (_[(rn + 4) >> 2] = ye),
                (Vn = (Vn + 2) | 0),
                (rn = (Q + (Vn << 3)) | 0),
                (En = rn),
                (qn =
                  Vt(Nn | 0, Cn | 0, _[En >> 2] | 0, _[(En + 4) >> 2] | 0) | 0),
                (nn = ye),
                (En = rn),
                (_[En >> 2] = qn),
                (_[(En + 4) >> 2] = nn));
            while (Vn >>> 0 < 10);
            ((Vn = Ye),
              (nn = _[Vn >> 2] | 0),
              (qn = _[(Vn + 4) >> 2] | 0),
              (Vn = Q),
              (En = _[Vn >> 2] | 0),
              (rn = _[(Vn + 4) >> 2] | 0),
              (Vn = Jt(nn | 0, qn | 0, 18, 0) | 0),
              (Cn = ye),
              (Nn = Vt(En | 0, rn | 0, nn | 0, qn | 0) | 0),
              (qn = Vt(Nn | 0, ye | 0, Vn | 0, Cn | 0) | 0),
              (Cn = ye),
              (Vn = Ye),
              (_[Vn >> 2] = 0),
              (_[(Vn + 4) >> 2] = 0),
              (Vn = Vt(((Cn >> 31) >>> 6) | 0, 0, qn | 0, Cn | 0) | 0),
              (Nn = qt(Vn | 0, ye | 0, 26) | 0),
              (Vn = ye),
              (nn = zt(Nn | 0, Vn | 0, 26) | 0),
              (rn = Ut(qn | 0, Cn | 0, nn | 0, ye | 0) | 0),
              (nn = ye),
              (Cn = Xe),
              (qn =
                Vt(Nn | 0, Vn | 0, _[Cn >> 2] | 0, _[(Cn + 4) >> 2] | 0) | 0),
              (Cn = ye),
              (Vn = xe),
              (Nn = _[Vn >> 2] | 0),
              (En = _[(Vn + 4) >> 2] | 0),
              (Vn = Te),
              (hn = _[Vn >> 2] | 0),
              (xn = _[(Vn + 4) >> 2] | 0),
              (Vn = ke),
              (tn = _[Vn >> 2] | 0),
              (mn = _[(Vn + 4) >> 2] | 0),
              (Vn = he),
              (Hn = _[Vn >> 2] | 0),
              (wn = _[(Vn + 4) >> 2] | 0),
              (Vn = be),
              (An = _[Vn >> 2] | 0),
              (Kn = _[(Vn + 4) >> 2] | 0),
              (Vn = Re),
              (Sn = _[Vn >> 2] | 0),
              (Rn = _[(Vn + 4) >> 2] | 0),
              (Vn = o),
              (un = _[Vn >> 2] | 0),
              (Mn = _[(Vn + 4) >> 2] | 0),
              (Vn = Je),
              (Dn = _[Vn >> 2] | 0),
              (zn = _[(Vn + 4) >> 2] | 0),
              (Vn = Vt(rn | 0, nn | 0, fn | 0, sn | 0) | 0),
              (Gn = $),
              (_[Gn >> 2] = Vn),
              (_[(Gn + 4) >> 2] = ye),
              (Gn = Vt(qn | 0, Cn | 0, on | 0, er | 0) | 0),
              (Vn = Pe),
              (_[Vn >> 2] = Gn),
              (_[(Vn + 4) >> 2] = ye),
              (Vn = Ke),
              (Gn = _[Vn >> 2] | 0),
              (an = _[(Vn + 4) >> 2] | 0),
              (Vn = Vt(Gn | 0, an | 0, Nn | 0, En | 0) | 0),
              (cn = xe),
              (_[cn >> 2] = Vn),
              (_[(cn + 4) >> 2] = ye),
              (cn = ze),
              (Vn = _[cn >> 2] | 0),
              (Qn = _[(cn + 4) >> 2] | 0),
              (cn = Vt(Vn | 0, Qn | 0, hn | 0, xn | 0) | 0),
              (kn = Te),
              (_[kn >> 2] = cn),
              (_[(kn + 4) >> 2] = ye),
              (kn = He),
              (cn = _[kn >> 2] | 0),
              (yn = _[(kn + 4) >> 2] | 0),
              (kn = Vt(cn | 0, yn | 0, tn | 0, mn | 0) | 0),
              (Fn = ke),
              (_[Fn >> 2] = kn),
              (_[(Fn + 4) >> 2] = ye),
              (Fn = qe),
              (kn = _[Fn >> 2] | 0),
              (On = _[(Fn + 4) >> 2] | 0),
              (Fn = Vt(kn | 0, On | 0, Hn | 0, wn | 0) | 0),
              (Ln = he),
              (_[Ln >> 2] = Fn),
              (_[(Ln + 4) >> 2] = ye),
              (Ln = Be),
              (Fn = _[Ln >> 2] | 0),
              (jn = _[(Ln + 4) >> 2] | 0),
              (Ln = Vt(Fn | 0, jn | 0, An | 0, Kn | 0) | 0),
              (Tn = be),
              (_[Tn >> 2] = Ln),
              (_[(Tn + 4) >> 2] = ye),
              (Tn = Fe),
              (Ln = _[Tn >> 2] | 0),
              (_n = _[(Tn + 4) >> 2] | 0),
              (Tn = Vt(Ln | 0, _n | 0, Sn | 0, Rn | 0) | 0),
              (pn = Re),
              (_[pn >> 2] = Tn),
              (_[(pn + 4) >> 2] = ye),
              (pn = we),
              (Tn = _[pn >> 2] | 0),
              (Zn = _[(pn + 4) >> 2] | 0),
              (pn = Vt(Tn | 0, Zn | 0, un | 0, Mn | 0) | 0),
              (vn = o),
              (_[vn >> 2] = pn),
              (_[(vn + 4) >> 2] = ye),
              (vn = Ze),
              (pn = _[vn >> 2] | 0),
              (Xn = _[(vn + 4) >> 2] | 0),
              (vn = Vt(pn | 0, Xn | 0, Dn | 0, zn | 0) | 0),
              (Bn = Je),
              (_[Bn >> 2] = vn),
              (_[(Bn + 4) >> 2] = ye),
              (Bn = Ut(fn | 0, sn | 0, rn | 0, nn | 0) | 0),
              (nn = Q),
              (_[nn >> 2] = Bn),
              (_[(nn + 4) >> 2] = ye),
              (nn = Ut(on | 0, er | 0, qn | 0, Cn | 0) | 0),
              (Cn = Xe),
              (_[Cn >> 2] = nn),
              (_[(Cn + 4) >> 2] = ye),
              (Cn = Ut(Nn | 0, En | 0, Gn | 0, an | 0) | 0),
              (an = Ke),
              (_[an >> 2] = Cn),
              (_[(an + 4) >> 2] = ye),
              (an = Ut(hn | 0, xn | 0, Vn | 0, Qn | 0) | 0),
              (Qn = ze),
              (_[Qn >> 2] = an),
              (_[(Qn + 4) >> 2] = ye),
              (Qn = Ut(tn | 0, mn | 0, cn | 0, yn | 0) | 0),
              (yn = He),
              (_[yn >> 2] = Qn),
              (_[(yn + 4) >> 2] = ye),
              (yn = Ut(Hn | 0, wn | 0, kn | 0, On | 0) | 0),
              (On = qe),
              (_[On >> 2] = yn),
              (_[(On + 4) >> 2] = ye),
              (On = Ut(An | 0, Kn | 0, Fn | 0, jn | 0) | 0),
              (jn = Be),
              (_[jn >> 2] = On),
              (_[(jn + 4) >> 2] = ye),
              (jn = Ut(Sn | 0, Rn | 0, Ln | 0, _n | 0) | 0),
              (_n = Fe),
              (_[_n >> 2] = jn),
              (_[(_n + 4) >> 2] = ye),
              (_n = Ut(un | 0, Mn | 0, Tn | 0, Zn | 0) | 0),
              (Zn = we),
              (_[Zn >> 2] = _n),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = Ut(Dn | 0, zn | 0, pn | 0, Xn | 0) | 0),
              (Xn = Ze),
              (_[Xn >> 2] = Zn),
              (_[(Xn + 4) >> 2] = ye),
              kt(te, $),
              kt(ee, Q),
              Et(Q, ee, ce),
              (Xn = Me),
              (Zn = _[Xn >> 2] | 0),
              (pn = _[(Xn + 4) >> 2] | 0),
              (Xn = we),
              (zn = _[Xn >> 2] | 0),
              (Dn = _[(Xn + 4) >> 2] | 0),
              (Xn = Jt(Zn | 0, pn | 0, 18, 0) | 0),
              (_n = ye),
              (Tn = Vt(zn | 0, Dn | 0, Zn | 0, pn | 0) | 0),
              (pn = Vt(Tn | 0, ye | 0, Xn | 0, _n | 0) | 0),
              (_n = we),
              (_[_n >> 2] = pn),
              (_[(_n + 4) >> 2] = ye),
              (_n = Ae),
              (pn = _[_n >> 2] | 0),
              (Xn = _[(_n + 4) >> 2] | 0),
              (_n = Fe),
              (Tn = _[_n >> 2] | 0),
              (Zn = _[(_n + 4) >> 2] | 0),
              (_n = Jt(pn | 0, Xn | 0, 18, 0) | 0),
              (Dn = ye),
              (zn = Vt(Tn | 0, Zn | 0, pn | 0, Xn | 0) | 0),
              (Xn = Vt(zn | 0, ye | 0, _n | 0, Dn | 0) | 0),
              (Dn = Fe),
              (_[Dn >> 2] = Xn),
              (_[(Dn + 4) >> 2] = ye),
              (Dn = Oe),
              (Xn = _[Dn >> 2] | 0),
              (_n = _[(Dn + 4) >> 2] | 0),
              (Dn = Be),
              (zn = _[Dn >> 2] | 0),
              (pn = _[(Dn + 4) >> 2] | 0),
              (Dn = Jt(Xn | 0, _n | 0, 18, 0) | 0),
              (Zn = ye),
              (Tn = Vt(zn | 0, pn | 0, Xn | 0, _n | 0) | 0),
              (_n = Vt(Tn | 0, ye | 0, Dn | 0, Zn | 0) | 0),
              (Zn = Be),
              (_[Zn >> 2] = _n),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = We),
              (_n = _[Zn >> 2] | 0),
              (Dn = _[(Zn + 4) >> 2] | 0),
              (Zn = qe),
              (Tn = _[Zn >> 2] | 0),
              (Xn = _[(Zn + 4) >> 2] | 0),
              (Zn = Jt(_n | 0, Dn | 0, 18, 0) | 0),
              (pn = ye),
              (zn = Vt(Tn | 0, Xn | 0, _n | 0, Dn | 0) | 0),
              (Dn = Vt(zn | 0, ye | 0, Zn | 0, pn | 0) | 0),
              (pn = qe),
              (_[pn >> 2] = Dn),
              (_[(pn + 4) >> 2] = ye),
              (pn = Ve),
              (Dn = _[pn >> 2] | 0),
              (Zn = _[(pn + 4) >> 2] | 0),
              (pn = He),
              (zn = _[pn >> 2] | 0),
              (_n = _[(pn + 4) >> 2] | 0),
              (pn = Jt(Dn | 0, Zn | 0, 18, 0) | 0),
              (Xn = ye),
              (Tn = Vt(zn | 0, _n | 0, Dn | 0, Zn | 0) | 0),
              (Zn = Vt(Tn | 0, ye | 0, pn | 0, Xn | 0) | 0),
              (Xn = He),
              (_[Xn >> 2] = Zn),
              (_[(Xn + 4) >> 2] = ye),
              (Xn = Ge),
              (Zn = _[Xn >> 2] | 0),
              (pn = _[(Xn + 4) >> 2] | 0),
              (Xn = ze),
              (Tn = _[Xn >> 2] | 0),
              (Dn = _[(Xn + 4) >> 2] | 0),
              (Xn = Jt(Zn | 0, pn | 0, 18, 0) | 0),
              (_n = ye),
              (zn = Vt(Tn | 0, Dn | 0, Zn | 0, pn | 0) | 0),
              (pn = Vt(zn | 0, ye | 0, Xn | 0, _n | 0) | 0),
              (_n = ze),
              (_[_n >> 2] = pn),
              (_[(_n + 4) >> 2] = ye),
              (_n = je),
              (pn = _[_n >> 2] | 0),
              (Xn = _[(_n + 4) >> 2] | 0),
              (_n = Ke),
              (zn = _[_n >> 2] | 0),
              (Zn = _[(_n + 4) >> 2] | 0),
              (_n = Jt(pn | 0, Xn | 0, 18, 0) | 0),
              (Dn = ye),
              (Tn = Vt(zn | 0, Zn | 0, pn | 0, Xn | 0) | 0),
              (Xn = Vt(Tn | 0, ye | 0, _n | 0, Dn | 0) | 0),
              (Dn = Ke),
              (_[Dn >> 2] = Xn),
              (_[(Dn + 4) >> 2] = ye),
              (Dn = Qe),
              (Xn = _[Dn >> 2] | 0),
              (_n = _[(Dn + 4) >> 2] | 0),
              (Dn = Xe),
              (Tn = _[Dn >> 2] | 0),
              (pn = _[(Dn + 4) >> 2] | 0),
              (Dn = Jt(Xn | 0, _n | 0, 18, 0) | 0),
              (Zn = ye),
              (zn = Vt(Tn | 0, pn | 0, Xn | 0, _n | 0) | 0),
              (_n = Vt(zn | 0, ye | 0, Dn | 0, Zn | 0) | 0),
              (Zn = Xe),
              (_[Zn >> 2] = _n),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = Ye),
              (_n = _[Zn >> 2] | 0),
              (Dn = _[(Zn + 4) >> 2] | 0),
              (Zn = Q),
              (zn = _[Zn >> 2] | 0),
              (Xn = _[(Zn + 4) >> 2] | 0),
              (Zn = Jt(_n | 0, Dn | 0, 18, 0) | 0),
              (pn = ye),
              (Tn = Vt(zn | 0, Xn | 0, _n | 0, Dn | 0) | 0),
              (Dn = Vt(Tn | 0, ye | 0, Zn | 0, pn | 0) | 0),
              (pn = ye),
              (Zn = Q),
              (_[Zn >> 2] = Dn),
              (_[(Zn + 4) >> 2] = pn),
              (Zn = Ye),
              (_[Zn >> 2] = 0),
              (_[(Zn + 4) >> 2] = 0),
              (Zn = pn),
              (pn = Dn),
              (Dn = 0));
            do
              ((Tn = Vt(((Zn >> 31) >>> 6) | 0, 0, pn | 0, Zn | 0) | 0),
                (_n = qt(Tn | 0, ye | 0, 26) | 0),
                (Tn = ye),
                (Xn = zt(_n | 0, Tn | 0, 26) | 0),
                (zn = Ut(pn | 0, Zn | 0, Xn | 0, ye | 0) | 0),
                (Xn = (Q + (Dn << 3)) | 0),
                (_[Xn >> 2] = zn),
                (_[(Xn + 4) >> 2] = ye),
                (Xn = (Q + ((Dn | 1) << 3)) | 0),
                (zn = Xn),
                (Mn =
                  Vt(_n | 0, Tn | 0, _[zn >> 2] | 0, _[(zn + 4) >> 2] | 0) | 0),
                (zn = ye),
                (Tn = Vt(((zn >> 31) >>> 7) | 0, 0, Mn | 0, zn | 0) | 0),
                (_n = qt(Tn | 0, ye | 0, 25) | 0),
                (Tn = ye),
                (un = zt(_n | 0, Tn | 0, 25) | 0),
                (jn = Ut(Mn | 0, zn | 0, un | 0, ye | 0) | 0),
                (un = Xn),
                (_[un >> 2] = jn),
                (_[(un + 4) >> 2] = ye),
                (Dn = (Dn + 2) | 0),
                (un = (Q + (Dn << 3)) | 0),
                (jn = un),
                (pn =
                  Vt(_n | 0, Tn | 0, _[jn >> 2] | 0, _[(jn + 4) >> 2] | 0) | 0),
                (Zn = ye),
                (jn = un),
                (_[jn >> 2] = pn),
                (_[(jn + 4) >> 2] = Zn));
            while (Dn >>> 0 < 10);
            ((Dn = Ye),
              (Zn = _[Dn >> 2] | 0),
              (pn = _[(Dn + 4) >> 2] | 0),
              (Dn = Q),
              (er = _[Dn >> 2] | 0),
              (on = _[(Dn + 4) >> 2] | 0),
              (Dn = Jt(Zn | 0, pn | 0, 18, 0) | 0),
              (sn = ye),
              (fn = Vt(er | 0, on | 0, Zn | 0, pn | 0) | 0),
              (pn = Vt(fn | 0, ye | 0, Dn | 0, sn | 0) | 0),
              (sn = ye),
              (Dn = Ye),
              (_[Dn >> 2] = 0),
              (_[(Dn + 4) >> 2] = 0),
              (Dn = Vt(((sn >> 31) >>> 6) | 0, 0, pn | 0, sn | 0) | 0),
              (fn = qt(Dn | 0, ye | 0, 26) | 0),
              (Dn = ye),
              (Zn = zt(fn | 0, Dn | 0, 26) | 0),
              (on = Ut(pn | 0, sn | 0, Zn | 0, ye | 0) | 0),
              (Zn = Q),
              (_[Zn >> 2] = on),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = Xe),
              (on =
                Vt(fn | 0, Dn | 0, _[Zn >> 2] | 0, _[(Zn + 4) >> 2] | 0) | 0),
              (Zn = Xe),
              (_[Zn >> 2] = on),
              (_[(Zn + 4) >> 2] = ye),
              (fe = Ot),
              (ge = te),
              (r = (fe + 80) | 0));
            do
              ((_[fe >> 2] = _[ge >> 2]),
                (fe = (fe + 4) | 0),
                (ge = (ge + 4) | 0));
            while ((fe | 0) < (r | 0));
            ((fe = Wt), (ge = Q), (r = (fe + 80) | 0));
            do
              ((_[fe >> 2] = _[ge >> 2]),
                (fe = (fe + 4) | 0),
                (ge = (ge + 4) | 0));
            while ((fe | 0) < (r | 0));
            (kt(k, jt),
              kt(x, Qt),
              Et(Kt, k, x),
              (Zn = (Kt + 144) | 0),
              (on = _[Zn >> 2] | 0),
              (Dn = _[(Zn + 4) >> 2] | 0),
              (Zn = (Kt + 64) | 0),
              (fn = Zn),
              (sn = _[fn >> 2] | 0),
              (pn = _[(fn + 4) >> 2] | 0),
              (fn = Jt(on | 0, Dn | 0, 18, 0) | 0),
              (er = ye),
              (jn = Vt(sn | 0, pn | 0, on | 0, Dn | 0) | 0),
              (Dn = Vt(jn | 0, ye | 0, fn | 0, er | 0) | 0),
              (er = Zn),
              (_[er >> 2] = Dn),
              (_[(er + 4) >> 2] = ye),
              (er = (Kt + 136) | 0),
              (Dn = _[er >> 2] | 0),
              (Zn = _[(er + 4) >> 2] | 0),
              (er = (Kt + 56) | 0),
              (fn = er),
              (jn = _[fn >> 2] | 0),
              (on = _[(fn + 4) >> 2] | 0),
              (fn = Jt(Dn | 0, Zn | 0, 18, 0) | 0),
              (pn = ye),
              (sn = Vt(jn | 0, on | 0, Dn | 0, Zn | 0) | 0),
              (Zn = Vt(sn | 0, ye | 0, fn | 0, pn | 0) | 0),
              (pn = er),
              (_[pn >> 2] = Zn),
              (_[(pn + 4) >> 2] = ye),
              (pn = (Kt + 128) | 0),
              (Zn = _[pn >> 2] | 0),
              (er = _[(pn + 4) >> 2] | 0),
              (pn = (Kt + 48) | 0),
              (fn = pn),
              (sn = _[fn >> 2] | 0),
              (Dn = _[(fn + 4) >> 2] | 0),
              (fn = Jt(Zn | 0, er | 0, 18, 0) | 0),
              (on = ye),
              (jn = Vt(sn | 0, Dn | 0, Zn | 0, er | 0) | 0),
              (er = Vt(jn | 0, ye | 0, fn | 0, on | 0) | 0),
              (on = pn),
              (_[on >> 2] = er),
              (_[(on + 4) >> 2] = ye),
              (on = (Kt + 120) | 0),
              (er = _[on >> 2] | 0),
              (pn = _[(on + 4) >> 2] | 0),
              (on = (Kt + 40) | 0),
              (fn = on),
              (jn = _[fn >> 2] | 0),
              (Zn = _[(fn + 4) >> 2] | 0),
              (fn = Jt(er | 0, pn | 0, 18, 0) | 0),
              (Dn = ye),
              (sn = Vt(jn | 0, Zn | 0, er | 0, pn | 0) | 0),
              (pn = Vt(sn | 0, ye | 0, fn | 0, Dn | 0) | 0),
              (Dn = on),
              (_[Dn >> 2] = pn),
              (_[(Dn + 4) >> 2] = ye),
              (Dn = (Kt + 112) | 0),
              (pn = _[Dn >> 2] | 0),
              (on = _[(Dn + 4) >> 2] | 0),
              (Dn = (Kt + 32) | 0),
              (fn = Dn),
              (sn = _[fn >> 2] | 0),
              (er = _[(fn + 4) >> 2] | 0),
              (fn = Jt(pn | 0, on | 0, 18, 0) | 0),
              (Zn = ye),
              (jn = Vt(sn | 0, er | 0, pn | 0, on | 0) | 0),
              (on = Vt(jn | 0, ye | 0, fn | 0, Zn | 0) | 0),
              (Zn = Dn),
              (_[Zn >> 2] = on),
              (_[(Zn + 4) >> 2] = ye),
              (Zn = (Kt + 104) | 0),
              (on = _[Zn >> 2] | 0),
              (Dn = _[(Zn + 4) >> 2] | 0),
              (Zn = (Kt + 24) | 0),
              (fn = Zn),
              (jn = _[fn >> 2] | 0),
              (pn = _[(fn + 4) >> 2] | 0),
              (fn = Jt(on | 0, Dn | 0, 18, 0) | 0),
              (er = ye),
              (sn = Vt(jn | 0, pn | 0, on | 0, Dn | 0) | 0),
              (Dn = Vt(sn | 0, ye | 0, fn | 0, er | 0) | 0),
              (er = Zn),
              (_[er >> 2] = Dn),
              (_[(er + 4) >> 2] = ye),
              (er = (Kt + 96) | 0),
              (Dn = _[er >> 2] | 0),
              (Zn = _[(er + 4) >> 2] | 0),
              (er = (Kt + 16) | 0),
              (fn = er),
              (sn = _[fn >> 2] | 0),
              (on = _[(fn + 4) >> 2] | 0),
              (fn = Jt(Dn | 0, Zn | 0, 18, 0) | 0),
              (pn = ye),
              (jn = Vt(sn | 0, on | 0, Dn | 0, Zn | 0) | 0),
              (Zn = Vt(jn | 0, ye | 0, fn | 0, pn | 0) | 0),
              (pn = er),
              (_[pn >> 2] = Zn),
              (_[(pn + 4) >> 2] = ye),
              (pn = (Kt + 88) | 0),
              (Zn = _[pn >> 2] | 0),
              (er = _[(pn + 4) >> 2] | 0),
              (pn = (Kt + 8) | 0),
              (fn = pn),
              (jn = _[fn >> 2] | 0),
              (Dn = _[(fn + 4) >> 2] | 0),
              (fn = Jt(Zn | 0, er | 0, 18, 0) | 0),
              (on = ye),
              (sn = Vt(jn | 0, Dn | 0, Zn | 0, er | 0) | 0),
              (er = Vt(sn | 0, ye | 0, fn | 0, on | 0) | 0),
              (on = pn),
              (_[on >> 2] = er),
              (_[(on + 4) >> 2] = ye),
              (on = (Kt + 80) | 0),
              (er = on),
              (fn = _[er >> 2] | 0),
              (sn = _[(er + 4) >> 2] | 0),
              (er = Kt),
              (Zn = _[er >> 2] | 0),
              (Dn = _[(er + 4) >> 2] | 0),
              (er = Jt(fn | 0, sn | 0, 18, 0) | 0),
              (jn = ye),
              (un = Vt(Zn | 0, Dn | 0, fn | 0, sn | 0) | 0),
              (sn = Vt(un | 0, ye | 0, er | 0, jn | 0) | 0),
              (jn = ye),
              (er = Kt),
              (_[er >> 2] = sn),
              (_[(er + 4) >> 2] = jn),
              (er = on),
              (_[er >> 2] = 0),
              (_[(er + 4) >> 2] = 0),
              (er = jn),
              (jn = sn),
              (sn = 0));
            do
              ((un = Vt(((er >> 31) >>> 6) | 0, 0, jn | 0, er | 0) | 0),
                (fn = qt(un | 0, ye | 0, 26) | 0),
                (un = ye),
                (Dn = zt(fn | 0, un | 0, 26) | 0),
                (Zn = Ut(jn | 0, er | 0, Dn | 0, ye | 0) | 0),
                (Dn = (Kt + (sn << 3)) | 0),
                (_[Dn >> 2] = Zn),
                (_[(Dn + 4) >> 2] = ye),
                (Dn = (Kt + ((sn | 1) << 3)) | 0),
                (Zn = Dn),
                (Tn =
                  Vt(fn | 0, un | 0, _[Zn >> 2] | 0, _[(Zn + 4) >> 2] | 0) | 0),
                (Zn = ye),
                (un = Vt(((Zn >> 31) >>> 7) | 0, 0, Tn | 0, Zn | 0) | 0),
                (fn = qt(un | 0, ye | 0, 25) | 0),
                (un = ye),
                (_n = zt(fn | 0, un | 0, 25) | 0),
                (Xn = Ut(Tn | 0, Zn | 0, _n | 0, ye | 0) | 0),
                (_n = Dn),
                (_[_n >> 2] = Xn),
                (_[(_n + 4) >> 2] = ye),
                (sn = (sn + 2) | 0),
                (_n = (Kt + (sn << 3)) | 0),
                (Xn = _n),
                (jn =
                  Vt(fn | 0, un | 0, _[Xn >> 2] | 0, _[(Xn + 4) >> 2] | 0) | 0),
                (er = ye),
                (Xn = _n),
                (_[Xn >> 2] = jn),
                (_[(Xn + 4) >> 2] = er));
            while (sn >>> 0 < 10);
            ((sn = on),
              (er = _[sn >> 2] | 0),
              (jn = _[(sn + 4) >> 2] | 0),
              (sn = Kt),
              (Xn = _[sn >> 2] | 0),
              (_n = _[(sn + 4) >> 2] | 0),
              (sn = Jt(er | 0, jn | 0, 18, 0) | 0),
              (un = ye),
              (fn = Vt(Xn | 0, _n | 0, er | 0, jn | 0) | 0),
              (jn = Vt(fn | 0, ye | 0, sn | 0, un | 0) | 0),
              (un = ye),
              (sn = on),
              (_[sn >> 2] = 0),
              (_[(sn + 4) >> 2] = 0),
              (sn = Vt(((un >> 31) >>> 6) | 0, 0, jn | 0, un | 0) | 0),
              (fn = qt(sn | 0, ye | 0, 26) | 0),
              (sn = ye),
              (er = zt(fn | 0, sn | 0, 26) | 0),
              (_n = Ut(jn | 0, un | 0, er | 0, ye | 0) | 0),
              (er = Kt),
              (_[er >> 2] = _n),
              (_[(er + 4) >> 2] = ye),
              (er = pn),
              (_n =
                Vt(fn | 0, sn | 0, _[er >> 2] | 0, _[(er + 4) >> 2] | 0) | 0),
              (er = pn),
              (_[er >> 2] = _n),
              (_[(er + 4) >> 2] = ye),
              (er = k),
              (_n = _[er >> 2] | 0),
              (sn = _[(er + 4) >> 2] | 0),
              (er = x),
              (fn =
                Ut(_n | 0, sn | 0, _[er >> 2] | 0, _[(er + 4) >> 2] | 0) | 0),
              (er = ye),
              (un = x),
              (_[un >> 2] = fn),
              (_[(un + 4) >> 2] = er),
              (un = et),
              (jn = _[un >> 2] | 0),
              (Xn = _[(un + 4) >> 2] | 0),
              (un = tt),
              (Dn =
                Ut(jn | 0, Xn | 0, _[un >> 2] | 0, _[(un + 4) >> 2] | 0) | 0),
              (un = ye),
              (Zn = tt),
              (_[Zn >> 2] = Dn),
              (_[(Zn + 4) >> 2] = un),
              (Zn = nt),
              (Tn = _[Zn >> 2] | 0),
              (zn = _[(Zn + 4) >> 2] | 0),
              (Zn = rt),
              (Mn =
                Ut(Tn | 0, zn | 0, _[Zn >> 2] | 0, _[(Zn + 4) >> 2] | 0) | 0),
              (Zn = ye),
              (Ln = rt),
              (_[Ln >> 2] = Mn),
              (_[(Ln + 4) >> 2] = Zn),
              (Ln = ot),
              (Rn = _[Ln >> 2] | 0),
              (Sn = _[(Ln + 4) >> 2] | 0),
              (Ln = at),
              (On =
                Ut(Rn | 0, Sn | 0, _[Ln >> 2] | 0, _[(Ln + 4) >> 2] | 0) | 0),
              (Ln = ye),
              (Fn = at),
              (_[Fn >> 2] = On),
              (_[(Fn + 4) >> 2] = Ln),
              (Fn = it),
              (Kn = _[Fn >> 2] | 0),
              (An = _[(Fn + 4) >> 2] | 0),
              (Fn = lt),
              (yn =
                Ut(Kn | 0, An | 0, _[Fn >> 2] | 0, _[(Fn + 4) >> 2] | 0) | 0),
              (Fn = ye),
              (kn = lt),
              (_[kn >> 2] = yn),
              (_[(kn + 4) >> 2] = Fn),
              (kn = st),
              (wn = _[kn >> 2] | 0),
              (Hn = _[(kn + 4) >> 2] | 0),
              (kn = ut),
              (Qn =
                Ut(wn | 0, Hn | 0, _[kn >> 2] | 0, _[(kn + 4) >> 2] | 0) | 0),
              (kn = ye),
              (cn = ut),
              (_[cn >> 2] = Qn),
              (_[(cn + 4) >> 2] = kn),
              (cn = ct),
              (mn = _[cn >> 2] | 0),
              (tn = _[(cn + 4) >> 2] | 0),
              (cn = dt),
              (an =
                Ut(mn | 0, tn | 0, _[cn >> 2] | 0, _[(cn + 4) >> 2] | 0) | 0),
              (cn = ye),
              (Vn = dt),
              (_[Vn >> 2] = an),
              (_[(Vn + 4) >> 2] = cn),
              (Vn = mt),
              (xn = _[Vn >> 2] | 0),
              (hn = _[(Vn + 4) >> 2] | 0),
              (Vn = pt),
              (Cn =
                Ut(xn | 0, hn | 0, _[Vn >> 2] | 0, _[(Vn + 4) >> 2] | 0) | 0),
              (Vn = ye),
              (Gn = pt),
              (_[Gn >> 2] = Cn),
              (_[(Gn + 4) >> 2] = Vn),
              (Gn = _t),
              (En = _[Gn >> 2] | 0),
              (Nn = _[(Gn + 4) >> 2] | 0),
              (Gn = ft),
              (nn =
                Ut(En | 0, Nn | 0, _[Gn >> 2] | 0, _[(Gn + 4) >> 2] | 0) | 0),
              (Gn = ye),
              (qn = ft),
              (_[qn >> 2] = nn),
              (_[(qn + 4) >> 2] = Gn),
              (qn = gt),
              (Bn = _[qn >> 2] | 0),
              (rn = _[(qn + 4) >> 2] | 0),
              (qn = ht),
              (vn =
                Ut(Bn | 0, rn | 0, _[qn >> 2] | 0, _[(qn + 4) >> 2] | 0) | 0),
              (qn = ye),
              (Wn = ht),
              (_[Wn >> 2] = vn),
              (_[(Wn + 4) >> 2] = qn),
              (fe = yt),
              (r = (fe + 72) | 0));
            do ((_[fe >> 2] = 0), (fe = (fe + 4) | 0));
            while ((fe | 0) < (r | 0));
            ((pn = Jt(fn | 0, er | 0, 121665, 0) | 0),
              (on = ye),
              (Wn = C),
              (_[Wn >> 2] = pn),
              (_[(Wn + 4) >> 2] = on),
              (Wn = Jt(Dn | 0, un | 0, 121665, 0) | 0),
              (ln = Ct),
              (_[ln >> 2] = Wn),
              (_[(ln + 4) >> 2] = ye),
              (ln = Jt(Mn | 0, Zn | 0, 121665, 0) | 0),
              (Wn = bt),
              (_[Wn >> 2] = ln),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = Jt(On | 0, Ln | 0, 121665, 0) | 0),
              (ln = vt),
              (_[ln >> 2] = Wn),
              (_[(ln + 4) >> 2] = ye),
              (ln = Jt(yn | 0, Fn | 0, 121665, 0) | 0),
              (Wn = St),
              (_[Wn >> 2] = ln),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = Jt(Qn | 0, kn | 0, 121665, 0) | 0),
              (ln = Rt),
              (_[ln >> 2] = Wn),
              (_[(ln + 4) >> 2] = ye),
              (ln = Jt(an | 0, cn | 0, 121665, 0) | 0),
              (Wn = It),
              (_[Wn >> 2] = ln),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = Jt(Cn | 0, Vn | 0, 121665, 0) | 0),
              (ln = Tt),
              (_[ln >> 2] = Wn),
              (_[(ln + 4) >> 2] = ye),
              (ln = Jt(nn | 0, Gn | 0, 121665, 0) | 0),
              (Wn = Dt),
              (_[Wn >> 2] = ln),
              (_[(Wn + 4) >> 2] = ye),
              (Wn = Jt(vn | 0, qn | 0, 121665, 0) | 0),
              (ln = xt),
              (_[ln >> 2] = Wn),
              (_[(ln + 4) >> 2] = ye),
              (ln = yt),
              (_[ln >> 2] = 0),
              (_[(ln + 4) >> 2] = 0),
              (ln = on),
              (on = pn),
              (pn = 0));
            do
              ((Wn = Vt(((ln >> 31) >>> 6) | 0, 0, on | 0, ln | 0) | 0),
                ($n = qt(Wn | 0, ye | 0, 26) | 0),
                (Wn = ye),
                (Pn = zt($n | 0, Wn | 0, 26) | 0),
                (In = Ut(on | 0, ln | 0, Pn | 0, ye | 0) | 0),
                (Pn = (C + (pn << 3)) | 0),
                (_[Pn >> 2] = In),
                (_[(Pn + 4) >> 2] = ye),
                (Pn = (C + ((pn | 1) << 3)) | 0),
                (In = Pn),
                (gn =
                  Vt($n | 0, Wn | 0, _[In >> 2] | 0, _[(In + 4) >> 2] | 0) | 0),
                (In = ye),
                (Wn = Vt(((In >> 31) >>> 7) | 0, 0, gn | 0, In | 0) | 0),
                ($n = qt(Wn | 0, ye | 0, 25) | 0),
                (Wn = ye),
                (Jn = zt($n | 0, Wn | 0, 25) | 0),
                (Yn = Ut(gn | 0, In | 0, Jn | 0, ye | 0) | 0),
                (Jn = Pn),
                (_[Jn >> 2] = Yn),
                (_[(Jn + 4) >> 2] = ye),
                (pn = (pn + 2) | 0),
                (Jn = (C + (pn << 3)) | 0),
                (Yn = Jn),
                (on =
                  Vt($n | 0, Wn | 0, _[Yn >> 2] | 0, _[(Yn + 4) >> 2] | 0) | 0),
                (ln = ye),
                (Yn = Jn),
                (_[Yn >> 2] = on),
                (_[(Yn + 4) >> 2] = ln));
            while (pn >>> 0 < 10);
            ((pn = yt),
              (ln = _[pn >> 2] | 0),
              (on = _[(pn + 4) >> 2] | 0),
              (pn = C),
              (qn = _[pn >> 2] | 0),
              (vn = _[(pn + 4) >> 2] | 0),
              (pn = Jt(ln | 0, on | 0, 18, 0) | 0),
              (Gn = ye),
              (nn = Vt(qn | 0, vn | 0, ln | 0, on | 0) | 0),
              (on = Vt(nn | 0, ye | 0, pn | 0, Gn | 0) | 0),
              (Gn = ye),
              (pn = yt),
              (_[pn >> 2] = 0),
              (_[(pn + 4) >> 2] = 0),
              (pn = Vt(((Gn >> 31) >>> 6) | 0, 0, on | 0, Gn | 0) | 0),
              (nn = qt(pn | 0, ye | 0, 26) | 0),
              (pn = ye),
              (ln = zt(nn | 0, pn | 0, 26) | 0),
              (vn = ye),
              (qn = Ct),
              (Vn = _[qn >> 2] | 0),
              (Cn = _[(qn + 4) >> 2] | 0),
              (qn = Vt(on | 0, Gn | 0, _n | 0, sn | 0) | 0),
              (Gn = Ut(qn | 0, ye | 0, ln | 0, vn | 0) | 0),
              (vn = C),
              (_[vn >> 2] = Gn),
              (_[(vn + 4) >> 2] = ye),
              (vn = Vt(Vn | 0, Cn | 0, jn | 0, Xn | 0) | 0),
              (Cn = Vt(vn | 0, ye | 0, nn | 0, pn | 0) | 0),
              (pn = Ct),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = bt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, Tn | 0, zn | 0) | 0),
              (pn = bt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = vt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, Rn | 0, Sn | 0) | 0),
              (pn = vt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = St),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, Kn | 0, An | 0) | 0),
              (pn = St),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = Rt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, wn | 0, Hn | 0) | 0),
              (pn = Rt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = It),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, mn | 0, tn | 0) | 0),
              (pn = It),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = Tt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, xn | 0, hn | 0) | 0),
              (pn = Tt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = Dt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, En | 0, Nn | 0) | 0),
              (pn = Dt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = xt),
              (Cn =
                Vt(_[pn >> 2] | 0, _[(pn + 4) >> 2] | 0, Bn | 0, rn | 0) | 0),
              (pn = xt),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              Et(Xt, x, C),
              (pn = (Xt + 144) | 0),
              (Cn = _[pn >> 2] | 0),
              (nn = _[(pn + 4) >> 2] | 0),
              (pn = (Xt + 64) | 0),
              (vn = pn),
              (Vn = _[vn >> 2] | 0),
              (Gn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(Cn | 0, nn | 0, 18, 0) | 0),
              (ln = ye),
              (qn = Vt(Vn | 0, Gn | 0, Cn | 0, nn | 0) | 0),
              (nn = Vt(qn | 0, ye | 0, vn | 0, ln | 0) | 0),
              (ln = pn),
              (_[ln >> 2] = nn),
              (_[(ln + 4) >> 2] = ye),
              (ln = (Xt + 136) | 0),
              (nn = _[ln >> 2] | 0),
              (pn = _[(ln + 4) >> 2] | 0),
              (ln = (Xt + 56) | 0),
              (vn = ln),
              (qn = _[vn >> 2] | 0),
              (Cn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(nn | 0, pn | 0, 18, 0) | 0),
              (Gn = ye),
              (Vn = Vt(qn | 0, Cn | 0, nn | 0, pn | 0) | 0),
              (pn = Vt(Vn | 0, ye | 0, vn | 0, Gn | 0) | 0),
              (Gn = ln),
              (_[Gn >> 2] = pn),
              (_[(Gn + 4) >> 2] = ye),
              (Gn = (Xt + 128) | 0),
              (pn = _[Gn >> 2] | 0),
              (ln = _[(Gn + 4) >> 2] | 0),
              (Gn = (Xt + 48) | 0),
              (vn = Gn),
              (Vn = _[vn >> 2] | 0),
              (nn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(pn | 0, ln | 0, 18, 0) | 0),
              (Cn = ye),
              (qn = Vt(Vn | 0, nn | 0, pn | 0, ln | 0) | 0),
              (ln = Vt(qn | 0, ye | 0, vn | 0, Cn | 0) | 0),
              (Cn = Gn),
              (_[Cn >> 2] = ln),
              (_[(Cn + 4) >> 2] = ye),
              (Cn = (Xt + 120) | 0),
              (ln = _[Cn >> 2] | 0),
              (Gn = _[(Cn + 4) >> 2] | 0),
              (Cn = (Xt + 40) | 0),
              (vn = Cn),
              (qn = _[vn >> 2] | 0),
              (pn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(ln | 0, Gn | 0, 18, 0) | 0),
              (nn = ye),
              (Vn = Vt(qn | 0, pn | 0, ln | 0, Gn | 0) | 0),
              (Gn = Vt(Vn | 0, ye | 0, vn | 0, nn | 0) | 0),
              (nn = Cn),
              (_[nn >> 2] = Gn),
              (_[(nn + 4) >> 2] = ye),
              (nn = (Xt + 112) | 0),
              (Gn = _[nn >> 2] | 0),
              (Cn = _[(nn + 4) >> 2] | 0),
              (nn = (Xt + 32) | 0),
              (vn = nn),
              (Vn = _[vn >> 2] | 0),
              (ln = _[(vn + 4) >> 2] | 0),
              (vn = Jt(Gn | 0, Cn | 0, 18, 0) | 0),
              (pn = ye),
              (qn = Vt(Vn | 0, ln | 0, Gn | 0, Cn | 0) | 0),
              (Cn = Vt(qn | 0, ye | 0, vn | 0, pn | 0) | 0),
              (pn = nn),
              (_[pn >> 2] = Cn),
              (_[(pn + 4) >> 2] = ye),
              (pn = (Xt + 104) | 0),
              (Cn = _[pn >> 2] | 0),
              (nn = _[(pn + 4) >> 2] | 0),
              (pn = (Xt + 24) | 0),
              (vn = pn),
              (qn = _[vn >> 2] | 0),
              (Gn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(Cn | 0, nn | 0, 18, 0) | 0),
              (ln = ye),
              (Vn = Vt(qn | 0, Gn | 0, Cn | 0, nn | 0) | 0),
              (nn = Vt(Vn | 0, ye | 0, vn | 0, ln | 0) | 0),
              (ln = pn),
              (_[ln >> 2] = nn),
              (_[(ln + 4) >> 2] = ye),
              (ln = (Xt + 96) | 0),
              (nn = _[ln >> 2] | 0),
              (pn = _[(ln + 4) >> 2] | 0),
              (ln = (Xt + 16) | 0),
              (vn = ln),
              (Vn = _[vn >> 2] | 0),
              (Cn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(nn | 0, pn | 0, 18, 0) | 0),
              (Gn = ye),
              (qn = Vt(Vn | 0, Cn | 0, nn | 0, pn | 0) | 0),
              (pn = Vt(qn | 0, ye | 0, vn | 0, Gn | 0) | 0),
              (Gn = ln),
              (_[Gn >> 2] = pn),
              (_[(Gn + 4) >> 2] = ye),
              (Gn = (Xt + 88) | 0),
              (pn = _[Gn >> 2] | 0),
              (ln = _[(Gn + 4) >> 2] | 0),
              (Gn = (Xt + 8) | 0),
              (vn = Gn),
              (qn = _[vn >> 2] | 0),
              (nn = _[(vn + 4) >> 2] | 0),
              (vn = Jt(pn | 0, ln | 0, 18, 0) | 0),
              (Cn = ye),
              (Vn = Vt(qn | 0, nn | 0, pn | 0, ln | 0) | 0),
              (ln = Vt(Vn | 0, ye | 0, vn | 0, Cn | 0) | 0),
              (Cn = Gn),
              (_[Cn >> 2] = ln),
              (_[(Cn + 4) >> 2] = ye),
              (Cn = (Xt + 80) | 0),
              (ln = Cn),
              (vn = _[ln >> 2] | 0),
              (Vn = _[(ln + 4) >> 2] | 0),
              (ln = Xt),
              (pn = _[ln >> 2] | 0),
              (nn = _[(ln + 4) >> 2] | 0),
              (ln = Jt(vn | 0, Vn | 0, 18, 0) | 0),
              (qn = ye),
              (on = Vt(pn | 0, nn | 0, vn | 0, Vn | 0) | 0),
              (Vn = Vt(on | 0, ye | 0, ln | 0, qn | 0) | 0),
              (qn = ye),
              (ln = Xt),
              (_[ln >> 2] = Vn),
              (_[(ln + 4) >> 2] = qn),
              (ln = Cn),
              (_[ln >> 2] = 0),
              (_[(ln + 4) >> 2] = 0),
              (ln = qn),
              (qn = Vn),
              (Vn = 0));
            do
              ((on = Vt(((ln >> 31) >>> 6) | 0, 0, qn | 0, ln | 0) | 0),
                (vn = qt(on | 0, ye | 0, 26) | 0),
                (on = ye),
                (nn = zt(vn | 0, on | 0, 26) | 0),
                (pn = Ut(qn | 0, ln | 0, nn | 0, ye | 0) | 0),
                (nn = (Xt + (Vn << 3)) | 0),
                (_[nn >> 2] = pn),
                (_[(nn + 4) >> 2] = ye),
                (nn = (Xt + ((Vn | 1) << 3)) | 0),
                (pn = nn),
                (cn =
                  Vt(vn | 0, on | 0, _[pn >> 2] | 0, _[(pn + 4) >> 2] | 0) | 0),
                (pn = ye),
                (on = Vt(((pn >> 31) >>> 7) | 0, 0, cn | 0, pn | 0) | 0),
                (vn = qt(on | 0, ye | 0, 25) | 0),
                (on = ye),
                (an = zt(vn | 0, on | 0, 25) | 0),
                (kn = Ut(cn | 0, pn | 0, an | 0, ye | 0) | 0),
                (an = nn),
                (_[an >> 2] = kn),
                (_[(an + 4) >> 2] = ye),
                (Vn = (Vn + 2) | 0),
                (an = (Xt + (Vn << 3)) | 0),
                (kn = an),
                (qn =
                  Vt(vn | 0, on | 0, _[kn >> 2] | 0, _[(kn + 4) >> 2] | 0) | 0),
                (ln = ye),
                (kn = an),
                (_[kn >> 2] = qn),
                (_[(kn + 4) >> 2] = ln));
            while (Vn >>> 0 < 10);
            ((Vn = Cn),
              (ln = _[Vn >> 2] | 0),
              (qn = _[(Vn + 4) >> 2] | 0),
              (Vn = Xt),
              (rn = _[Vn >> 2] | 0),
              (Bn = _[(Vn + 4) >> 2] | 0),
              (Vn = Jt(ln | 0, qn | 0, 18, 0) | 0),
              (Nn = ye),
              (En = Vt(rn | 0, Bn | 0, ln | 0, qn | 0) | 0),
              (qn = Vt(En | 0, ye | 0, Vn | 0, Nn | 0) | 0),
              (Nn = ye),
              (Vn = Cn),
              (_[Vn >> 2] = 0),
              (_[(Vn + 4) >> 2] = 0),
              (Vn = Vt(((Nn >> 31) >>> 6) | 0, 0, qn | 0, Nn | 0) | 0),
              (En = qt(Vn | 0, ye | 0, 26) | 0),
              (Vn = ye),
              (ln = zt(En | 0, Vn | 0, 26) | 0),
              (Bn = Ut(qn | 0, Nn | 0, ln | 0, ye | 0) | 0),
              (ln = Xt),
              (_[ln >> 2] = Bn),
              (_[(ln + 4) >> 2] = ye),
              (ln = Gn),
              (Bn =
                Vt(En | 0, Vn | 0, _[ln >> 2] | 0, _[(ln + 4) >> 2] | 0) | 0),
              (ln = Gn),
              (_[ln >> 2] = Bn),
              (_[(ln + 4) >> 2] = ye),
              (ln = 0));
            do
              ((Bn = (Kt + (ln << 3)) | 0),
                (Vn = Bn),
                (En = _[Vn >> 2] | 0),
                (Nn = _[(Vn + 4) >> 2] | 0),
                (Vn = (Ot + (ln << 3)) | 0),
                (qn = Vn),
                (rn = _[qn >> 2] | 0),
                (hn = _[(qn + 4) >> 2] | 0),
                (qn = (rn ^ En) & Zt),
                (xn = (hn ^ Nn) & en),
                (Nn = qt(0, (qn ^ En) | 0, 32) | 0),
                (En = Bn),
                (_[En >> 2] = Nn),
                (_[(En + 4) >> 2] = ye),
                (En = qt(0, (qn ^ rn) | 0, 32) | 0),
                (rn = Vn),
                (_[rn >> 2] = En),
                (_[(rn + 4) >> 2] = ye),
                (ln = (ln + 1) | 0));
            while ((ln | 0) != 10);
            tr = 0;
            do
              ((ln = (Xt + (tr << 3)) | 0),
                (Gn = ln),
                (Cn = _[Gn >> 2] | 0),
                (rn = _[(Gn + 4) >> 2] | 0),
                (Gn = (Wt + (tr << 3)) | 0),
                (En = Gn),
                (Vn = _[En >> 2] | 0),
                (qn = _[(En + 4) >> 2] | 0),
                (En = (Vn ^ Cn) & Zt),
                (Nn = (qn ^ rn) & en),
                (rn = qt(0, (En ^ Cn) | 0, 32) | 0),
                (Cn = ln),
                (_[Cn >> 2] = rn),
                (_[(Cn + 4) >> 2] = ye),
                (Cn = qt(0, (En ^ Vn) | 0, 32) | 0),
                (Vn = Gn),
                (_[Vn >> 2] = Cn),
                (_[(Vn + 4) >> 2] = ye),
                (tr = (tr + 1) | 0));
            while ((tr | 0) != 10);
            if (((At = (At + 1) | 0), (At | 0) == 8)) {
              ((nr = Ft),
                (rr = Ot),
                (or = Bt),
                (ar = Wt),
                (ir = jt),
                (lr = Kt),
                (sr = Qt),
                (ur = Xt));
              break;
            } else
              ((en = Xt),
                (Zt = Kt),
                (Vn = Wt),
                (Cn = Ot),
                (ue = (Yt << 1) & 255),
                (Xt = Qt),
                (Qt = en),
                (Kt = jt),
                (jt = Zt),
                (Wt = Bt),
                (Bt = Vn),
                (Ot = Ft),
                (Ft = Cn));
          }
          if (((Ft = ($t + 1) | 0), (Ft | 0) == 32)) {
            ((cr = lr), (dr = ur));
            break;
          } else
            (($t = Ft),
              (Pt = rr),
              (Nt = nr),
              (ie = ar),
              (Mt = or),
              (le = lr),
              (wt = ir),
              (se = ur),
              (ae = sr));
        }
        ((fe = de), (ge = cr), (r = (fe + 80) | 0));
        do
          ((_[fe >> 2] = _[ge >> 2]), (fe = (fe + 4) | 0), (ge = (ge + 4) | 0));
        while ((fe | 0) < (r | 0));
        ((fe = me), (ge = dr), (r = (fe + 80) | 0));
        do
          ((_[fe >> 2] = _[ge >> 2]), (fe = (fe + 4) | 0), (ge = (ge + 4) | 0));
        while ((fe | 0) < (r | 0));
        (kt(C, me),
          kt(oe, C),
          kt(re, oe),
          Lt(k, re, me),
          Lt(x, k, C),
          kt(re, x),
          Lt($, re, k),
          kt(re, $),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          Lt(Q, re, $),
          kt(re, Q),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          Lt(ee, oe, Q),
          kt(re, ee),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          Lt(re, oe, ee),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          kt(oe, re),
          kt(re, oe),
          Lt(te, re, Q),
          kt(re, te),
          kt(oe, re),
          (Q = 2));
        do (kt(re, oe), kt(oe, re), (Q = (Q + 2) | 0));
        while ((Q | 0) < 50);
        (Lt(ne, oe, te), kt(oe, ne), kt(re, oe), (Q = 2));
        do (kt(oe, re), kt(re, oe), (Q = (Q + 2) | 0));
        while ((Q | 0) < 100);
        (Lt(oe, re, ne), kt(re, oe), kt(oe, re), (ne = 2));
        do (kt(re, oe), kt(oe, re), (ne = (ne + 2) | 0));
        while ((ne | 0) < 50);
        for (
          Lt(re, oe, te),
            kt(oe, re),
            kt(re, oe),
            kt(oe, re),
            kt(re, oe),
            kt(oe, re),
            Lt(pe, oe, x),
            Lt(me, de, pe),
            pe = _[me >> 2] | 0,
            _[C >> 2] = pe,
            de = (C + 4) | 0,
            _[de >> 2] = _[(me + 8) >> 2],
            x = (C + 8) | 0,
            _[x >> 2] = _[(me + 16) >> 2],
            oe = (C + 12) | 0,
            _[oe >> 2] = _[(me + 24) >> 2],
            re = (C + 16) | 0,
            _[re >> 2] = _[(me + 32) >> 2],
            te = (C + 20) | 0,
            _[te >> 2] = _[(me + 40) >> 2],
            ne = (C + 24) | 0,
            _[ne >> 2] = _[(me + 48) >> 2],
            Q = (C + 28) | 0,
            _[Q >> 2] = _[(me + 56) >> 2],
            ee = (C + 32) | 0,
            _[ee >> 2] = _[(me + 64) >> 2],
            $ = (C + 36) | 0,
            _[$ >> 2] = _[(me + 72) >> 2],
            me = pe,
            pe = 0;
          (k = (C + (pe << 2)) | 0),
            (ge = (me >> 31) & me),
            pe & 1
              ? ((r = ge >> 25),
                (_[k >> 2] = (Ue(r, -33554432) | 0) + me),
                (k = (pe + 1) | 0),
                (ge = (C + (k << 2)) | 0),
                (cr = ((_[ge >> 2] | 0) + r) | 0),
                (_[ge >> 2] = cr),
                (mr = cr),
                (pr = k))
              : ((fe = ge >> 26),
                (_[k >> 2] = (Ue(fe, -67108864) | 0) + me),
                (r = (pe + 1) | 0),
                (dr = (C + (r << 2)) | 0),
                (cr = ((_[dr >> 2] | 0) + fe) | 0),
                (_[dr >> 2] = cr),
                (mr = cr),
                (pr = r)),
            (pr | 0) != 9;
        )
          ((me = mr), (pe = pr));
        for (
          pr = _[$ >> 2] | 0,
            pe = ((pr >> 31) & pr) >> 25,
            _[$ >> 2] = (Ue(pe, -33554432) | 0) + pr,
            pr = (((pe * 19) | 0) + (_[C >> 2] | 0)) | 0,
            _[C >> 2] = pr,
            pe = pr,
            pr = 0;
          (mr = (C + (pr << 2)) | 0),
            (me = (pe >> 31) & pe),
            pr & 1
              ? ((r = me >> 25),
                (_[mr >> 2] = (Ue(r, -33554432) | 0) + pe),
                (mr = (pr + 1) | 0),
                (me = (C + (mr << 2)) | 0),
                (cr = ((_[me >> 2] | 0) + r) | 0),
                (_[me >> 2] = cr),
                (_r = mr),
                (fr = cr))
              : ((k = me >> 26),
                (_[mr >> 2] = (Ue(k, -67108864) | 0) + pe),
                (cr = (pr + 1) | 0),
                (ge = (C + (cr << 2)) | 0),
                (r = ((_[ge >> 2] | 0) + k) | 0),
                (_[ge >> 2] = r),
                (_r = cr),
                (fr = r)),
            (_r | 0) != 9;
        )
          ((pe = fr), (pr = _r));
        for (
          _r = _[$ >> 2] | 0,
            pr = ((_r >> 31) & _r) >> 25,
            _[$ >> 2] = (Ue(pr, -33554432) | 0) + _r,
            _r = (((pr * 19) | 0) + (_[C >> 2] | 0)) | 0,
            pr = ((_r >> 31) & _r) >> 26,
            fr = ((Ue(pr, -67108864) | 0) + _r) | 0,
            _[C >> 2] = fr,
            _[de >> 2] = pr + (_[de >> 2] | 0),
            pr = fr,
            fr = 0;
          (_r = (C + (fr << 2)) | 0),
            fr & 1
              ? ((_[_r >> 2] = pr & 33554431),
                (_r = (fr + 1) | 0),
                (mr = (C + (_r << 2)) | 0),
                (pe = ((_[mr >> 2] | 0) + (pr >> 25)) | 0),
                (_[mr >> 2] = pe),
                (gr = _r),
                (hr = pe))
              : ((_[_r >> 2] = pr & 67108863),
                (pe = (fr + 1) | 0),
                (cr = (C + (pe << 2)) | 0),
                (mr = ((_[cr >> 2] | 0) + (pr >> 26)) | 0),
                (_[cr >> 2] = mr),
                (gr = pe),
                (hr = mr)),
            (gr | 0) != 9;
        )
          ((pr = hr), (fr = gr));
        for (
          gr = _[$ >> 2] | 0,
            _[$ >> 2] = gr & 33554431,
            fr = ((((gr >> 25) * 19) | 0) + (_[C >> 2] | 0)) | 0,
            _[C >> 2] = fr,
            gr = fr,
            fr = 0;
          (hr = (C + (fr << 2)) | 0),
            fr & 1
              ? ((_[hr >> 2] = gr & 33554431),
                (hr = (fr + 1) | 0),
                (_r = (C + (hr << 2)) | 0),
                (pr = ((_[_r >> 2] | 0) + (gr >> 25)) | 0),
                (_[_r >> 2] = pr),
                (yr = hr),
                (Cr = pr))
              : ((_[hr >> 2] = gr & 67108863),
                (pr = (fr + 1) | 0),
                (pe = (C + (pr << 2)) | 0),
                (_r = ((_[pe >> 2] | 0) + (gr >> 26)) | 0),
                (_[pe >> 2] = _r),
                (yr = pr),
                (Cr = _r)),
            (yr | 0) != 9;
        )
          ((gr = Cr), (fr = yr));
        for (
          yr = _[$ >> 2] | 0,
            fr = yr & 33554431,
            _[$ >> 2] = fr,
            Cr = ((((yr >> 25) * 19) | 0) + (_[C >> 2] | 0)) | 0,
            _[C >> 2] = Cr,
            yr = 1,
            gr = ~((Cr + -67108845) >> 31);
          ;
        )
          if (
            ((pr = _[(C + (yr << 2)) >> 2] | 0),
            yr & 1
              ? ((_r = (pr << 16) & (pr ^ -33554432)),
                (pr = (_r << 8) & _r),
                (_r = (pr << 4) & pr),
                (pr = (_r << 2) & _r),
                (br = (pr << 1) & pr))
              : ((hr = (pr << 16) & (pr ^ -67108864)),
                (_r = (hr << 8) & hr),
                (hr = (_r << 4) & _r),
                (_r = (hr << 2) & hr),
                (br = (_r << 1) & _r)),
            (pr = (br >> 31) & gr),
            (yr = (yr + 1) | 0),
            (yr | 0) == 10)
          ) {
            vr = pr;
            break;
          } else gr = pr;
        return (
          (gr = (Cr - (vr & 67108845)) | 0),
          (_[C >> 2] = gr),
          (C = vr & 67108863),
          (Cr = vr & 33554431),
          (yr = ((_[de >> 2] | 0) - Cr) | 0),
          (br = yr << 2),
          (pr = ((_[x >> 2] | 0) - C) | 0),
          (_r = pr << 3),
          (hr = ((_[oe >> 2] | 0) - Cr) | 0),
          (pe = hr << 5),
          (mr = ((_[re >> 2] | 0) - vr) | 0),
          (vr = mr << 6),
          (cr = ((_[te >> 2] | 0) - Cr) | 0),
          (_[te >> 2] = cr),
          (te = ((_[ne >> 2] | 0) - C) | 0),
          (me = te << 1),
          (r = ((_[Q >> 2] | 0) - Cr) | 0),
          (ge = r << 3),
          (k = ((_[ee >> 2] | 0) - C) << 4),
          (_[de >> 2] = br),
          (_[x >> 2] = _r),
          (_[oe >> 2] = pe),
          (_[re >> 2] = vr),
          (_[ne >> 2] = me),
          (_[Q >> 2] = ge),
          (_[ee >> 2] = k),
          (_[$ >> 2] = (fr - Cr) << 6),
          (i[t >> 0] = gr),
          (i[(t + 1) >> 0] = gr >>> 8),
          (i[(t + 2) >> 0] = gr >>> 16),
          (i[(t + 3) >> 0] = br | (gr >>> 24)),
          (i[(t + 4) >> 0] = yr >>> 6),
          (i[(t + 5) >> 0] = yr >>> 14),
          (i[(t + 6) >> 0] = _r | (yr >>> 22)),
          (i[(t + 7) >> 0] = pr >>> 5),
          (i[(t + 8) >> 0] = pr >>> 13),
          (i[(t + 9) >> 0] = pe | (pr >>> 21)),
          (i[(t + 10) >> 0] = hr >>> 3),
          (i[(t + 11) >> 0] = hr >>> 11),
          (i[(t + 12) >> 0] = vr | (hr >>> 19)),
          (i[(t + 13) >> 0] = mr >>> 2),
          (i[(t + 14) >> 0] = mr >>> 10),
          (i[(t + 15) >> 0] = mr >>> 18),
          (i[(t + 16) >> 0] = cr),
          (i[(t + 17) >> 0] = cr >>> 8),
          (i[(t + 18) >> 0] = cr >>> 16),
          (i[(t + 19) >> 0] = (cr >>> 24) | me),
          (i[(t + 20) >> 0] = te >>> 7),
          (i[(t + 21) >> 0] = te >>> 15),
          (i[(t + 22) >> 0] = (te >>> 23) | ge),
          (i[(t + 23) >> 0] = r >>> 5),
          (i[(t + 24) >> 0] = r >>> 13),
          (ge = _[ee >> 2] | 0),
          (i[(t + 25) >> 0] = (r >>> 21) | ge),
          (i[(t + 26) >> 0] = ge >>> 8),
          (i[(t + 27) >> 0] = ge >>> 16),
          (r = _[$ >> 2] | 0),
          (i[(t + 28) >> 0] = (ge >>> 24) | r),
          (i[(t + 29) >> 0] = r >>> 8),
          (i[(t + 30) >> 0] = r >>> 16),
          (i[(t + 31) >> 0] = r >>> 24),
          (j = s),
          0
        );
      }
      function Lt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0;
        ((i = j),
          (j = (j + 160) | 0),
          (s = i),
          Et(s, r, o),
          (o = (s + 144) | 0),
          (r = _[o >> 2] | 0),
          (g = _[(o + 4) >> 2] | 0),
          (o = (s + 64) | 0),
          (C = o),
          (k = _[C >> 2] | 0),
          (x = _[(C + 4) >> 2] | 0),
          (C = Jt(r | 0, g | 0, 18, 0) | 0),
          ($ = ye),
          (Q = Vt(k | 0, x | 0, r | 0, g | 0) | 0),
          (g = Vt(Q | 0, ye | 0, C | 0, $ | 0) | 0),
          ($ = o),
          (_[$ >> 2] = g),
          (_[($ + 4) >> 2] = ye),
          ($ = (s + 136) | 0),
          (g = _[$ >> 2] | 0),
          (o = _[($ + 4) >> 2] | 0),
          ($ = (s + 56) | 0),
          (C = $),
          (Q = _[C >> 2] | 0),
          (r = _[(C + 4) >> 2] | 0),
          (C = Jt(g | 0, o | 0, 18, 0) | 0),
          (x = ye),
          (k = Vt(Q | 0, r | 0, g | 0, o | 0) | 0),
          (o = Vt(k | 0, ye | 0, C | 0, x | 0) | 0),
          (x = $),
          (_[x >> 2] = o),
          (_[(x + 4) >> 2] = ye),
          (x = (s + 128) | 0),
          (o = _[x >> 2] | 0),
          ($ = _[(x + 4) >> 2] | 0),
          (x = (s + 48) | 0),
          (C = x),
          (k = _[C >> 2] | 0),
          (g = _[(C + 4) >> 2] | 0),
          (C = Jt(o | 0, $ | 0, 18, 0) | 0),
          (r = ye),
          (Q = Vt(k | 0, g | 0, o | 0, $ | 0) | 0),
          ($ = Vt(Q | 0, ye | 0, C | 0, r | 0) | 0),
          (r = x),
          (_[r >> 2] = $),
          (_[(r + 4) >> 2] = ye),
          (r = (s + 120) | 0),
          ($ = _[r >> 2] | 0),
          (x = _[(r + 4) >> 2] | 0),
          (r = (s + 40) | 0),
          (C = r),
          (Q = _[C >> 2] | 0),
          (o = _[(C + 4) >> 2] | 0),
          (C = Jt($ | 0, x | 0, 18, 0) | 0),
          (g = ye),
          (k = Vt(Q | 0, o | 0, $ | 0, x | 0) | 0),
          (x = Vt(k | 0, ye | 0, C | 0, g | 0) | 0),
          (g = r),
          (_[g >> 2] = x),
          (_[(g + 4) >> 2] = ye),
          (g = (s + 112) | 0),
          (x = _[g >> 2] | 0),
          (r = _[(g + 4) >> 2] | 0),
          (g = (s + 32) | 0),
          (C = g),
          (k = _[C >> 2] | 0),
          ($ = _[(C + 4) >> 2] | 0),
          (C = Jt(x | 0, r | 0, 18, 0) | 0),
          (o = ye),
          (Q = Vt(k | 0, $ | 0, x | 0, r | 0) | 0),
          (r = Vt(Q | 0, ye | 0, C | 0, o | 0) | 0),
          (o = g),
          (_[o >> 2] = r),
          (_[(o + 4) >> 2] = ye),
          (o = (s + 104) | 0),
          (r = _[o >> 2] | 0),
          (g = _[(o + 4) >> 2] | 0),
          (o = (s + 24) | 0),
          (C = o),
          (Q = _[C >> 2] | 0),
          (x = _[(C + 4) >> 2] | 0),
          (C = Jt(r | 0, g | 0, 18, 0) | 0),
          ($ = ye),
          (k = Vt(Q | 0, x | 0, r | 0, g | 0) | 0),
          (g = Vt(k | 0, ye | 0, C | 0, $ | 0) | 0),
          ($ = o),
          (_[$ >> 2] = g),
          (_[($ + 4) >> 2] = ye),
          ($ = (s + 96) | 0),
          (g = _[$ >> 2] | 0),
          (o = _[($ + 4) >> 2] | 0),
          ($ = (s + 16) | 0),
          (C = $),
          (k = _[C >> 2] | 0),
          (r = _[(C + 4) >> 2] | 0),
          (C = Jt(g | 0, o | 0, 18, 0) | 0),
          (x = ye),
          (Q = Vt(k | 0, r | 0, g | 0, o | 0) | 0),
          (o = Vt(Q | 0, ye | 0, C | 0, x | 0) | 0),
          (x = $),
          (_[x >> 2] = o),
          (_[(x + 4) >> 2] = ye),
          (x = (s + 88) | 0),
          (o = _[x >> 2] | 0),
          ($ = _[(x + 4) >> 2] | 0),
          (x = (s + 8) | 0),
          (C = x),
          (Q = _[C >> 2] | 0),
          (g = _[(C + 4) >> 2] | 0),
          (C = Jt(o | 0, $ | 0, 18, 0) | 0),
          (r = ye),
          (k = Vt(Q | 0, g | 0, o | 0, $ | 0) | 0),
          ($ = Vt(k | 0, ye | 0, C | 0, r | 0) | 0),
          (r = x),
          (_[r >> 2] = $),
          (_[(r + 4) >> 2] = ye),
          (r = (s + 80) | 0),
          ($ = r),
          (C = _[$ >> 2] | 0),
          (k = _[($ + 4) >> 2] | 0),
          ($ = s),
          (o = _[$ >> 2] | 0),
          (g = _[($ + 4) >> 2] | 0),
          ($ = Jt(C | 0, k | 0, 18, 0) | 0),
          (Q = ye),
          (ee = Vt(o | 0, g | 0, C | 0, k | 0) | 0),
          (k = Vt(ee | 0, ye | 0, $ | 0, Q | 0) | 0),
          (Q = ye),
          ($ = s),
          (_[$ >> 2] = k),
          (_[($ + 4) >> 2] = Q),
          ($ = r),
          (_[$ >> 2] = 0),
          (_[($ + 4) >> 2] = 0),
          ($ = Q),
          (Q = k),
          (k = 0));
        do
          ((ee = Vt((($ >> 31) >>> 6) | 0, 0, Q | 0, $ | 0) | 0),
            (C = qt(ee | 0, ye | 0, 26) | 0),
            (ee = ye),
            (g = zt(C | 0, ee | 0, 26) | 0),
            (o = Ut(Q | 0, $ | 0, g | 0, ye | 0) | 0),
            (g = (s + (k << 3)) | 0),
            (_[g >> 2] = o),
            (_[(g + 4) >> 2] = ye),
            (g = (s + ((k | 1) << 3)) | 0),
            (o = g),
            (te = Vt(C | 0, ee | 0, _[o >> 2] | 0, _[(o + 4) >> 2] | 0) | 0),
            (o = ye),
            (ee = Vt(((o >> 31) >>> 7) | 0, 0, te | 0, o | 0) | 0),
            (C = qt(ee | 0, ye | 0, 25) | 0),
            (ee = ye),
            (ne = zt(C | 0, ee | 0, 25) | 0),
            (re = Ut(te | 0, o | 0, ne | 0, ye | 0) | 0),
            (ne = g),
            (_[ne >> 2] = re),
            (_[(ne + 4) >> 2] = ye),
            (k = (k + 2) | 0),
            (ne = (s + (k << 3)) | 0),
            (re = ne),
            (Q = Vt(C | 0, ee | 0, _[re >> 2] | 0, _[(re + 4) >> 2] | 0) | 0),
            ($ = ye),
            (re = ne),
            (_[re >> 2] = Q),
            (_[(re + 4) >> 2] = $));
        while (k >>> 0 < 10);
        ((k = r),
          ($ = _[k >> 2] | 0),
          (Q = _[(k + 4) >> 2] | 0),
          (k = s),
          (re = _[k >> 2] | 0),
          (ne = _[(k + 4) >> 2] | 0),
          (k = Jt($ | 0, Q | 0, 18, 0) | 0),
          (ee = ye),
          (C = Vt(re | 0, ne | 0, $ | 0, Q | 0) | 0),
          (Q = Vt(C | 0, ye | 0, k | 0, ee | 0) | 0),
          (ee = ye),
          (k = r),
          (_[k >> 2] = 0),
          (_[(k + 4) >> 2] = 0),
          (k = Vt(((ee >> 31) >>> 6) | 0, 0, Q | 0, ee | 0) | 0),
          (r = qt(k | 0, ye | 0, 26) | 0),
          (k = ye),
          (C = zt(r | 0, k | 0, 26) | 0),
          ($ = Ut(Q | 0, ee | 0, C | 0, ye | 0) | 0),
          (C = s),
          (_[C >> 2] = $),
          (_[(C + 4) >> 2] = ye),
          (C = x),
          ($ = Vt(r | 0, k | 0, _[C >> 2] | 0, _[(C + 4) >> 2] | 0) | 0),
          (C = x),
          (_[C >> 2] = $),
          (_[(C + 4) >> 2] = ye),
          (C = t),
          (t = s),
          (s = (C + 80) | 0));
        do ((_[C >> 2] = _[t >> 2]), (C = (C + 4) | 0), (t = (t + 4) | 0));
        while ((C | 0) < (s | 0));
        j = i;
      }
      function Et(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          j = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0;
        ((i = qt(0, _[r >> 2] | 0, 32) | 0),
          (s = ye),
          (g = qt(0, _[o >> 2] | 0, 32) | 0),
          (C = Jt(g | 0, ye | 0, i | 0, s | 0) | 0),
          (s = t),
          (_[s >> 2] = C),
          (_[(s + 4) >> 2] = ye),
          (s = qt(0, _[r >> 2] | 0, 32) | 0),
          (C = ye),
          (i = (o + 8) | 0),
          (g = qt(0, _[i >> 2] | 0, 32) | 0),
          (k = Jt(g | 0, ye | 0, s | 0, C | 0) | 0),
          (C = ye),
          (s = (r + 8) | 0),
          (g = qt(0, _[s >> 2] | 0, 32) | 0),
          (x = ye),
          ($ = qt(0, _[o >> 2] | 0, 32) | 0),
          (j = Jt($ | 0, ye | 0, g | 0, x | 0) | 0),
          (x = Vt(j | 0, ye | 0, k | 0, C | 0) | 0),
          (C = (t + 8) | 0),
          (_[C >> 2] = x),
          (_[(C + 4) >> 2] = ye),
          (C = qt(0, _[s >> 2] | 0, 31) | 0),
          (x = ye),
          (k = qt(0, _[i >> 2] | 0, 32) | 0),
          (j = Jt(k | 0, ye | 0, C | 0, x | 0) | 0),
          (x = ye),
          (C = qt(0, _[r >> 2] | 0, 32) | 0),
          (k = ye),
          (g = (o + 16) | 0),
          ($ = qt(0, _[g >> 2] | 0, 32) | 0),
          (Q = Jt($ | 0, ye | 0, C | 0, k | 0) | 0),
          (k = Vt(Q | 0, ye | 0, j | 0, x | 0) | 0),
          (x = ye),
          (j = (r + 16) | 0),
          (Q = qt(0, _[j >> 2] | 0, 32) | 0),
          (C = ye),
          ($ = qt(0, _[o >> 2] | 0, 32) | 0),
          (ee = Jt($ | 0, ye | 0, Q | 0, C | 0) | 0),
          (C = Vt(k | 0, x | 0, ee | 0, ye | 0) | 0),
          (ee = (t + 16) | 0),
          (_[ee >> 2] = C),
          (_[(ee + 4) >> 2] = ye),
          (ee = qt(0, _[s >> 2] | 0, 32) | 0),
          (C = ye),
          (x = qt(0, _[g >> 2] | 0, 32) | 0),
          (k = Jt(x | 0, ye | 0, ee | 0, C | 0) | 0),
          (C = ye),
          (ee = qt(0, _[j >> 2] | 0, 32) | 0),
          (x = ye),
          (Q = qt(0, _[i >> 2] | 0, 32) | 0),
          ($ = Jt(Q | 0, ye | 0, ee | 0, x | 0) | 0),
          (x = Vt($ | 0, ye | 0, k | 0, C | 0) | 0),
          (C = ye),
          (k = qt(0, _[r >> 2] | 0, 32) | 0),
          ($ = ye),
          (ee = (o + 24) | 0),
          (Q = qt(0, _[ee >> 2] | 0, 32) | 0),
          (te = Jt(Q | 0, ye | 0, k | 0, $ | 0) | 0),
          ($ = Vt(x | 0, C | 0, te | 0, ye | 0) | 0),
          (te = ye),
          (C = (r + 24) | 0),
          (x = qt(0, _[C >> 2] | 0, 32) | 0),
          (k = ye),
          (Q = qt(0, _[o >> 2] | 0, 32) | 0),
          (ne = Jt(Q | 0, ye | 0, x | 0, k | 0) | 0),
          (k = Vt($ | 0, te | 0, ne | 0, ye | 0) | 0),
          (ne = (t + 24) | 0),
          (_[ne >> 2] = k),
          (_[(ne + 4) >> 2] = ye),
          (ne = qt(0, _[j >> 2] | 0, 32) | 0),
          (k = ye),
          (te = qt(0, _[g >> 2] | 0, 32) | 0),
          ($ = Jt(te | 0, ye | 0, ne | 0, k | 0) | 0),
          (k = ye),
          (ne = qt(0, _[s >> 2] | 0, 32) | 0),
          (te = ye),
          (x = qt(0, _[ee >> 2] | 0, 32) | 0),
          (Q = Jt(x | 0, ye | 0, ne | 0, te | 0) | 0),
          (te = ye),
          (ne = qt(0, _[C >> 2] | 0, 32) | 0),
          (x = ye),
          (re = qt(0, _[i >> 2] | 0, 32) | 0),
          (oe = Jt(re | 0, ye | 0, ne | 0, x | 0) | 0),
          (x = Vt(oe | 0, ye | 0, Q | 0, te | 0) | 0),
          (te = zt(x | 0, ye | 0, 1) | 0),
          (x = Vt(te | 0, ye | 0, $ | 0, k | 0) | 0),
          (k = ye),
          ($ = qt(0, _[r >> 2] | 0, 32) | 0),
          (te = ye),
          (Q = (o + 32) | 0),
          (oe = qt(0, _[Q >> 2] | 0, 32) | 0),
          (ne = Jt(oe | 0, ye | 0, $ | 0, te | 0) | 0),
          (te = Vt(x | 0, k | 0, ne | 0, ye | 0) | 0),
          (ne = ye),
          (k = (r + 32) | 0),
          (x = qt(0, _[k >> 2] | 0, 32) | 0),
          ($ = ye),
          (oe = qt(0, _[o >> 2] | 0, 32) | 0),
          (re = Jt(oe | 0, ye | 0, x | 0, $ | 0) | 0),
          ($ = Vt(te | 0, ne | 0, re | 0, ye | 0) | 0),
          (re = (t + 32) | 0),
          (_[re >> 2] = $),
          (_[(re + 4) >> 2] = ye),
          (re = qt(0, _[j >> 2] | 0, 32) | 0),
          ($ = ye),
          (ne = qt(0, _[ee >> 2] | 0, 32) | 0),
          (te = Jt(ne | 0, ye | 0, re | 0, $ | 0) | 0),
          ($ = ye),
          (re = qt(0, _[C >> 2] | 0, 32) | 0),
          (ne = ye),
          (x = qt(0, _[g >> 2] | 0, 32) | 0),
          (oe = Jt(x | 0, ye | 0, re | 0, ne | 0) | 0),
          (ne = Vt(oe | 0, ye | 0, te | 0, $ | 0) | 0),
          ($ = ye),
          (te = qt(0, _[s >> 2] | 0, 32) | 0),
          (oe = ye),
          (re = qt(0, _[Q >> 2] | 0, 32) | 0),
          (x = Jt(re | 0, ye | 0, te | 0, oe | 0) | 0),
          (oe = Vt(ne | 0, $ | 0, x | 0, ye | 0) | 0),
          (x = ye),
          ($ = qt(0, _[k >> 2] | 0, 32) | 0),
          (ne = ye),
          (te = qt(0, _[i >> 2] | 0, 32) | 0),
          (re = Jt(te | 0, ye | 0, $ | 0, ne | 0) | 0),
          (ne = Vt(oe | 0, x | 0, re | 0, ye | 0) | 0),
          (re = ye),
          (x = qt(0, _[r >> 2] | 0, 32) | 0),
          (oe = ye),
          ($ = (o + 40) | 0),
          (te = qt(0, _[$ >> 2] | 0, 32) | 0),
          (ae = Jt(te | 0, ye | 0, x | 0, oe | 0) | 0),
          (oe = Vt(ne | 0, re | 0, ae | 0, ye | 0) | 0),
          (ae = ye),
          (re = (r + 40) | 0),
          (ne = qt(0, _[re >> 2] | 0, 32) | 0),
          (x = ye),
          (te = qt(0, _[o >> 2] | 0, 32) | 0),
          (ie = Jt(te | 0, ye | 0, ne | 0, x | 0) | 0),
          (x = Vt(oe | 0, ae | 0, ie | 0, ye | 0) | 0),
          (ie = (t + 40) | 0),
          (_[ie >> 2] = x),
          (_[(ie + 4) >> 2] = ye),
          (ie = qt(0, _[C >> 2] | 0, 32) | 0),
          (x = ye),
          (ae = qt(0, _[ee >> 2] | 0, 32) | 0),
          (oe = Jt(ae | 0, ye | 0, ie | 0, x | 0) | 0),
          (x = ye),
          (ie = qt(0, _[s >> 2] | 0, 32) | 0),
          (ae = ye),
          (ne = qt(0, _[$ >> 2] | 0, 32) | 0),
          (te = Jt(ne | 0, ye | 0, ie | 0, ae | 0) | 0),
          (ae = Vt(te | 0, ye | 0, oe | 0, x | 0) | 0),
          (x = ye),
          (oe = qt(0, _[re >> 2] | 0, 32) | 0),
          (te = ye),
          (ie = qt(0, _[i >> 2] | 0, 32) | 0),
          (ne = Jt(ie | 0, ye | 0, oe | 0, te | 0) | 0),
          (te = Vt(ae | 0, x | 0, ne | 0, ye | 0) | 0),
          (ne = zt(te | 0, ye | 0, 1) | 0),
          (te = ye),
          (x = qt(0, _[j >> 2] | 0, 32) | 0),
          (ae = ye),
          (oe = qt(0, _[Q >> 2] | 0, 32) | 0),
          (ie = Jt(oe | 0, ye | 0, x | 0, ae | 0) | 0),
          (ae = Vt(ne | 0, te | 0, ie | 0, ye | 0) | 0),
          (ie = ye),
          (te = qt(0, _[k >> 2] | 0, 32) | 0),
          (ne = ye),
          (x = qt(0, _[g >> 2] | 0, 32) | 0),
          (oe = Jt(x | 0, ye | 0, te | 0, ne | 0) | 0),
          (ne = Vt(ae | 0, ie | 0, oe | 0, ye | 0) | 0),
          (oe = ye),
          (ie = qt(0, _[r >> 2] | 0, 32) | 0),
          (ae = ye),
          (te = (o + 48) | 0),
          (x = qt(0, _[te >> 2] | 0, 32) | 0),
          (le = Jt(x | 0, ye | 0, ie | 0, ae | 0) | 0),
          (ae = Vt(ne | 0, oe | 0, le | 0, ye | 0) | 0),
          (le = ye),
          (oe = (r + 48) | 0),
          (ne = qt(0, _[oe >> 2] | 0, 32) | 0),
          (ie = ye),
          (x = qt(0, _[o >> 2] | 0, 32) | 0),
          (se = Jt(x | 0, ye | 0, ne | 0, ie | 0) | 0),
          (ie = Vt(ae | 0, le | 0, se | 0, ye | 0) | 0),
          (se = (t + 48) | 0),
          (_[se >> 2] = ie),
          (_[(se + 4) >> 2] = ye),
          (se = qt(0, _[C >> 2] | 0, 32) | 0),
          (ie = ye),
          (le = qt(0, _[Q >> 2] | 0, 32) | 0),
          (ae = Jt(le | 0, ye | 0, se | 0, ie | 0) | 0),
          (ie = ye),
          (se = qt(0, _[k >> 2] | 0, 32) | 0),
          (le = ye),
          (ne = qt(0, _[ee >> 2] | 0, 32) | 0),
          (x = Jt(ne | 0, ye | 0, se | 0, le | 0) | 0),
          (le = Vt(x | 0, ye | 0, ae | 0, ie | 0) | 0),
          (ie = ye),
          (ae = qt(0, _[j >> 2] | 0, 32) | 0),
          (x = ye),
          (se = qt(0, _[$ >> 2] | 0, 32) | 0),
          (ne = Jt(se | 0, ye | 0, ae | 0, x | 0) | 0),
          (x = Vt(le | 0, ie | 0, ne | 0, ye | 0) | 0),
          (ne = ye),
          (ie = qt(0, _[re >> 2] | 0, 32) | 0),
          (le = ye),
          (ae = qt(0, _[g >> 2] | 0, 32) | 0),
          (se = Jt(ae | 0, ye | 0, ie | 0, le | 0) | 0),
          (le = Vt(x | 0, ne | 0, se | 0, ye | 0) | 0),
          (se = ye),
          (ne = qt(0, _[s >> 2] | 0, 32) | 0),
          (x = ye),
          (ie = qt(0, _[te >> 2] | 0, 32) | 0),
          (ae = Jt(ie | 0, ye | 0, ne | 0, x | 0) | 0),
          (x = Vt(le | 0, se | 0, ae | 0, ye | 0) | 0),
          (ae = ye),
          (se = qt(0, _[oe >> 2] | 0, 32) | 0),
          (le = ye),
          (ne = qt(0, _[i >> 2] | 0, 32) | 0),
          (ie = Jt(ne | 0, ye | 0, se | 0, le | 0) | 0),
          (le = Vt(x | 0, ae | 0, ie | 0, ye | 0) | 0),
          (ie = ye),
          (ae = qt(0, _[r >> 2] | 0, 32) | 0),
          (x = ye),
          (se = (o + 56) | 0),
          (ne = qt(0, _[se >> 2] | 0, 32) | 0),
          (ue = Jt(ne | 0, ye | 0, ae | 0, x | 0) | 0),
          (x = Vt(le | 0, ie | 0, ue | 0, ye | 0) | 0),
          (ue = ye),
          (ie = (r + 56) | 0),
          (le = qt(0, _[ie >> 2] | 0, 32) | 0),
          (ae = ye),
          (ne = qt(0, _[o >> 2] | 0, 32) | 0),
          (ce = Jt(ne | 0, ye | 0, le | 0, ae | 0) | 0),
          (ae = Vt(x | 0, ue | 0, ce | 0, ye | 0) | 0),
          (ce = (t + 56) | 0),
          (_[ce >> 2] = ae),
          (_[(ce + 4) >> 2] = ye),
          (ce = qt(0, _[k >> 2] | 0, 32) | 0),
          (ae = ye),
          (ue = qt(0, _[Q >> 2] | 0, 32) | 0),
          (x = Jt(ue | 0, ye | 0, ce | 0, ae | 0) | 0),
          (ae = ye),
          (ce = qt(0, _[C >> 2] | 0, 32) | 0),
          (ue = ye),
          (le = qt(0, _[$ >> 2] | 0, 32) | 0),
          (ne = Jt(le | 0, ye | 0, ce | 0, ue | 0) | 0),
          (ue = ye),
          (ce = qt(0, _[re >> 2] | 0, 32) | 0),
          (le = ye),
          (de = qt(0, _[ee >> 2] | 0, 32) | 0),
          (me = Jt(de | 0, ye | 0, ce | 0, le | 0) | 0),
          (le = Vt(me | 0, ye | 0, ne | 0, ue | 0) | 0),
          (ue = ye),
          (ne = qt(0, _[s >> 2] | 0, 32) | 0),
          (me = ye),
          (ce = qt(0, _[se >> 2] | 0, 32) | 0),
          (de = Jt(ce | 0, ye | 0, ne | 0, me | 0) | 0),
          (me = Vt(le | 0, ue | 0, de | 0, ye | 0) | 0),
          (de = ye),
          (ue = qt(0, _[ie >> 2] | 0, 32) | 0),
          (le = ye),
          (ne = qt(0, _[i >> 2] | 0, 32) | 0),
          (ce = Jt(ne | 0, ye | 0, ue | 0, le | 0) | 0),
          (le = Vt(me | 0, de | 0, ce | 0, ye | 0) | 0),
          (ce = zt(le | 0, ye | 0, 1) | 0),
          (le = Vt(ce | 0, ye | 0, x | 0, ae | 0) | 0),
          (ae = ye),
          (x = qt(0, _[j >> 2] | 0, 32) | 0),
          (ce = ye),
          (de = qt(0, _[te >> 2] | 0, 32) | 0),
          (me = Jt(de | 0, ye | 0, x | 0, ce | 0) | 0),
          (ce = Vt(le | 0, ae | 0, me | 0, ye | 0) | 0),
          (me = ye),
          (ae = qt(0, _[oe >> 2] | 0, 32) | 0),
          (le = ye),
          (x = qt(0, _[g >> 2] | 0, 32) | 0),
          (de = Jt(x | 0, ye | 0, ae | 0, le | 0) | 0),
          (le = Vt(ce | 0, me | 0, de | 0, ye | 0) | 0),
          (de = ye),
          (me = qt(0, _[r >> 2] | 0, 32) | 0),
          (ce = ye),
          (ae = (o + 64) | 0),
          (x = qt(0, _[ae >> 2] | 0, 32) | 0),
          (ue = Jt(x | 0, ye | 0, me | 0, ce | 0) | 0),
          (ce = Vt(le | 0, de | 0, ue | 0, ye | 0) | 0),
          (ue = ye),
          (de = (r + 64) | 0),
          (le = qt(0, _[de >> 2] | 0, 32) | 0),
          (me = ye),
          (x = qt(0, _[o >> 2] | 0, 32) | 0),
          (ne = Jt(x | 0, ye | 0, le | 0, me | 0) | 0),
          (me = Vt(ce | 0, ue | 0, ne | 0, ye | 0) | 0),
          (ne = (t + 64) | 0),
          (_[ne >> 2] = me),
          (_[(ne + 4) >> 2] = ye),
          (ne = qt(0, _[k >> 2] | 0, 32) | 0),
          (me = ye),
          (ue = qt(0, _[$ >> 2] | 0, 32) | 0),
          (ce = Jt(ue | 0, ye | 0, ne | 0, me | 0) | 0),
          (me = ye),
          (ne = qt(0, _[re >> 2] | 0, 32) | 0),
          (ue = ye),
          (le = qt(0, _[Q >> 2] | 0, 32) | 0),
          (x = Jt(le | 0, ye | 0, ne | 0, ue | 0) | 0),
          (ue = Vt(x | 0, ye | 0, ce | 0, me | 0) | 0),
          (me = ye),
          (ce = qt(0, _[C >> 2] | 0, 32) | 0),
          (x = ye),
          (ne = qt(0, _[te >> 2] | 0, 32) | 0),
          (le = Jt(ne | 0, ye | 0, ce | 0, x | 0) | 0),
          (x = Vt(ue | 0, me | 0, le | 0, ye | 0) | 0),
          (le = ye),
          (me = qt(0, _[oe >> 2] | 0, 32) | 0),
          (ue = ye),
          (ce = qt(0, _[ee >> 2] | 0, 32) | 0),
          (ne = Jt(ce | 0, ye | 0, me | 0, ue | 0) | 0),
          (ue = Vt(x | 0, le | 0, ne | 0, ye | 0) | 0),
          (ne = ye),
          (le = qt(0, _[j >> 2] | 0, 32) | 0),
          (x = ye),
          (me = qt(0, _[se >> 2] | 0, 32) | 0),
          (ce = Jt(me | 0, ye | 0, le | 0, x | 0) | 0),
          (x = Vt(ue | 0, ne | 0, ce | 0, ye | 0) | 0),
          (ce = ye),
          (ne = qt(0, _[ie >> 2] | 0, 32) | 0),
          (ue = ye),
          (le = qt(0, _[g >> 2] | 0, 32) | 0),
          (me = Jt(le | 0, ye | 0, ne | 0, ue | 0) | 0),
          (ue = Vt(x | 0, ce | 0, me | 0, ye | 0) | 0),
          (me = ye),
          (ce = qt(0, _[s >> 2] | 0, 32) | 0),
          (x = ye),
          (ne = qt(0, _[ae >> 2] | 0, 32) | 0),
          (le = Jt(ne | 0, ye | 0, ce | 0, x | 0) | 0),
          (x = Vt(ue | 0, me | 0, le | 0, ye | 0) | 0),
          (le = ye),
          (me = qt(0, _[de >> 2] | 0, 32) | 0),
          (ue = ye),
          (ce = qt(0, _[i >> 2] | 0, 32) | 0),
          (ne = Jt(ce | 0, ye | 0, me | 0, ue | 0) | 0),
          (ue = Vt(x | 0, le | 0, ne | 0, ye | 0) | 0),
          (ne = ye),
          (le = qt(0, _[r >> 2] | 0, 32) | 0),
          (x = ye),
          (me = (o + 72) | 0),
          (ce = qt(0, _[me >> 2] | 0, 32) | 0),
          (pe = Jt(ce | 0, ye | 0, le | 0, x | 0) | 0),
          (x = Vt(ue | 0, ne | 0, pe | 0, ye | 0) | 0),
          (pe = ye),
          (ne = (r + 72) | 0),
          (r = qt(0, _[ne >> 2] | 0, 32) | 0),
          (ue = ye),
          (le = qt(0, _[o >> 2] | 0, 32) | 0),
          (o = Jt(le | 0, ye | 0, r | 0, ue | 0) | 0),
          (ue = Vt(x | 0, pe | 0, o | 0, ye | 0) | 0),
          (o = (t + 72) | 0),
          (_[o >> 2] = ue),
          (_[(o + 4) >> 2] = ye),
          (o = qt(0, _[re >> 2] | 0, 32) | 0),
          (ue = ye),
          (pe = qt(0, _[$ >> 2] | 0, 32) | 0),
          (x = Jt(pe | 0, ye | 0, o | 0, ue | 0) | 0),
          (ue = ye),
          (o = qt(0, _[C >> 2] | 0, 32) | 0),
          (pe = ye),
          (r = qt(0, _[se >> 2] | 0, 32) | 0),
          (le = Jt(r | 0, ye | 0, o | 0, pe | 0) | 0),
          (pe = Vt(le | 0, ye | 0, x | 0, ue | 0) | 0),
          (ue = ye),
          (x = qt(0, _[ie >> 2] | 0, 32) | 0),
          (le = ye),
          (o = qt(0, _[ee >> 2] | 0, 32) | 0),
          (r = Jt(o | 0, ye | 0, x | 0, le | 0) | 0),
          (le = Vt(pe | 0, ue | 0, r | 0, ye | 0) | 0),
          (r = ye),
          (ue = qt(0, _[s >> 2] | 0, 32) | 0),
          (s = ye),
          (pe = qt(0, _[me >> 2] | 0, 32) | 0),
          (x = Jt(pe | 0, ye | 0, ue | 0, s | 0) | 0),
          (s = Vt(le | 0, r | 0, x | 0, ye | 0) | 0),
          (x = ye),
          (r = qt(0, _[ne >> 2] | 0, 32) | 0),
          (le = ye),
          (ue = qt(0, _[i >> 2] | 0, 32) | 0),
          (i = Jt(ue | 0, ye | 0, r | 0, le | 0) | 0),
          (le = Vt(s | 0, x | 0, i | 0, ye | 0) | 0),
          (i = zt(le | 0, ye | 0, 1) | 0),
          (le = ye),
          (x = qt(0, _[k >> 2] | 0, 32) | 0),
          (s = ye),
          (r = qt(0, _[te >> 2] | 0, 32) | 0),
          (ue = Jt(r | 0, ye | 0, x | 0, s | 0) | 0),
          (s = Vt(i | 0, le | 0, ue | 0, ye | 0) | 0),
          (ue = ye),
          (le = qt(0, _[oe >> 2] | 0, 32) | 0),
          (i = ye),
          (x = qt(0, _[Q >> 2] | 0, 32) | 0),
          (r = Jt(x | 0, ye | 0, le | 0, i | 0) | 0),
          (i = Vt(s | 0, ue | 0, r | 0, ye | 0) | 0),
          (r = ye),
          (ue = qt(0, _[j >> 2] | 0, 32) | 0),
          (s = ye),
          (le = qt(0, _[ae >> 2] | 0, 32) | 0),
          (x = Jt(le | 0, ye | 0, ue | 0, s | 0) | 0),
          (s = Vt(i | 0, r | 0, x | 0, ye | 0) | 0),
          (x = ye),
          (r = qt(0, _[de >> 2] | 0, 32) | 0),
          (i = ye),
          (ue = qt(0, _[g >> 2] | 0, 32) | 0),
          (le = Jt(ue | 0, ye | 0, r | 0, i | 0) | 0),
          (i = Vt(s | 0, x | 0, le | 0, ye | 0) | 0),
          (le = (t + 80) | 0),
          (_[le >> 2] = i),
          (_[(le + 4) >> 2] = ye),
          (le = qt(0, _[re >> 2] | 0, 32) | 0),
          (i = ye),
          (x = qt(0, _[te >> 2] | 0, 32) | 0),
          (s = Jt(x | 0, ye | 0, le | 0, i | 0) | 0),
          (i = ye),
          (le = qt(0, _[oe >> 2] | 0, 32) | 0),
          (x = ye),
          (r = qt(0, _[$ >> 2] | 0, 32) | 0),
          (ue = Jt(r | 0, ye | 0, le | 0, x | 0) | 0),
          (x = Vt(ue | 0, ye | 0, s | 0, i | 0) | 0),
          (i = ye),
          (s = qt(0, _[k >> 2] | 0, 32) | 0),
          (ue = ye),
          (le = qt(0, _[se >> 2] | 0, 32) | 0),
          (r = Jt(le | 0, ye | 0, s | 0, ue | 0) | 0),
          (ue = Vt(x | 0, i | 0, r | 0, ye | 0) | 0),
          (r = ye),
          (i = qt(0, _[ie >> 2] | 0, 32) | 0),
          (x = ye),
          (s = qt(0, _[Q >> 2] | 0, 32) | 0),
          (le = Jt(s | 0, ye | 0, i | 0, x | 0) | 0),
          (x = Vt(ue | 0, r | 0, le | 0, ye | 0) | 0),
          (le = ye),
          (r = qt(0, _[C >> 2] | 0, 32) | 0),
          (ue = ye),
          (i = qt(0, _[ae >> 2] | 0, 32) | 0),
          (s = Jt(i | 0, ye | 0, r | 0, ue | 0) | 0),
          (ue = Vt(x | 0, le | 0, s | 0, ye | 0) | 0),
          (s = ye),
          (le = qt(0, _[de >> 2] | 0, 32) | 0),
          (x = ye),
          (r = qt(0, _[ee >> 2] | 0, 32) | 0),
          (i = Jt(r | 0, ye | 0, le | 0, x | 0) | 0),
          (x = Vt(ue | 0, s | 0, i | 0, ye | 0) | 0),
          (i = ye),
          (s = qt(0, _[j >> 2] | 0, 32) | 0),
          (j = ye),
          (ue = qt(0, _[me >> 2] | 0, 32) | 0),
          (le = Jt(ue | 0, ye | 0, s | 0, j | 0) | 0),
          (j = Vt(x | 0, i | 0, le | 0, ye | 0) | 0),
          (le = ye),
          (i = qt(0, _[ne >> 2] | 0, 32) | 0),
          (x = ye),
          (s = qt(0, _[g >> 2] | 0, 32) | 0),
          (g = Jt(s | 0, ye | 0, i | 0, x | 0) | 0),
          (x = Vt(j | 0, le | 0, g | 0, ye | 0) | 0),
          (g = (t + 88) | 0),
          (_[g >> 2] = x),
          (_[(g + 4) >> 2] = ye),
          (g = qt(0, _[oe >> 2] | 0, 32) | 0),
          (x = ye),
          (le = qt(0, _[te >> 2] | 0, 32) | 0),
          (j = Jt(le | 0, ye | 0, g | 0, x | 0) | 0),
          (x = ye),
          (g = qt(0, _[re >> 2] | 0, 32) | 0),
          (le = ye),
          (i = qt(0, _[se >> 2] | 0, 32) | 0),
          (s = Jt(i | 0, ye | 0, g | 0, le | 0) | 0),
          (le = ye),
          (g = qt(0, _[ie >> 2] | 0, 32) | 0),
          (i = ye),
          (ue = qt(0, _[$ >> 2] | 0, 32) | 0),
          (r = Jt(ue | 0, ye | 0, g | 0, i | 0) | 0),
          (i = Vt(r | 0, ye | 0, s | 0, le | 0) | 0),
          (le = ye),
          (s = qt(0, _[C >> 2] | 0, 32) | 0),
          (C = ye),
          (r = qt(0, _[me >> 2] | 0, 32) | 0),
          (g = Jt(r | 0, ye | 0, s | 0, C | 0) | 0),
          (C = Vt(i | 0, le | 0, g | 0, ye | 0) | 0),
          (g = ye),
          (le = qt(0, _[ne >> 2] | 0, 32) | 0),
          (i = ye),
          (s = qt(0, _[ee >> 2] | 0, 32) | 0),
          (ee = Jt(s | 0, ye | 0, le | 0, i | 0) | 0),
          (i = Vt(C | 0, g | 0, ee | 0, ye | 0) | 0),
          (ee = zt(i | 0, ye | 0, 1) | 0),
          (i = Vt(ee | 0, ye | 0, j | 0, x | 0) | 0),
          (x = ye),
          (j = qt(0, _[k >> 2] | 0, 32) | 0),
          (ee = ye),
          (g = qt(0, _[ae >> 2] | 0, 32) | 0),
          (C = Jt(g | 0, ye | 0, j | 0, ee | 0) | 0),
          (ee = Vt(i | 0, x | 0, C | 0, ye | 0) | 0),
          (C = ye),
          (x = qt(0, _[de >> 2] | 0, 32) | 0),
          (i = ye),
          (j = qt(0, _[Q >> 2] | 0, 32) | 0),
          (g = Jt(j | 0, ye | 0, x | 0, i | 0) | 0),
          (i = Vt(ee | 0, C | 0, g | 0, ye | 0) | 0),
          (g = (t + 96) | 0),
          (_[g >> 2] = i),
          (_[(g + 4) >> 2] = ye),
          (g = qt(0, _[oe >> 2] | 0, 32) | 0),
          (i = ye),
          (C = qt(0, _[se >> 2] | 0, 32) | 0),
          (ee = Jt(C | 0, ye | 0, g | 0, i | 0) | 0),
          (i = ye),
          (g = qt(0, _[ie >> 2] | 0, 32) | 0),
          (C = ye),
          (x = qt(0, _[te >> 2] | 0, 32) | 0),
          (j = Jt(x | 0, ye | 0, g | 0, C | 0) | 0),
          (C = Vt(j | 0, ye | 0, ee | 0, i | 0) | 0),
          (i = ye),
          (ee = qt(0, _[re >> 2] | 0, 32) | 0),
          (j = ye),
          (g = qt(0, _[ae >> 2] | 0, 32) | 0),
          (x = Jt(g | 0, ye | 0, ee | 0, j | 0) | 0),
          (j = Vt(C | 0, i | 0, x | 0, ye | 0) | 0),
          (x = ye),
          (i = qt(0, _[de >> 2] | 0, 32) | 0),
          (C = ye),
          (ee = qt(0, _[$ >> 2] | 0, 32) | 0),
          (g = Jt(ee | 0, ye | 0, i | 0, C | 0) | 0),
          (C = Vt(j | 0, x | 0, g | 0, ye | 0) | 0),
          (g = ye),
          (x = qt(0, _[k >> 2] | 0, 32) | 0),
          (k = ye),
          (j = qt(0, _[me >> 2] | 0, 32) | 0),
          (i = Jt(j | 0, ye | 0, x | 0, k | 0) | 0),
          (k = Vt(C | 0, g | 0, i | 0, ye | 0) | 0),
          (i = ye),
          (g = qt(0, _[ne >> 2] | 0, 32) | 0),
          (C = ye),
          (x = qt(0, _[Q >> 2] | 0, 32) | 0),
          (Q = Jt(x | 0, ye | 0, g | 0, C | 0) | 0),
          (C = Vt(k | 0, i | 0, Q | 0, ye | 0) | 0),
          (Q = (t + 104) | 0),
          (_[Q >> 2] = C),
          (_[(Q + 4) >> 2] = ye),
          (Q = qt(0, _[ie >> 2] | 0, 32) | 0),
          (C = ye),
          (i = qt(0, _[se >> 2] | 0, 32) | 0),
          (k = Jt(i | 0, ye | 0, Q | 0, C | 0) | 0),
          (C = ye),
          (Q = qt(0, _[re >> 2] | 0, 32) | 0),
          (re = ye),
          (i = qt(0, _[me >> 2] | 0, 32) | 0),
          (g = Jt(i | 0, ye | 0, Q | 0, re | 0) | 0),
          (re = Vt(g | 0, ye | 0, k | 0, C | 0) | 0),
          (C = ye),
          (k = qt(0, _[ne >> 2] | 0, 32) | 0),
          (g = ye),
          (Q = qt(0, _[$ >> 2] | 0, 32) | 0),
          ($ = Jt(Q | 0, ye | 0, k | 0, g | 0) | 0),
          (g = Vt(re | 0, C | 0, $ | 0, ye | 0) | 0),
          ($ = zt(g | 0, ye | 0, 1) | 0),
          (g = ye),
          (C = qt(0, _[oe >> 2] | 0, 32) | 0),
          (re = ye),
          (k = qt(0, _[ae >> 2] | 0, 32) | 0),
          (Q = Jt(k | 0, ye | 0, C | 0, re | 0) | 0),
          (re = Vt($ | 0, g | 0, Q | 0, ye | 0) | 0),
          (Q = ye),
          (g = qt(0, _[de >> 2] | 0, 32) | 0),
          ($ = ye),
          (C = qt(0, _[te >> 2] | 0, 32) | 0),
          (k = Jt(C | 0, ye | 0, g | 0, $ | 0) | 0),
          ($ = Vt(re | 0, Q | 0, k | 0, ye | 0) | 0),
          (k = (t + 112) | 0),
          (_[k >> 2] = $),
          (_[(k + 4) >> 2] = ye),
          (k = qt(0, _[ie >> 2] | 0, 32) | 0),
          ($ = ye),
          (Q = qt(0, _[ae >> 2] | 0, 32) | 0),
          (re = Jt(Q | 0, ye | 0, k | 0, $ | 0) | 0),
          ($ = ye),
          (k = qt(0, _[de >> 2] | 0, 32) | 0),
          (Q = ye),
          (g = qt(0, _[se >> 2] | 0, 32) | 0),
          (C = Jt(g | 0, ye | 0, k | 0, Q | 0) | 0),
          (Q = Vt(C | 0, ye | 0, re | 0, $ | 0) | 0),
          ($ = ye),
          (re = qt(0, _[oe >> 2] | 0, 32) | 0),
          (oe = ye),
          (C = qt(0, _[me >> 2] | 0, 32) | 0),
          (k = Jt(C | 0, ye | 0, re | 0, oe | 0) | 0),
          (oe = Vt(Q | 0, $ | 0, k | 0, ye | 0) | 0),
          (k = ye),
          ($ = qt(0, _[ne >> 2] | 0, 32) | 0),
          (Q = ye),
          (re = qt(0, _[te >> 2] | 0, 32) | 0),
          (te = Jt(re | 0, ye | 0, $ | 0, Q | 0) | 0),
          (Q = Vt(oe | 0, k | 0, te | 0, ye | 0) | 0),
          (te = (t + 120) | 0),
          (_[te >> 2] = Q),
          (_[(te + 4) >> 2] = ye),
          (te = qt(0, _[de >> 2] | 0, 32) | 0),
          (Q = ye),
          (k = qt(0, _[ae >> 2] | 0, 32) | 0),
          (oe = Jt(k | 0, ye | 0, te | 0, Q | 0) | 0),
          (Q = ye),
          (te = qt(0, _[ie >> 2] | 0, 32) | 0),
          (ie = ye),
          (k = qt(0, _[me >> 2] | 0, 32) | 0),
          ($ = Jt(k | 0, ye | 0, te | 0, ie | 0) | 0),
          (ie = ye),
          (te = qt(0, _[ne >> 2] | 0, 32) | 0),
          (k = ye),
          (re = qt(0, _[se >> 2] | 0, 32) | 0),
          (se = Jt(re | 0, ye | 0, te | 0, k | 0) | 0),
          (k = Vt(se | 0, ye | 0, $ | 0, ie | 0) | 0),
          (ie = zt(k | 0, ye | 0, 1) | 0),
          (k = Vt(ie | 0, ye | 0, oe | 0, Q | 0) | 0),
          (Q = (t + 128) | 0),
          (_[Q >> 2] = k),
          (_[(Q + 4) >> 2] = ye),
          (Q = qt(0, _[de >> 2] | 0, 32) | 0),
          (de = ye),
          (k = qt(0, _[me >> 2] | 0, 32) | 0),
          (oe = Jt(k | 0, ye | 0, Q | 0, de | 0) | 0),
          (de = ye),
          (Q = qt(0, _[ne >> 2] | 0, 32) | 0),
          (k = ye),
          (ie = qt(0, _[ae >> 2] | 0, 32) | 0),
          (ae = Jt(ie | 0, ye | 0, Q | 0, k | 0) | 0),
          (k = Vt(ae | 0, ye | 0, oe | 0, de | 0) | 0),
          (de = (t + 136) | 0),
          (_[de >> 2] = k),
          (_[(de + 4) >> 2] = ye),
          (de = qt(0, _[ne >> 2] | 0, 31) | 0),
          (ne = ye),
          (k = qt(0, _[me >> 2] | 0, 32) | 0),
          (me = Jt(k | 0, ye | 0, de | 0, ne | 0) | 0),
          (ne = (t + 144) | 0),
          (_[ne >> 2] = me),
          (_[(ne + 4) >> 2] = ye));
      }
      function kt(t, r) {
        ((t = t | 0), (r = r | 0));
        var o = 0,
          i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0,
          _e = 0,
          fe = 0,
          ge = 0,
          he = 0,
          Ce = 0,
          be = 0,
          ve = 0,
          Se = 0,
          Re = 0,
          Le = 0,
          Ee = 0,
          ke = 0,
          Ie = 0,
          Te = 0,
          De = 0,
          xe = 0,
          $e = 0;
        ((o = j),
          (j = (j + 160) | 0),
          (i = o),
          (s = _[r >> 2] | 0),
          (g = qt(0, s | 0, 32) | 0),
          (C = ye),
          (k = Jt(g | 0, C | 0, g | 0, C | 0) | 0),
          (x = i),
          (_[x >> 2] = k),
          (_[(x + 4) >> 2] = ye),
          (x = qt(0, s | 0, 31) | 0),
          (s = ye),
          (k = (r + 8) | 0),
          ($ = _[k >> 2] | 0),
          (Q = qt(0, $ | 0, 32) | 0),
          (ee = ye),
          (te = Jt(Q | 0, ee | 0, x | 0, s | 0) | 0),
          (ne = (i + 8) | 0),
          (re = ne),
          (_[re >> 2] = te),
          (_[(re + 4) >> 2] = ye),
          (re = Jt(Q | 0, ee | 0, Q | 0, ee | 0) | 0),
          (te = ye),
          (oe = (r + 16) | 0),
          (ae = qt(0, _[oe >> 2] | 0, 32) | 0),
          (ie = ye),
          (le = Jt(ae | 0, ie | 0, g | 0, C | 0) | 0),
          (se = Vt(le | 0, ye | 0, re | 0, te | 0) | 0),
          (te = zt(se | 0, ye | 0, 1) | 0),
          (se = (i + 16) | 0),
          (re = se),
          (_[re >> 2] = te),
          (_[(re + 4) >> 2] = ye),
          (re = Jt(ae | 0, ie | 0, Q | 0, ee | 0) | 0),
          (te = ye),
          (le = (r + 24) | 0),
          (ue = qt(0, _[le >> 2] | 0, 32) | 0),
          (ce = ye),
          (de = Jt(ue | 0, ce | 0, g | 0, C | 0) | 0),
          (me = Vt(de | 0, ye | 0, re | 0, te | 0) | 0),
          (te = zt(me | 0, ye | 0, 1) | 0),
          (me = (i + 24) | 0),
          (re = me),
          (_[re >> 2] = te),
          (_[(re + 4) >> 2] = ye),
          (re = Jt(ae | 0, ie | 0, ae | 0, ie | 0) | 0),
          (te = ye),
          (de = qt(0, $ | 0, 30) | 0),
          (pe = Jt(ue | 0, ce | 0, de | 0, ye | 0) | 0),
          (de = Vt(pe | 0, ye | 0, re | 0, te | 0) | 0),
          (te = ye),
          (re = (r + 32) | 0),
          (pe = qt(0, _[re >> 2] | 0, 32) | 0),
          (_e = ye),
          (fe = Jt(pe | 0, _e | 0, x | 0, s | 0) | 0),
          (s = Vt(de | 0, te | 0, fe | 0, ye | 0) | 0),
          (fe = (i + 32) | 0),
          (te = fe),
          (_[te >> 2] = s),
          (_[(te + 4) >> 2] = ye),
          (te = Jt(ue | 0, ce | 0, ae | 0, ie | 0) | 0),
          (s = ye),
          (de = Jt(pe | 0, _e | 0, Q | 0, ee | 0) | 0),
          (x = Vt(de | 0, ye | 0, te | 0, s | 0) | 0),
          (s = ye),
          (te = (r + 40) | 0),
          (de = qt(0, _[te >> 2] | 0, 32) | 0),
          (ge = ye),
          (he = Jt(de | 0, ge | 0, g | 0, C | 0) | 0),
          (Ce = Vt(x | 0, s | 0, he | 0, ye | 0) | 0),
          (he = zt(Ce | 0, ye | 0, 1) | 0),
          (Ce = (i + 40) | 0),
          (s = Ce),
          (_[s >> 2] = he),
          (_[(s + 4) >> 2] = ye),
          (s = Jt(ue | 0, ce | 0, ue | 0, ce | 0) | 0),
          (he = ye),
          (x = Jt(pe | 0, _e | 0, ae | 0, ie | 0) | 0),
          (be = Vt(x | 0, ye | 0, s | 0, he | 0) | 0),
          (he = ye),
          (s = (r + 48) | 0),
          (x = qt(0, _[s >> 2] | 0, 32) | 0),
          (ve = ye),
          (Se = Jt(x | 0, ve | 0, g | 0, C | 0) | 0),
          (Re = Vt(be | 0, he | 0, Se | 0, ye | 0) | 0),
          (Se = ye),
          (he = qt(0, $ | 0, 31) | 0),
          ($ = Jt(de | 0, ge | 0, he | 0, ye | 0) | 0),
          (he = Vt(Re | 0, Se | 0, $ | 0, ye | 0) | 0),
          ($ = zt(he | 0, ye | 0, 1) | 0),
          (he = (i + 48) | 0),
          (Se = he),
          (_[Se >> 2] = $),
          (_[(Se + 4) >> 2] = ye),
          (Se = Jt(pe | 0, _e | 0, ue | 0, ce | 0) | 0),
          ($ = ye),
          (Re = Jt(de | 0, ge | 0, ae | 0, ie | 0) | 0),
          (be = Vt(Re | 0, ye | 0, Se | 0, $ | 0) | 0),
          ($ = ye),
          (Se = Jt(x | 0, ve | 0, Q | 0, ee | 0) | 0),
          (Re = Vt(be | 0, $ | 0, Se | 0, ye | 0) | 0),
          (Se = ye),
          ($ = (r + 56) | 0),
          (be = qt(0, _[$ >> 2] | 0, 32) | 0),
          (Le = ye),
          (Ee = Jt(be | 0, Le | 0, g | 0, C | 0) | 0),
          (ke = Vt(Re | 0, Se | 0, Ee | 0, ye | 0) | 0),
          (Ee = zt(ke | 0, ye | 0, 1) | 0),
          (ke = (i + 56) | 0),
          (Se = ke),
          (_[Se >> 2] = Ee),
          (_[(Se + 4) >> 2] = ye),
          (Se = Jt(pe | 0, _e | 0, pe | 0, _e | 0) | 0),
          (Ee = ye),
          (Re = Jt(x | 0, ve | 0, ae | 0, ie | 0) | 0),
          (Ie = ye),
          (Te = (r + 64) | 0),
          (De = qt(0, _[Te >> 2] | 0, 32) | 0),
          (xe = ye),
          ($e = Jt(De | 0, xe | 0, g | 0, C | 0) | 0),
          (C = Vt($e | 0, ye | 0, Re | 0, Ie | 0) | 0),
          (Ie = ye),
          (Re = Jt(be | 0, Le | 0, Q | 0, ee | 0) | 0),
          (ee = ye),
          (Q = Jt(de | 0, ge | 0, ue | 0, ce | 0) | 0),
          ($e = Vt(Q | 0, ye | 0, Re | 0, ee | 0) | 0),
          (ee = zt($e | 0, ye | 0, 1) | 0),
          ($e = Vt(C | 0, Ie | 0, ee | 0, ye | 0) | 0),
          (ee = zt($e | 0, ye | 0, 1) | 0),
          ($e = Vt(ee | 0, ye | 0, Se | 0, Ee | 0) | 0),
          (Ee = (i + 64) | 0),
          (Se = Ee),
          (_[Se >> 2] = $e),
          (_[(Se + 4) >> 2] = ye),
          (Se = Jt(de | 0, ge | 0, pe | 0, _e | 0) | 0),
          ($e = ye),
          (ee = Jt(x | 0, ve | 0, ue | 0, ce | 0) | 0),
          (ce = Vt(ee | 0, ye | 0, Se | 0, $e | 0) | 0),
          ($e = ye),
          (Se = Jt(be | 0, Le | 0, ae | 0, ie | 0) | 0),
          (ie = Vt(ce | 0, $e | 0, Se | 0, ye | 0) | 0),
          (Se = ye),
          ($e = qt(0, _[k >> 2] | 0, 32) | 0),
          (k = ye),
          (ce = Jt(De | 0, xe | 0, $e | 0, k | 0) | 0),
          (ae = Vt(ie | 0, Se | 0, ce | 0, ye | 0) | 0),
          (ce = ye),
          (Se = qt(0, _[r >> 2] | 0, 32) | 0),
          (ie = ye),
          (ee = _[(r + 72) >> 2] | 0),
          (r = qt(0, ee | 0, 32) | 0),
          (ue = ye),
          (Ie = Jt(r | 0, ue | 0, Se | 0, ie | 0) | 0),
          (ie = Vt(ae | 0, ce | 0, Ie | 0, ye | 0) | 0),
          (Ie = zt(ie | 0, ye | 0, 1) | 0),
          (ie = (i + 72) | 0),
          (_[ie >> 2] = Ie),
          (_[(ie + 4) >> 2] = ye),
          (ie = Jt(de | 0, ge | 0, de | 0, ge | 0) | 0),
          (Ie = ye),
          (ce = Jt(x | 0, ve | 0, pe | 0, _e | 0) | 0),
          (_e = Vt(ce | 0, ye | 0, ie | 0, Ie | 0) | 0),
          (Ie = ye),
          (ie = qt(0, _[oe >> 2] | 0, 32) | 0),
          (oe = ye),
          (ce = Jt(De | 0, xe | 0, ie | 0, oe | 0) | 0),
          (pe = Vt(_e | 0, Ie | 0, ce | 0, ye | 0) | 0),
          (ce = ye),
          (Ie = qt(0, _[le >> 2] | 0, 32) | 0),
          (le = ye),
          (_e = Jt(be | 0, Le | 0, Ie | 0, le | 0) | 0),
          (ae = ye),
          (Se = Jt(r | 0, ue | 0, $e | 0, k | 0) | 0),
          (k = Vt(Se | 0, ye | 0, _e | 0, ae | 0) | 0),
          (ae = zt(k | 0, ye | 0, 1) | 0),
          (k = Vt(pe | 0, ce | 0, ae | 0, ye | 0) | 0),
          (ae = zt(k | 0, ye | 0, 1) | 0),
          (k = (i + 80) | 0),
          (ce = k),
          (_[ce >> 2] = ae),
          (_[(ce + 4) >> 2] = ye),
          (ce = Jt(x | 0, ve | 0, de | 0, ge | 0) | 0),
          (ge = ye),
          (de = qt(0, _[re >> 2] | 0, 32) | 0),
          (re = ye),
          (ae = Jt(be | 0, Le | 0, de | 0, re | 0) | 0),
          (pe = Vt(ae | 0, ye | 0, ce | 0, ge | 0) | 0),
          (ge = ye),
          (ce = Jt(De | 0, xe | 0, Ie | 0, le | 0) | 0),
          (ae = Vt(pe | 0, ge | 0, ce | 0, ye | 0) | 0),
          (ce = ye),
          (ge = Jt(r | 0, ue | 0, ie | 0, oe | 0) | 0),
          (oe = Vt(ae | 0, ce | 0, ge | 0, ye | 0) | 0),
          (ge = ye),
          (ce = zt(oe | 0, ge | 0, 1) | 0),
          (ae = ye),
          (ie = (i + 88) | 0),
          (_[ie >> 2] = ce),
          (_[(ie + 4) >> 2] = ae),
          (ie = Jt(x | 0, ve | 0, x | 0, ve | 0) | 0),
          (ve = ye),
          (x = Jt(De | 0, xe | 0, de | 0, re | 0) | 0),
          (pe = ye),
          (_e = _[te >> 2] | 0),
          (te = qt(0, _e | 0, 32) | 0),
          (Se = ye),
          ($e = Jt(be | 0, Le | 0, te | 0, Se | 0) | 0),
          (C = ye),
          (Re = Jt(r | 0, ue | 0, Ie | 0, le | 0) | 0),
          (le = Vt(Re | 0, ye | 0, $e | 0, C | 0) | 0),
          (C = zt(le | 0, ye | 0, 1) | 0),
          (le = Vt(C | 0, ye | 0, x | 0, pe | 0) | 0),
          (pe = zt(le | 0, ye | 0, 1) | 0),
          (le = Vt(pe | 0, ye | 0, ie | 0, ve | 0) | 0),
          (ve = ye),
          (ie = (i + 96) | 0),
          (_[ie >> 2] = le),
          (_[(ie + 4) >> 2] = ve),
          (ie = qt(0, _[s >> 2] | 0, 32) | 0),
          (s = ye),
          (pe = Jt(be | 0, Le | 0, ie | 0, s | 0) | 0),
          (Le = ye),
          (be = Jt(De | 0, xe | 0, te | 0, Se | 0) | 0),
          (Se = Vt(be | 0, ye | 0, pe | 0, Le | 0) | 0),
          (Le = ye),
          (pe = Jt(r | 0, ue | 0, de | 0, re | 0) | 0),
          (re = Vt(Se | 0, Le | 0, pe | 0, ye | 0) | 0),
          (pe = ye),
          (Le = zt(re | 0, pe | 0, 1) | 0),
          (Se = ye),
          (de = (i + 104) | 0),
          (_[de >> 2] = Le),
          (_[(de + 4) >> 2] = Se),
          (de = _[$ >> 2] | 0),
          ($ = qt(0, de | 0, 32) | 0),
          (be = ye),
          (te = Jt($ | 0, be | 0, $ | 0, be | 0) | 0),
          (x = ye),
          (C = Jt(De | 0, xe | 0, ie | 0, s | 0) | 0),
          (xe = Vt(C | 0, ye | 0, te | 0, x | 0) | 0),
          (x = ye),
          (te = qt(0, _e | 0, 31) | 0),
          (_e = Jt(r | 0, ue | 0, te | 0, ye | 0) | 0),
          (te = Vt(xe | 0, x | 0, _e | 0, ye | 0) | 0),
          (_e = ye),
          (x = zt(te | 0, _e | 0, 1) | 0),
          (xe = ye),
          (C = (i + 112) | 0),
          (_[C >> 2] = x),
          (_[(C + 4) >> 2] = xe),
          (C = _[Te >> 2] | 0),
          (Te = qt(0, C | 0, 32) | 0),
          (De = ye),
          ($e = Jt(Te | 0, De | 0, $ | 0, be | 0) | 0),
          (be = ye),
          ($ = Jt(r | 0, ue | 0, ie | 0, s | 0) | 0),
          (s = Vt($ | 0, ye | 0, $e | 0, be | 0) | 0),
          (be = ye),
          ($e = zt(s | 0, be | 0, 1) | 0),
          ($ = ye),
          (ie = (i + 120) | 0),
          (_[ie >> 2] = $e),
          (_[(ie + 4) >> 2] = $),
          (ie = Jt(Te | 0, De | 0, Te | 0, De | 0) | 0),
          (De = ye),
          (Te = qt(0, de | 0, 30) | 0),
          (de = Jt(r | 0, ue | 0, Te | 0, ye | 0) | 0),
          (Te = Vt(de | 0, ye | 0, ie | 0, De | 0) | 0),
          (De = ye),
          (ie = (i + 128) | 0),
          (_[ie >> 2] = Te),
          (_[(ie + 4) >> 2] = De),
          (ie = qt(0, C | 0, 31) | 0),
          (C = Jt(r | 0, ue | 0, ie | 0, ye | 0) | 0),
          (ie = ye),
          (de = (i + 136) | 0),
          (_[de >> 2] = C),
          (_[(de + 4) >> 2] = ie),
          (de = qt(0, ee | 0, 31) | 0),
          (ee = Jt(de | 0, ye | 0, r | 0, ue | 0) | 0),
          (ue = ye),
          (r = (i + 144) | 0),
          (_[r >> 2] = ee),
          (_[(r + 4) >> 2] = ue),
          (r = Ee),
          (de = _[r >> 2] | 0),
          (Re = _[(r + 4) >> 2] | 0),
          (r = Jt(ee | 0, ue | 0, 18, 0) | 0),
          (Ie = ye),
          (Q = Vt(ee | 0, ue | 0, de | 0, Re | 0) | 0),
          (Re = Vt(Q | 0, ye | 0, r | 0, Ie | 0) | 0),
          (Ie = Ee),
          (_[Ie >> 2] = Re),
          (_[(Ie + 4) >> 2] = ye),
          (Ie = ke),
          (Re = _[Ie >> 2] | 0),
          (Ee = _[(Ie + 4) >> 2] | 0),
          (Ie = Jt(C | 0, ie | 0, 18, 0) | 0),
          (r = ye),
          (Q = Vt(Re | 0, Ee | 0, C | 0, ie | 0) | 0),
          (ie = Vt(Q | 0, ye | 0, Ie | 0, r | 0) | 0),
          (r = ke),
          (_[r >> 2] = ie),
          (_[(r + 4) >> 2] = ye),
          (r = he),
          (ie = _[r >> 2] | 0),
          (ke = _[(r + 4) >> 2] | 0),
          (r = Jt(Te | 0, De | 0, 18, 0) | 0),
          (Ie = ye),
          (Q = Vt(ie | 0, ke | 0, Te | 0, De | 0) | 0),
          (De = Vt(Q | 0, ye | 0, r | 0, Ie | 0) | 0),
          (Ie = he),
          (_[Ie >> 2] = De),
          (_[(Ie + 4) >> 2] = ye),
          (Ie = Ce),
          (De = _[Ie >> 2] | 0),
          (he = _[(Ie + 4) >> 2] | 0),
          (Ie = Jt(s | 0, be | 0, 36, 0) | 0),
          (be = ye),
          (s = Vt(De | 0, he | 0, $e | 0, $ | 0) | 0),
          ($ = Vt(s | 0, ye | 0, Ie | 0, be | 0) | 0),
          (be = Ce),
          (_[be >> 2] = $),
          (_[(be + 4) >> 2] = ye),
          (be = fe),
          ($ = _[be >> 2] | 0),
          (Ce = _[(be + 4) >> 2] | 0),
          (be = Jt(te | 0, _e | 0, 36, 0) | 0),
          (_e = ye),
          (te = Vt($ | 0, Ce | 0, x | 0, xe | 0) | 0),
          (xe = Vt(te | 0, ye | 0, be | 0, _e | 0) | 0),
          (_e = fe),
          (_[_e >> 2] = xe),
          (_[(_e + 4) >> 2] = ye),
          (_e = me),
          (xe = _[_e >> 2] | 0),
          (fe = _[(_e + 4) >> 2] | 0),
          (_e = Jt(re | 0, pe | 0, 36, 0) | 0),
          (pe = ye),
          (re = Vt(xe | 0, fe | 0, Le | 0, Se | 0) | 0),
          (Se = Vt(re | 0, ye | 0, _e | 0, pe | 0) | 0),
          (pe = me),
          (_[pe >> 2] = Se),
          (_[(pe + 4) >> 2] = ye),
          (pe = se),
          (Se = _[pe >> 2] | 0),
          (me = _[(pe + 4) >> 2] | 0),
          (pe = Jt(le | 0, ve | 0, 18, 0) | 0),
          (_e = ye),
          (re = Vt(Se | 0, me | 0, le | 0, ve | 0) | 0),
          (ve = Vt(re | 0, ye | 0, pe | 0, _e | 0) | 0),
          (_e = se),
          (_[_e >> 2] = ve),
          (_[(_e + 4) >> 2] = ye),
          (_e = ne),
          (ve = _[_e >> 2] | 0),
          (se = _[(_e + 4) >> 2] | 0),
          (_e = Jt(oe | 0, ge | 0, 36, 0) | 0),
          (ge = ye),
          (oe = Vt(ve | 0, se | 0, ce | 0, ae | 0) | 0),
          (ae = Vt(oe | 0, ye | 0, _e | 0, ge | 0) | 0),
          (ge = ne),
          (_[ge >> 2] = ae),
          (_[(ge + 4) >> 2] = ye),
          (ge = k),
          (ae = _[ge >> 2] | 0),
          (_e = _[(ge + 4) >> 2] | 0),
          (ge = i),
          (oe = _[ge >> 2] | 0),
          (ce = _[(ge + 4) >> 2] | 0),
          (ge = Jt(ae | 0, _e | 0, 18, 0) | 0),
          (se = ye),
          (ve = Vt(oe | 0, ce | 0, ae | 0, _e | 0) | 0),
          (_e = Vt(ve | 0, ye | 0, ge | 0, se | 0) | 0),
          (se = ye),
          (ge = i),
          (_[ge >> 2] = _e),
          (_[(ge + 4) >> 2] = se),
          (ge = k),
          (_[ge >> 2] = 0),
          (_[(ge + 4) >> 2] = 0),
          (ge = se),
          (se = _e),
          (_e = 0));
        do
          ((ve = Vt(((ge >> 31) >>> 6) | 0, 0, se | 0, ge | 0) | 0),
            (ae = qt(ve | 0, ye | 0, 26) | 0),
            (ve = ye),
            (ce = zt(ae | 0, ve | 0, 26) | 0),
            (oe = Ut(se | 0, ge | 0, ce | 0, ye | 0) | 0),
            (ce = (i + (_e << 3)) | 0),
            (_[ce >> 2] = oe),
            (_[(ce + 4) >> 2] = ye),
            (ce = (i + ((_e | 1) << 3)) | 0),
            (oe = ce),
            (pe = Vt(ae | 0, ve | 0, _[oe >> 2] | 0, _[(oe + 4) >> 2] | 0) | 0),
            (oe = ye),
            (ve = Vt(((oe >> 31) >>> 7) | 0, 0, pe | 0, oe | 0) | 0),
            (ae = qt(ve | 0, ye | 0, 25) | 0),
            (ve = ye),
            (re = zt(ae | 0, ve | 0, 25) | 0),
            (le = Ut(pe | 0, oe | 0, re | 0, ye | 0) | 0),
            (re = ce),
            (_[re >> 2] = le),
            (_[(re + 4) >> 2] = ye),
            (_e = (_e + 2) | 0),
            (re = (i + (_e << 3)) | 0),
            (le = re),
            (se = Vt(ae | 0, ve | 0, _[le >> 2] | 0, _[(le + 4) >> 2] | 0) | 0),
            (ge = ye),
            (le = re),
            (_[le >> 2] = se),
            (_[(le + 4) >> 2] = ge));
        while (_e >>> 0 < 10);
        ((_e = k),
          (ge = _[_e >> 2] | 0),
          (se = _[(_e + 4) >> 2] | 0),
          (_e = i),
          (le = _[_e >> 2] | 0),
          (re = _[(_e + 4) >> 2] | 0),
          (_e = Jt(ge | 0, se | 0, 18, 0) | 0),
          (ve = ye),
          (ae = Vt(le | 0, re | 0, ge | 0, se | 0) | 0),
          (se = Vt(ae | 0, ye | 0, _e | 0, ve | 0) | 0),
          (ve = ye),
          (_e = k),
          (_[_e >> 2] = 0),
          (_[(_e + 4) >> 2] = 0),
          (_e = Vt(((ve >> 31) >>> 6) | 0, 0, se | 0, ve | 0) | 0),
          (k = qt(_e | 0, ye | 0, 26) | 0),
          (_e = ye),
          (ae = zt(k | 0, _e | 0, 26) | 0),
          (ge = Ut(se | 0, ve | 0, ae | 0, ye | 0) | 0),
          (ae = i),
          (_[ae >> 2] = ge),
          (_[(ae + 4) >> 2] = ye),
          (ae = ne),
          (ge = Vt(k | 0, _e | 0, _[ae >> 2] | 0, _[(ae + 4) >> 2] | 0) | 0),
          (ae = ne),
          (_[ae >> 2] = ge),
          (_[(ae + 4) >> 2] = ye),
          (ae = t),
          (t = i),
          (i = (ae + 80) | 0));
        do ((_[ae >> 2] = _[t >> 2]), (ae = (ae + 4) | 0), (t = (t + 4) | 0));
        while ((ae | 0) < (i | 0));
        j = o;
      }
      function It() {
        var t = 0;
        return (
          _[2] | 0 ? (t = _[((Ze() | 0) + 60) >> 2] | 0) : (t = 56),
          t | 0
        );
      }
      function Tt(t) {
        t = t | 0;
        var r = 0;
        return (
          t >>> 0 > 4294963200
            ? ((_[(It() | 0) >> 2] = 0 - t), (r = -1))
            : (r = t),
          r | 0
        );
      }
      function Dt(t) {
        return ((t = t | 0), 0);
      }
      function xt(t) {
        t = t | 0;
      }
      function $t(t) {
        t = t | 0;
        var r = 0,
          o = 0;
        return (
          (r = j),
          (j = (j + 16) | 0),
          (o = r),
          (_[o >> 2] = _[(t + 60) >> 2]),
          (t = Tt(et(6, o | 0) | 0) | 0),
          (j = r),
          t | 0
        );
      }
      function Pt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var i = 0,
          s = 0,
          g = 0,
          C = 0;
        return (
          (i = j),
          (j = (j + 32) | 0),
          (s = i),
          (g = (i + 20) | 0),
          (_[s >> 2] = _[(t + 60) >> 2]),
          (_[(s + 4) >> 2] = 0),
          (_[(s + 8) >> 2] = r),
          (_[(s + 12) >> 2] = g),
          (_[(s + 16) >> 2] = o),
          (Tt(ut(140, s | 0) | 0) | 0) < 0
            ? ((_[g >> 2] = -1), (C = -1))
            : (C = _[g >> 2] | 0),
          (j = i),
          C | 0
        );
      }
      function Nt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0;
        for (
          i = j,
            j = (j + 48) | 0,
            s = (i + 16) | 0,
            g = i,
            C = (i + 32) | 0,
            k = (t + 28) | 0,
            x = _[k >> 2] | 0,
            _[C >> 2] = x,
            $ = (t + 20) | 0,
            Q = ((_[$ >> 2] | 0) - x) | 0,
            _[(C + 4) >> 2] = Q,
            _[(C + 8) >> 2] = r,
            _[(C + 12) >> 2] = o,
            r = (t + 60) | 0,
            x = (t + 44) | 0,
            ee = C,
            C = 2,
            te = (Q + o) | 0;
          ;
        ) {
          if (
            (_[2] | 0
              ? (ct(1, t | 0),
                (_[g >> 2] = _[r >> 2]),
                (_[(g + 4) >> 2] = ee),
                (_[(g + 8) >> 2] = C),
                (Q = Tt(mt(146, g | 0) | 0) | 0),
                Xe(0),
                (ne = Q))
              : ((_[s >> 2] = _[r >> 2]),
                (_[(s + 4) >> 2] = ee),
                (_[(s + 8) >> 2] = C),
                (ne = Tt(mt(146, s | 0) | 0) | 0)),
            (te | 0) == (ne | 0))
          ) {
            re = 6;
            break;
          }
          if ((ne | 0) < 0) {
            ((oe = ee), (ae = C), (re = 8));
            break;
          }
          ((Q = (te - ne) | 0),
            (ie = _[(ee + 4) >> 2] | 0),
            ne >>> 0 <= ie >>> 0
              ? (C | 0) == 2
                ? ((_[k >> 2] = (_[k >> 2] | 0) + ne),
                  (le = ie),
                  (se = ne),
                  (ue = ee),
                  (ce = 2))
                : ((le = ie), (se = ne), (ue = ee), (ce = C))
              : ((de = _[x >> 2] | 0),
                (_[k >> 2] = de),
                (_[$ >> 2] = de),
                (le = _[(ee + 12) >> 2] | 0),
                (se = (ne - ie) | 0),
                (ue = (ee + 8) | 0),
                (ce = (C + -1) | 0)),
            (_[ue >> 2] = (_[ue >> 2] | 0) + se),
            (_[(ue + 4) >> 2] = le - se),
            (ee = ue),
            (C = ce),
            (te = Q));
        }
        return (
          (re | 0) == 6
            ? ((te = _[x >> 2] | 0),
              (_[(t + 16) >> 2] = te + (_[(t + 48) >> 2] | 0)),
              (x = te),
              (_[k >> 2] = x),
              (_[$ >> 2] = x),
              (me = o))
            : (re | 0) == 8 &&
              ((_[(t + 16) >> 2] = 0),
              (_[k >> 2] = 0),
              (_[$ >> 2] = 0),
              (_[t >> 2] = _[t >> 2] | 32),
              (ae | 0) == 2
                ? (me = 0)
                : (me = (o - (_[(oe + 4) >> 2] | 0)) | 0)),
          (j = i),
          me | 0
        );
      }
      function Mt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var s = 0,
          g = 0;
        return (
          (s = j),
          (j = (j + 80) | 0),
          (g = s),
          (_[(t + 36) >> 2] = 3),
          ((_[t >> 2] & 64) | 0) == 0 &&
            ((_[g >> 2] = _[(t + 60) >> 2]),
            (_[(g + 4) >> 2] = 21505),
            (_[(g + 8) >> 2] = s + 12),
            (lt(54, g | 0) | 0) != 0) &&
            (i[(t + 75) >> 0] = -1),
          (g = Nt(t, r, o) | 0),
          (j = s),
          g | 0
        );
      }
      function wt(t) {
        t = t | 0;
        var r = 0,
          o = 0,
          i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0;
        do
          if (t) {
            if ((_[(t + 76) >> 2] | 0) <= -1) {
              r = Ft(t) | 0;
              break;
            }
            ((o = (Dt(t) | 0) == 0), (i = Ft(t) | 0), o || xt(t), (r = i));
          } else {
            if (
              (_[13] | 0 ? (s = wt(_[13] | 0) | 0) : (s = 0),
              Ye(36),
              (i = _[8] | 0),
              !i)
            )
              g = s;
            else
              for (o = i, i = s; ; )
                if (
                  ((_[(o + 76) >> 2] | 0) > -1 ? (C = Dt(o) | 0) : (C = 0),
                  (_[(o + 20) >> 2] | 0) >>> 0 > (_[(o + 28) >> 2] | 0) >>> 0
                    ? (k = Ft(o) | 0 | i)
                    : (k = i),
                  C && xt(o),
                  (o = _[(o + 56) >> 2] | 0),
                  o)
                )
                  i = k;
                else {
                  g = k;
                  break;
                }
            (st(36), (r = g));
          }
        while (!1);
        return r | 0;
      }
      function At(t) {
        ((t = t | 0), _[(t + 68) >> 2] | 0 || xt(t));
      }
      function Ft(t) {
        t = t | 0;
        var r = 0,
          o = 0,
          i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0;
        return (
          (r = (t + 20) | 0),
          (o = (t + 28) | 0),
          (_[r >> 2] | 0) >>> 0 > (_[o >> 2] | 0) >>> 0 &&
          (cn[_[(t + 36) >> 2] & 3](t, 0, 0) | 0, (_[r >> 2] | 0) == 0)
            ? (i = -1)
            : ((s = (t + 4) | 0),
              (g = _[s >> 2] | 0),
              (C = (t + 8) | 0),
              (k = _[C >> 2] | 0),
              g >>> 0 < k >>> 0 &&
                cn[_[(t + 40) >> 2] & 3](t, (g - k) | 0, 1) | 0,
              (_[(t + 16) >> 2] = 0),
              (_[o >> 2] = 0),
              (_[r >> 2] = 0),
              (_[C >> 2] = 0),
              (_[s >> 2] = 0),
              (i = 0)),
          i | 0
        );
      }
      function Ot(t) {
        t = t | 0;
        var r = 0,
          o = 0,
          i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          j = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0,
          _e = 0,
          fe = 0,
          ge = 0,
          he = 0,
          ye = 0,
          Ce = 0,
          be = 0,
          ve = 0,
          Se = 0,
          Re = 0,
          Le = 0,
          Ee = 0,
          ke = 0,
          Ie = 0,
          Te = 0,
          De = 0,
          xe = 0,
          $e = 0,
          Pe = 0,
          Ne = 0,
          Me = 0,
          we = 0,
          Ae = 0,
          Fe = 0,
          Oe = 0,
          Be = 0,
          We = 0,
          qe = 0,
          Ue = 0,
          Ve = 0,
          He = 0,
          Ge = 0,
          ze = 0,
          je = 0,
          Ke = 0,
          Qe = 0,
          Xe = 0,
          Ye = 0,
          Je = 0,
          Ze = 0,
          et = 0,
          tt = 0,
          at = 0,
          it = 0,
          lt = 0,
          st = 0,
          ut = 0,
          ct = 0,
          mt = 0,
          pt = 0,
          _t = 0,
          ft = 0,
          gt = 0,
          ht = 0,
          yt = 0,
          Ct = 0,
          bt = 0,
          vt = 0,
          St = 0,
          Rt = 0,
          Lt = 0,
          Et = 0,
          kt = 0,
          Tt = 0,
          Dt = 0,
          xt = 0;
        do
          if (t >>> 0 < 245) {
            if (
              ((r = t >>> 0 < 11 ? 16 : (t + 11) & -8),
              (o = r >>> 3),
              (i = _[43] | 0),
              (s = i >>> o),
              s & 3)
            ) {
              ((g = (((s & 1) ^ 1) + o) | 0),
                (C = (212 + ((g << 1) << 2)) | 0),
                (k = (C + 8) | 0),
                (x = _[k >> 2] | 0),
                ($ = (x + 8) | 0),
                (j = _[$ >> 2] | 0));
              do
                if ((C | 0) != (j | 0))
                  if (
                    (j >>> 0 < (_[47] | 0) >>> 0 && nt(),
                    (Q = (j + 12) | 0),
                    (_[Q >> 2] | 0) == (x | 0))
                  ) {
                    ((_[Q >> 2] = C), (_[k >> 2] = j));
                    break;
                  } else nt();
                else _[43] = i & ~(1 << g);
              while (!1);
              return (
                (j = g << 3),
                (_[(x + 4) >> 2] = j | 3),
                (k = (x + j + 4) | 0),
                (_[k >> 2] = _[k >> 2] | 1),
                (ee = $),
                ee | 0
              );
            }
            if (((k = _[45] | 0), r >>> 0 > k >>> 0)) {
              if (s) {
                ((j = 2 << o),
                  (C = (s << o) & (j | (0 - j))),
                  (j = ((C & (0 - C)) + -1) | 0),
                  (C = (j >>> 12) & 16),
                  (Q = j >>> C),
                  (j = (Q >>> 5) & 8),
                  (te = Q >>> j),
                  (Q = (te >>> 2) & 4),
                  (ne = te >>> Q),
                  (te = (ne >>> 1) & 2),
                  (re = ne >>> te),
                  (ne = (re >>> 1) & 1),
                  (oe = ((j | C | Q | te | ne) + (re >>> ne)) | 0),
                  (ne = (212 + ((oe << 1) << 2)) | 0),
                  (re = (ne + 8) | 0),
                  (te = _[re >> 2] | 0),
                  (Q = (te + 8) | 0),
                  (C = _[Q >> 2] | 0));
                do
                  if ((ne | 0) != (C | 0))
                    if (
                      (C >>> 0 < (_[47] | 0) >>> 0 && nt(),
                      (j = (C + 12) | 0),
                      (_[j >> 2] | 0) == (te | 0))
                    ) {
                      ((_[j >> 2] = ne), (_[re >> 2] = C), (ae = _[45] | 0));
                      break;
                    } else nt();
                  else ((_[43] = i & ~(1 << oe)), (ae = k));
                while (!1);
                return (
                  (k = ((oe << 3) - r) | 0),
                  (_[(te + 4) >> 2] = r | 3),
                  (i = (te + r) | 0),
                  (_[(i + 4) >> 2] = k | 1),
                  (_[(i + k) >> 2] = k),
                  ae &&
                    ((C = _[48] | 0),
                    (re = ae >>> 3),
                    (ne = (212 + ((re << 1) << 2)) | 0),
                    (o = _[43] | 0),
                    (s = 1 << re),
                    o & s
                      ? ((re = (ne + 8) | 0),
                        ($ = _[re >> 2] | 0),
                        $ >>> 0 < (_[47] | 0) >>> 0
                          ? nt()
                          : ((ie = re), (le = $)))
                      : ((_[43] = o | s), (ie = (ne + 8) | 0), (le = ne)),
                    (_[ie >> 2] = C),
                    (_[(le + 12) >> 2] = C),
                    (_[(C + 8) >> 2] = le),
                    (_[(C + 12) >> 2] = ne)),
                  (_[45] = k),
                  (_[48] = i),
                  (ee = Q),
                  ee | 0
                );
              }
              if (((i = _[44] | 0), i)) {
                for (
                  k = ((i & (0 - i)) + -1) | 0,
                    i = (k >>> 12) & 16,
                    ne = k >>> i,
                    k = (ne >>> 5) & 8,
                    C = ne >>> k,
                    ne = (C >>> 2) & 4,
                    s = C >>> ne,
                    C = (s >>> 1) & 2,
                    o = s >>> C,
                    s = (o >>> 1) & 1,
                    $ =
                      _[
                        (476 + (((k | i | ne | C | s) + (o >>> s)) << 2)) >> 2
                      ] | 0,
                    s = ((_[($ + 4) >> 2] & -8) - r) | 0,
                    o = $,
                    C = $;
                  ;
                ) {
                  if ((($ = _[(o + 16) >> 2] | 0), $)) ce = $;
                  else if (((ne = _[(o + 20) >> 2] | 0), ne)) ce = ne;
                  else {
                    ((se = s), (ue = C));
                    break;
                  }
                  (($ = ((_[(ce + 4) >> 2] & -8) - r) | 0),
                    (ne = $ >>> 0 < s >>> 0),
                    (s = ne ? $ : s),
                    (o = ce),
                    (C = ne ? ce : C));
                }
                ((C = _[47] | 0),
                  ue >>> 0 < C >>> 0 && nt(),
                  (o = (ue + r) | 0),
                  ue >>> 0 >= o >>> 0 && nt(),
                  (s = _[(ue + 24) >> 2] | 0),
                  (Q = _[(ue + 12) >> 2] | 0));
                do
                  if ((Q | 0) == (ue | 0)) {
                    if (((te = (ue + 20) | 0), (oe = _[te >> 2] | 0), oe))
                      ((me = oe), (pe = te));
                    else if (((ne = (ue + 16) | 0), ($ = _[ne >> 2] | 0), $))
                      ((me = $), (pe = ne));
                    else {
                      de = 0;
                      break;
                    }
                    for (;;) {
                      if (((te = (me + 20) | 0), (oe = _[te >> 2] | 0), oe)) {
                        ((me = oe), (pe = te));
                        continue;
                      }
                      if (((te = (me + 16) | 0), (oe = _[te >> 2] | 0), oe))
                        ((me = oe), (pe = te));
                      else {
                        ((_e = me), (fe = pe));
                        break;
                      }
                    }
                    if (fe >>> 0 < C >>> 0) nt();
                    else {
                      ((_[fe >> 2] = 0), (de = _e));
                      break;
                    }
                  } else if (
                    ((te = _[(ue + 8) >> 2] | 0),
                    te >>> 0 < C >>> 0 && nt(),
                    (oe = (te + 12) | 0),
                    (_[oe >> 2] | 0) != (ue | 0) && nt(),
                    (ne = (Q + 8) | 0),
                    (_[ne >> 2] | 0) == (ue | 0))
                  ) {
                    ((_[oe >> 2] = Q), (_[ne >> 2] = te), (de = Q));
                    break;
                  } else nt();
                while (!1);
                do
                  if (s) {
                    if (
                      ((Q = _[(ue + 28) >> 2] | 0),
                      (C = (476 + (Q << 2)) | 0),
                      (ue | 0) == (_[C >> 2] | 0))
                    ) {
                      if (((_[C >> 2] = de), !de)) {
                        _[44] = _[44] & ~(1 << Q);
                        break;
                      }
                    } else if (
                      (s >>> 0 < (_[47] | 0) >>> 0 && nt(),
                      (Q = (s + 16) | 0),
                      (_[Q >> 2] | 0) == (ue | 0)
                        ? (_[Q >> 2] = de)
                        : (_[(s + 20) >> 2] = de),
                      !de)
                    )
                      break;
                    ((Q = _[47] | 0),
                      de >>> 0 < Q >>> 0 && nt(),
                      (_[(de + 24) >> 2] = s),
                      (C = _[(ue + 16) >> 2] | 0));
                    do
                      if (C)
                        if (C >>> 0 < Q >>> 0) nt();
                        else {
                          ((_[(de + 16) >> 2] = C), (_[(C + 24) >> 2] = de));
                          break;
                        }
                    while (!1);
                    if (((C = _[(ue + 20) >> 2] | 0), C))
                      if (C >>> 0 < (_[47] | 0) >>> 0) nt();
                      else {
                        ((_[(de + 20) >> 2] = C), (_[(C + 24) >> 2] = de));
                        break;
                      }
                  }
                while (!1);
                return (
                  se >>> 0 < 16
                    ? ((s = (se + r) | 0),
                      (_[(ue + 4) >> 2] = s | 3),
                      (C = (ue + s + 4) | 0),
                      (_[C >> 2] = _[C >> 2] | 1))
                    : ((_[(ue + 4) >> 2] = r | 3),
                      (_[(o + 4) >> 2] = se | 1),
                      (_[(o + se) >> 2] = se),
                      (C = _[45] | 0),
                      C &&
                        ((s = _[48] | 0),
                        (Q = C >>> 3),
                        (C = (212 + ((Q << 1) << 2)) | 0),
                        (te = _[43] | 0),
                        (ne = 1 << Q),
                        te & ne
                          ? ((Q = (C + 8) | 0),
                            (oe = _[Q >> 2] | 0),
                            oe >>> 0 < (_[47] | 0) >>> 0
                              ? nt()
                              : ((ge = Q), (he = oe)))
                          : ((_[43] = te | ne), (ge = (C + 8) | 0), (he = C)),
                        (_[ge >> 2] = s),
                        (_[(he + 12) >> 2] = s),
                        (_[(s + 8) >> 2] = he),
                        (_[(s + 12) >> 2] = C)),
                      (_[45] = se),
                      (_[48] = o)),
                  (ee = (ue + 8) | 0),
                  ee | 0
                );
              } else ye = r;
            } else ye = r;
          } else if (t >>> 0 <= 4294967231)
            if (((C = (t + 11) | 0), (s = C & -8), (ne = _[44] | 0), ne)) {
              ((te = (0 - s) | 0),
                (oe = C >>> 8),
                oe
                  ? s >>> 0 > 16777215
                    ? (Ce = 31)
                    : ((C = (((oe + 1048320) | 0) >>> 16) & 8),
                      (Q = oe << C),
                      (oe = (((Q + 520192) | 0) >>> 16) & 4),
                      ($ = Q << oe),
                      (Q = ((($ + 245760) | 0) >>> 16) & 2),
                      (i = (14 - (oe | C | Q) + (($ << Q) >>> 15)) | 0),
                      (Ce = ((s >>> ((i + 7) | 0)) & 1) | (i << 1)))
                  : (Ce = 0),
                (i = _[(476 + (Ce << 2)) >> 2] | 0));
              e: do
                if (!i) ((be = te), (ve = 0), (Se = 0), (Re = 86));
                else
                  for (
                    Q = te,
                      $ = 0,
                      C = s << ((Ce | 0) == 31 ? 0 : (25 - (Ce >>> 1)) | 0),
                      oe = i,
                      k = 0;
                    ;
                  ) {
                    if (
                      ((re = _[(oe + 4) >> 2] & -8),
                      (x = (re - s) | 0),
                      x >>> 0 < Q >>> 0)
                    )
                      if ((re | 0) == (s | 0)) {
                        ((Le = x), (Ee = oe), (ke = oe), (Re = 90));
                        break e;
                      } else ((Ie = x), (Te = oe));
                    else ((Ie = Q), (Te = k));
                    if (
                      ((x = _[(oe + 20) >> 2] | 0),
                      (oe = _[(oe + 16 + ((C >>> 31) << 2)) >> 2] | 0),
                      (re = ((x | 0) == 0) | ((x | 0) == (oe | 0)) ? $ : x),
                      (x = (oe | 0) == 0),
                      x)
                    ) {
                      ((be = Ie), (ve = re), (Se = Te), (Re = 86));
                      break;
                    } else
                      ((Q = Ie), ($ = re), (C = C << ((x & 1) ^ 1)), (k = Te));
                  }
              while (!1);
              if ((Re | 0) == 86) {
                if (((ve | 0) == 0) & ((Se | 0) == 0)) {
                  if (((i = 2 << Ce), (te = ne & (i | (0 - i))), !te)) {
                    ye = s;
                    break;
                  }
                  ((i = ((te & (0 - te)) + -1) | 0),
                    (te = (i >>> 12) & 16),
                    (r = i >>> te),
                    (i = (r >>> 5) & 8),
                    (o = r >>> i),
                    (r = (o >>> 2) & 4),
                    (k = o >>> r),
                    (o = (k >>> 1) & 2),
                    (C = k >>> o),
                    (k = (C >>> 1) & 1),
                    (De =
                      _[
                        (476 + (((i | te | r | o | k) + (C >>> k)) << 2)) >> 2
                      ] | 0));
                } else De = ve;
                De
                  ? ((Le = be), (Ee = De), (ke = Se), (Re = 90))
                  : ((xe = be), ($e = Se));
              }
              if ((Re | 0) == 90)
                for (;;) {
                  if (
                    ((Re = 0),
                    (k = ((_[(Ee + 4) >> 2] & -8) - s) | 0),
                    (C = k >>> 0 < Le >>> 0),
                    (o = C ? k : Le),
                    (k = C ? Ee : ke),
                    (C = _[(Ee + 16) >> 2] | 0),
                    C)
                  ) {
                    ((Le = o), (Ee = C), (ke = k), (Re = 90));
                    continue;
                  }
                  if (((Ee = _[(Ee + 20) >> 2] | 0), Ee))
                    ((Le = o), (ke = k), (Re = 90));
                  else {
                    ((xe = o), ($e = k));
                    break;
                  }
                }
              if (($e | 0) != 0 && xe >>> 0 < (((_[45] | 0) - s) | 0) >>> 0) {
                ((ne = _[47] | 0),
                  $e >>> 0 < ne >>> 0 && nt(),
                  (k = ($e + s) | 0),
                  $e >>> 0 >= k >>> 0 && nt(),
                  (o = _[($e + 24) >> 2] | 0),
                  (C = _[($e + 12) >> 2] | 0));
                do
                  if ((C | 0) == ($e | 0)) {
                    if (((r = ($e + 20) | 0), (te = _[r >> 2] | 0), te))
                      ((Ne = te), (Me = r));
                    else if (((i = ($e + 16) | 0), ($ = _[i >> 2] | 0), $))
                      ((Ne = $), (Me = i));
                    else {
                      Pe = 0;
                      break;
                    }
                    for (;;) {
                      if (((r = (Ne + 20) | 0), (te = _[r >> 2] | 0), te)) {
                        ((Ne = te), (Me = r));
                        continue;
                      }
                      if (((r = (Ne + 16) | 0), (te = _[r >> 2] | 0), te))
                        ((Ne = te), (Me = r));
                      else {
                        ((we = Ne), (Ae = Me));
                        break;
                      }
                    }
                    if (Ae >>> 0 < ne >>> 0) nt();
                    else {
                      ((_[Ae >> 2] = 0), (Pe = we));
                      break;
                    }
                  } else if (
                    ((r = _[($e + 8) >> 2] | 0),
                    r >>> 0 < ne >>> 0 && nt(),
                    (te = (r + 12) | 0),
                    (_[te >> 2] | 0) != ($e | 0) && nt(),
                    (i = (C + 8) | 0),
                    (_[i >> 2] | 0) == ($e | 0))
                  ) {
                    ((_[te >> 2] = C), (_[i >> 2] = r), (Pe = C));
                    break;
                  } else nt();
                while (!1);
                do
                  if (o) {
                    if (
                      ((C = _[($e + 28) >> 2] | 0),
                      (ne = (476 + (C << 2)) | 0),
                      ($e | 0) == (_[ne >> 2] | 0))
                    ) {
                      if (((_[ne >> 2] = Pe), !Pe)) {
                        _[44] = _[44] & ~(1 << C);
                        break;
                      }
                    } else if (
                      (o >>> 0 < (_[47] | 0) >>> 0 && nt(),
                      (C = (o + 16) | 0),
                      (_[C >> 2] | 0) == ($e | 0)
                        ? (_[C >> 2] = Pe)
                        : (_[(o + 20) >> 2] = Pe),
                      !Pe)
                    )
                      break;
                    ((C = _[47] | 0),
                      Pe >>> 0 < C >>> 0 && nt(),
                      (_[(Pe + 24) >> 2] = o),
                      (ne = _[($e + 16) >> 2] | 0));
                    do
                      if (ne)
                        if (ne >>> 0 < C >>> 0) nt();
                        else {
                          ((_[(Pe + 16) >> 2] = ne), (_[(ne + 24) >> 2] = Pe));
                          break;
                        }
                    while (!1);
                    if (((ne = _[($e + 20) >> 2] | 0), ne))
                      if (ne >>> 0 < (_[47] | 0) >>> 0) nt();
                      else {
                        ((_[(Pe + 20) >> 2] = ne), (_[(ne + 24) >> 2] = Pe));
                        break;
                      }
                  }
                while (!1);
                do
                  if (xe >>> 0 >= 16) {
                    if (
                      ((_[($e + 4) >> 2] = s | 3),
                      (_[(k + 4) >> 2] = xe | 1),
                      (_[(k + xe) >> 2] = xe),
                      (o = xe >>> 3),
                      xe >>> 0 < 256)
                    ) {
                      ((ne = (212 + ((o << 1) << 2)) | 0),
                        (C = _[43] | 0),
                        (r = 1 << o),
                        C & r
                          ? ((o = (ne + 8) | 0),
                            (i = _[o >> 2] | 0),
                            i >>> 0 < (_[47] | 0) >>> 0
                              ? nt()
                              : ((Fe = o), (Oe = i)))
                          : ((_[43] = C | r), (Fe = (ne + 8) | 0), (Oe = ne)),
                        (_[Fe >> 2] = k),
                        (_[(Oe + 12) >> 2] = k),
                        (_[(k + 8) >> 2] = Oe),
                        (_[(k + 12) >> 2] = ne));
                      break;
                    }
                    if (
                      ((ne = xe >>> 8),
                      ne
                        ? xe >>> 0 > 16777215
                          ? (Be = 31)
                          : ((r = (((ne + 1048320) | 0) >>> 16) & 8),
                            (C = ne << r),
                            (ne = (((C + 520192) | 0) >>> 16) & 4),
                            (i = C << ne),
                            (C = (((i + 245760) | 0) >>> 16) & 2),
                            (o = (14 - (ne | r | C) + ((i << C) >>> 15)) | 0),
                            (Be = ((xe >>> ((o + 7) | 0)) & 1) | (o << 1)))
                        : (Be = 0),
                      (o = (476 + (Be << 2)) | 0),
                      (_[(k + 28) >> 2] = Be),
                      (C = (k + 16) | 0),
                      (_[(C + 4) >> 2] = 0),
                      (_[C >> 2] = 0),
                      (C = _[44] | 0),
                      (i = 1 << Be),
                      !(C & i))
                    ) {
                      ((_[44] = C | i),
                        (_[o >> 2] = k),
                        (_[(k + 24) >> 2] = o),
                        (_[(k + 12) >> 2] = k),
                        (_[(k + 8) >> 2] = k));
                      break;
                    }
                    for (
                      i = xe << ((Be | 0) == 31 ? 0 : (25 - (Be >>> 1)) | 0),
                        C = _[o >> 2] | 0;
                      ;
                    ) {
                      if (((_[(C + 4) >> 2] & -8) | 0) == (xe | 0)) {
                        ((We = C), (Re = 148));
                        break;
                      }
                      if (
                        ((o = (C + 16 + ((i >>> 31) << 2)) | 0),
                        (r = _[o >> 2] | 0),
                        r)
                      )
                        ((i = i << 1), (C = r));
                      else {
                        ((qe = o), (Ue = C), (Re = 145));
                        break;
                      }
                    }
                    if ((Re | 0) == 145)
                      if (qe >>> 0 < (_[47] | 0) >>> 0) nt();
                      else {
                        ((_[qe >> 2] = k),
                          (_[(k + 24) >> 2] = Ue),
                          (_[(k + 12) >> 2] = k),
                          (_[(k + 8) >> 2] = k));
                        break;
                      }
                    else if ((Re | 0) == 148)
                      if (
                        ((C = (We + 8) | 0),
                        (i = _[C >> 2] | 0),
                        (r = _[47] | 0),
                        (i >>> 0 >= r >>> 0) & (We >>> 0 >= r >>> 0))
                      ) {
                        ((_[(i + 12) >> 2] = k),
                          (_[C >> 2] = k),
                          (_[(k + 8) >> 2] = i),
                          (_[(k + 12) >> 2] = We),
                          (_[(k + 24) >> 2] = 0));
                        break;
                      } else nt();
                  } else
                    ((i = (xe + s) | 0),
                      (_[($e + 4) >> 2] = i | 3),
                      (C = ($e + i + 4) | 0),
                      (_[C >> 2] = _[C >> 2] | 1));
                while (!1);
                return ((ee = ($e + 8) | 0), ee | 0);
              } else ye = s;
            } else ye = s;
          else ye = -1;
        while (!1);
        if ((($e = _[45] | 0), $e >>> 0 >= ye >>> 0))
          return (
            (xe = ($e - ye) | 0),
            (We = _[48] | 0),
            xe >>> 0 > 15
              ? ((Ue = (We + ye) | 0),
                (_[48] = Ue),
                (_[45] = xe),
                (_[(Ue + 4) >> 2] = xe | 1),
                (_[(Ue + xe) >> 2] = xe),
                (_[(We + 4) >> 2] = ye | 3))
              : ((_[45] = 0),
                (_[48] = 0),
                (_[(We + 4) >> 2] = $e | 3),
                (xe = (We + $e + 4) | 0),
                (_[xe >> 2] = _[xe >> 2] | 1)),
            (ee = (We + 8) | 0),
            ee | 0
          );
        if (((We = _[46] | 0), We >>> 0 > ye >>> 0))
          return (
            (xe = (We - ye) | 0),
            (_[46] = xe),
            (We = _[49] | 0),
            ($e = (We + ye) | 0),
            (_[49] = $e),
            (_[($e + 4) >> 2] = xe | 1),
            (_[(We + 4) >> 2] = ye | 3),
            (ee = (We + 8) | 0),
            ee | 0
          );
        do
          if (!(_[161] | 0))
            if (((We = dt(30) | 0), (We + -1) & We)) nt();
            else {
              ((_[163] = We),
                (_[162] = We),
                (_[164] = -1),
                (_[165] = -1),
                (_[166] = 0),
                (_[154] = 0),
                (_[161] = ((ot(0) | 0) & -16) ^ 1431655768));
              break;
            }
        while (!1);
        if (
          ((We = (ye + 48) | 0),
          (xe = _[163] | 0),
          ($e = (ye + 47) | 0),
          (Ue = (xe + $e) | 0),
          (qe = (0 - xe) | 0),
          (xe = Ue & qe),
          xe >>> 0 <= ye >>> 0 ||
            ((Be = _[153] | 0),
            (Be | 0) != 0 &&
              ((Oe = _[151] | 0),
              (Fe = (Oe + xe) | 0),
              (Fe >>> 0 <= Oe >>> 0) | (Fe >>> 0 > Be >>> 0))))
        )
          return ((ee = 0), ee | 0);
        e: do
          if (_[154] & 4) Re = 190;
          else {
            Be = _[49] | 0;
            t: do
              if (Be) {
                for (Fe = 620; ; ) {
                  if (
                    ((Oe = _[Fe >> 2] | 0),
                    Oe >>> 0 <= Be >>> 0 &&
                      ((Pe = (Fe + 4) | 0),
                      ((Oe + (_[Pe >> 2] | 0)) | 0) >>> 0 > Be >>> 0))
                  ) {
                    ((Ve = Fe), (He = Pe));
                    break;
                  }
                  if (((Fe = _[(Fe + 8) >> 2] | 0), !Fe)) {
                    Re = 173;
                    break t;
                  }
                }
                if (((Fe = (Ue - (_[46] | 0)) & qe), Fe >>> 0 < 2147483647))
                  if (
                    ((Pe = rt(Fe | 0) | 0),
                    (Pe | 0) == (((_[Ve >> 2] | 0) + (_[He >> 2] | 0)) | 0))
                  ) {
                    if ((Pe | 0) != -1) {
                      ((Ge = Pe), (ze = Fe), (Re = 193));
                      break e;
                    }
                  } else ((je = Pe), (Ke = Fe), (Re = 183));
              } else Re = 173;
            while (!1);
            do
              if (
                (Re | 0) == 173 &&
                ((Be = rt(0) | 0), (Be | 0) != -1) &&
                ((s = Be),
                (Fe = _[162] | 0),
                (Pe = (Fe + -1) | 0),
                Pe & s
                  ? (Qe = (xe - s + ((Pe + s) & (0 - Fe))) | 0)
                  : (Qe = xe),
                (Fe = _[151] | 0),
                (s = (Fe + Qe) | 0),
                (Qe >>> 0 > ye >>> 0) & (Qe >>> 0 < 2147483647))
              ) {
                if (
                  ((Pe = _[153] | 0),
                  (Pe | 0) != 0 && (s >>> 0 <= Fe >>> 0) | (s >>> 0 > Pe >>> 0))
                )
                  break;
                if (((Pe = rt(Qe | 0) | 0), (Pe | 0) == (Be | 0))) {
                  ((Ge = Be), (ze = Qe), (Re = 193));
                  break e;
                } else ((je = Pe), (Ke = Qe), (Re = 183));
              }
            while (!1);
            t: do
              if ((Re | 0) == 183) {
                Pe = (0 - Ke) | 0;
                do
                  if (
                    (We >>> 0 > Ke >>> 0) &
                      ((Ke >>> 0 < 2147483647) & ((je | 0) != -1)) &&
                    ((Be = _[163] | 0),
                    (s = ($e - Ke + Be) & (0 - Be)),
                    s >>> 0 < 2147483647)
                  )
                    if ((rt(s | 0) | 0) == -1) {
                      rt(Pe | 0) | 0;
                      break t;
                    } else {
                      Xe = (s + Ke) | 0;
                      break;
                    }
                  else Xe = Ke;
                while (!1);
                if ((je | 0) != -1) {
                  ((Ge = je), (ze = Xe), (Re = 193));
                  break e;
                }
              }
            while (!1);
            ((_[154] = _[154] | 4), (Re = 190));
          }
        while (!1);
        if (
          ((Re | 0) == 190 &&
            xe >>> 0 < 2147483647 &&
            ((Xe = rt(xe | 0) | 0),
            (xe = rt(0) | 0),
            (Xe >>> 0 < xe >>> 0) & (((Xe | 0) != -1) & ((xe | 0) != -1))) &&
            ((je = (xe - Xe) | 0), je >>> 0 > ((ye + 40) | 0) >>> 0) &&
            ((Ge = Xe), (ze = je), (Re = 193)),
          (Re | 0) == 193)
        ) {
          ((je = ((_[151] | 0) + ze) | 0),
            (_[151] = je),
            je >>> 0 > (_[152] | 0) >>> 0 && (_[152] = je),
            (je = _[49] | 0));
          do
            if (je) {
              Xe = 620;
              do {
                if (
                  ((xe = _[Xe >> 2] | 0),
                  (Ke = (Xe + 4) | 0),
                  ($e = _[Ke >> 2] | 0),
                  (Ge | 0) == ((xe + $e) | 0))
                ) {
                  ((Ye = xe), (Je = Ke), (Ze = $e), (et = Xe), (Re = 203));
                  break;
                }
                Xe = _[(Xe + 8) >> 2] | 0;
              } while ((Xe | 0) != 0);
              if (
                (Re | 0) == 203 &&
                ((_[(et + 12) >> 2] & 8) | 0) == 0 &&
                (je >>> 0 < Ge >>> 0) & (je >>> 0 >= Ye >>> 0)
              ) {
                ((_[Je >> 2] = Ze + ze),
                  (Xe = (je + 8) | 0),
                  ($e = ((Xe & 7) | 0) == 0 ? 0 : (0 - Xe) & 7),
                  (Xe = (je + $e) | 0),
                  (Ke = (ze - $e + (_[46] | 0)) | 0),
                  (_[49] = Xe),
                  (_[46] = Ke),
                  (_[(Xe + 4) >> 2] = Ke | 1),
                  (_[(Xe + Ke + 4) >> 2] = 40),
                  (_[50] = _[165]));
                break;
              }
              for (
                Ke = _[47] | 0,
                  Ge >>> 0 < Ke >>> 0 ? ((_[47] = Ge), (tt = Ge)) : (tt = Ke),
                  Ke = (Ge + ze) | 0,
                  Xe = 620;
                ;
              ) {
                if ((_[Xe >> 2] | 0) == (Ke | 0)) {
                  ((at = Xe), (it = Xe), (Re = 211));
                  break;
                }
                if (((Xe = _[(Xe + 8) >> 2] | 0), !Xe)) {
                  lt = 620;
                  break;
                }
              }
              if ((Re | 0) == 211)
                if (_[(it + 12) >> 2] & 8) lt = 620;
                else {
                  ((_[at >> 2] = Ge),
                    (Xe = (it + 4) | 0),
                    (_[Xe >> 2] = (_[Xe >> 2] | 0) + ze),
                    (Xe = (Ge + 8) | 0),
                    ($e = (Ge + (((Xe & 7) | 0) == 0 ? 0 : (0 - Xe) & 7)) | 0),
                    (Xe = (Ke + 8) | 0),
                    (xe = (Ke + (((Xe & 7) | 0) == 0 ? 0 : (0 - Xe) & 7)) | 0),
                    (Xe = ($e + ye) | 0),
                    (We = (xe - $e - ye) | 0),
                    (_[($e + 4) >> 2] = ye | 3));
                  do
                    if ((xe | 0) != (je | 0)) {
                      if ((xe | 0) == (_[48] | 0)) {
                        ((Qe = ((_[45] | 0) + We) | 0),
                          (_[45] = Qe),
                          (_[48] = Xe),
                          (_[(Xe + 4) >> 2] = Qe | 1),
                          (_[(Xe + Qe) >> 2] = Qe));
                        break;
                      }
                      if (((Qe = _[(xe + 4) >> 2] | 0), ((Qe & 3) | 0) == 1)) {
                        ((He = Qe & -8), (Ve = Qe >>> 3));
                        e: do
                          if (Qe >>> 0 >= 256) {
                            ((qe = _[(xe + 24) >> 2] | 0),
                              (Ue = _[(xe + 12) >> 2] | 0));
                            do
                              if ((Ue | 0) == (xe | 0)) {
                                if (
                                  ((Pe = (xe + 16) | 0),
                                  (s = (Pe + 4) | 0),
                                  (Be = _[s >> 2] | 0),
                                  Be)
                                )
                                  ((ut = Be), (ct = s));
                                else if (((Fe = _[Pe >> 2] | 0), Fe))
                                  ((ut = Fe), (ct = Pe));
                                else {
                                  st = 0;
                                  break;
                                }
                                for (;;) {
                                  if (
                                    ((s = (ut + 20) | 0),
                                    (Be = _[s >> 2] | 0),
                                    Be)
                                  ) {
                                    ((ut = Be), (ct = s));
                                    continue;
                                  }
                                  if (
                                    ((s = (ut + 16) | 0),
                                    (Be = _[s >> 2] | 0),
                                    Be)
                                  )
                                    ((ut = Be), (ct = s));
                                  else {
                                    ((mt = ut), (pt = ct));
                                    break;
                                  }
                                }
                                if (pt >>> 0 < tt >>> 0) nt();
                                else {
                                  ((_[pt >> 2] = 0), (st = mt));
                                  break;
                                }
                              } else if (
                                ((s = _[(xe + 8) >> 2] | 0),
                                s >>> 0 < tt >>> 0 && nt(),
                                (Be = (s + 12) | 0),
                                (_[Be >> 2] | 0) != (xe | 0) && nt(),
                                (Pe = (Ue + 8) | 0),
                                (_[Pe >> 2] | 0) == (xe | 0))
                              ) {
                                ((_[Be >> 2] = Ue),
                                  (_[Pe >> 2] = s),
                                  (st = Ue));
                                break;
                              } else nt();
                            while (!1);
                            if (!qe) break;
                            ((Ue = _[(xe + 28) >> 2] | 0),
                              (s = (476 + (Ue << 2)) | 0));
                            do
                              if ((xe | 0) != (_[s >> 2] | 0)) {
                                if (
                                  (qe >>> 0 < (_[47] | 0) >>> 0 && nt(),
                                  (Pe = (qe + 16) | 0),
                                  (_[Pe >> 2] | 0) == (xe | 0)
                                    ? (_[Pe >> 2] = st)
                                    : (_[(qe + 20) >> 2] = st),
                                  !st)
                                )
                                  break e;
                              } else {
                                if (((_[s >> 2] = st), st)) break;
                                _[44] = _[44] & ~(1 << Ue);
                                break e;
                              }
                            while (!1);
                            ((Ue = _[47] | 0),
                              st >>> 0 < Ue >>> 0 && nt(),
                              (_[(st + 24) >> 2] = qe),
                              (s = (xe + 16) | 0),
                              (Pe = _[s >> 2] | 0));
                            do
                              if (Pe)
                                if (Pe >>> 0 < Ue >>> 0) nt();
                                else {
                                  ((_[(st + 16) >> 2] = Pe),
                                    (_[(Pe + 24) >> 2] = st));
                                  break;
                                }
                            while (!1);
                            if (((Pe = _[(s + 4) >> 2] | 0), !Pe)) break;
                            if (Pe >>> 0 < (_[47] | 0) >>> 0) nt();
                            else {
                              ((_[(st + 20) >> 2] = Pe),
                                (_[(Pe + 24) >> 2] = st));
                              break;
                            }
                          } else {
                            ((Pe = _[(xe + 8) >> 2] | 0),
                              (Ue = _[(xe + 12) >> 2] | 0),
                              (qe = (212 + ((Ve << 1) << 2)) | 0));
                            do
                              if ((Pe | 0) != (qe | 0)) {
                                if (
                                  (Pe >>> 0 < tt >>> 0 && nt(),
                                  (_[(Pe + 12) >> 2] | 0) == (xe | 0))
                                )
                                  break;
                                nt();
                              }
                            while (!1);
                            if ((Ue | 0) == (Pe | 0)) {
                              _[43] = _[43] & ~(1 << Ve);
                              break;
                            }
                            do
                              if ((Ue | 0) == (qe | 0)) _t = (Ue + 8) | 0;
                              else {
                                if (
                                  (Ue >>> 0 < tt >>> 0 && nt(),
                                  (s = (Ue + 8) | 0),
                                  (_[s >> 2] | 0) == (xe | 0))
                                ) {
                                  _t = s;
                                  break;
                                }
                                nt();
                              }
                            while (!1);
                            ((_[(Pe + 12) >> 2] = Ue), (_[_t >> 2] = Pe));
                          }
                        while (!1);
                        ((ft = (xe + He) | 0), (gt = (He + We) | 0));
                      } else ((ft = xe), (gt = We));
                      if (
                        ((Ve = (ft + 4) | 0),
                        (_[Ve >> 2] = _[Ve >> 2] & -2),
                        (_[(Xe + 4) >> 2] = gt | 1),
                        (_[(Xe + gt) >> 2] = gt),
                        (Ve = gt >>> 3),
                        gt >>> 0 < 256)
                      ) {
                        ((Qe = (212 + ((Ve << 1) << 2)) | 0),
                          (qe = _[43] | 0),
                          (s = 1 << Ve));
                        do
                          if (!(qe & s))
                            ((_[43] = qe | s), (ht = (Qe + 8) | 0), (yt = Qe));
                          else {
                            if (
                              ((Ve = (Qe + 8) | 0),
                              (Be = _[Ve >> 2] | 0),
                              Be >>> 0 >= (_[47] | 0) >>> 0)
                            ) {
                              ((ht = Ve), (yt = Be));
                              break;
                            }
                            nt();
                          }
                        while (!1);
                        ((_[ht >> 2] = Xe),
                          (_[(yt + 12) >> 2] = Xe),
                          (_[(Xe + 8) >> 2] = yt),
                          (_[(Xe + 12) >> 2] = Qe));
                        break;
                      }
                      s = gt >>> 8;
                      do
                        if (!s) Ct = 0;
                        else {
                          if (gt >>> 0 > 16777215) {
                            Ct = 31;
                            break;
                          }
                          ((qe = (((s + 1048320) | 0) >>> 16) & 8),
                            (He = s << qe),
                            (Be = (((He + 520192) | 0) >>> 16) & 4),
                            (Ve = He << Be),
                            (He = (((Ve + 245760) | 0) >>> 16) & 2),
                            (Fe =
                              (14 - (Be | qe | He) + ((Ve << He) >>> 15)) | 0),
                            (Ct = ((gt >>> ((Fe + 7) | 0)) & 1) | (Fe << 1)));
                        }
                      while (!1);
                      if (
                        ((s = (476 + (Ct << 2)) | 0),
                        (_[(Xe + 28) >> 2] = Ct),
                        (Qe = (Xe + 16) | 0),
                        (_[(Qe + 4) >> 2] = 0),
                        (_[Qe >> 2] = 0),
                        (Qe = _[44] | 0),
                        (Fe = 1 << Ct),
                        !(Qe & Fe))
                      ) {
                        ((_[44] = Qe | Fe),
                          (_[s >> 2] = Xe),
                          (_[(Xe + 24) >> 2] = s),
                          (_[(Xe + 12) >> 2] = Xe),
                          (_[(Xe + 8) >> 2] = Xe));
                        break;
                      }
                      for (
                        Fe = gt << ((Ct | 0) == 31 ? 0 : (25 - (Ct >>> 1)) | 0),
                          Qe = _[s >> 2] | 0;
                        ;
                      ) {
                        if (((_[(Qe + 4) >> 2] & -8) | 0) == (gt | 0)) {
                          ((bt = Qe), (Re = 281));
                          break;
                        }
                        if (
                          ((s = (Qe + 16 + ((Fe >>> 31) << 2)) | 0),
                          (He = _[s >> 2] | 0),
                          He)
                        )
                          ((Fe = Fe << 1), (Qe = He));
                        else {
                          ((vt = s), (St = Qe), (Re = 278));
                          break;
                        }
                      }
                      if ((Re | 0) == 278)
                        if (vt >>> 0 < (_[47] | 0) >>> 0) nt();
                        else {
                          ((_[vt >> 2] = Xe),
                            (_[(Xe + 24) >> 2] = St),
                            (_[(Xe + 12) >> 2] = Xe),
                            (_[(Xe + 8) >> 2] = Xe));
                          break;
                        }
                      else if ((Re | 0) == 281)
                        if (
                          ((Qe = (bt + 8) | 0),
                          (Fe = _[Qe >> 2] | 0),
                          (He = _[47] | 0),
                          (Fe >>> 0 >= He >>> 0) & (bt >>> 0 >= He >>> 0))
                        ) {
                          ((_[(Fe + 12) >> 2] = Xe),
                            (_[Qe >> 2] = Xe),
                            (_[(Xe + 8) >> 2] = Fe),
                            (_[(Xe + 12) >> 2] = bt),
                            (_[(Xe + 24) >> 2] = 0));
                          break;
                        } else nt();
                    } else
                      ((Fe = ((_[46] | 0) + We) | 0),
                        (_[46] = Fe),
                        (_[49] = Xe),
                        (_[(Xe + 4) >> 2] = Fe | 1));
                  while (!1);
                  return ((ee = ($e + 8) | 0), ee | 0);
                }
              for (;;) {
                if (
                  ((Xe = _[lt >> 2] | 0),
                  Xe >>> 0 <= je >>> 0 &&
                    ((We = (Xe + (_[(lt + 4) >> 2] | 0)) | 0),
                    We >>> 0 > je >>> 0))
                ) {
                  Rt = We;
                  break;
                }
                lt = _[(lt + 8) >> 2] | 0;
              }
              (($e = (Rt + -47) | 0),
                (We = ($e + 8) | 0),
                (Xe = ($e + (((We & 7) | 0) == 0 ? 0 : (0 - We) & 7)) | 0),
                (We = (je + 16) | 0),
                ($e = Xe >>> 0 < We >>> 0 ? je : Xe),
                (Xe = ($e + 8) | 0),
                (xe = (Ge + 8) | 0),
                (Ke = ((xe & 7) | 0) == 0 ? 0 : (0 - xe) & 7),
                (xe = (Ge + Ke) | 0),
                (Fe = (ze + -40 - Ke) | 0),
                (_[49] = xe),
                (_[46] = Fe),
                (_[(xe + 4) >> 2] = Fe | 1),
                (_[(xe + Fe + 4) >> 2] = 40),
                (_[50] = _[165]),
                (Fe = ($e + 4) | 0),
                (_[Fe >> 2] = 27),
                (_[Xe >> 2] = _[155]),
                (_[(Xe + 4) >> 2] = _[156]),
                (_[(Xe + 8) >> 2] = _[157]),
                (_[(Xe + 12) >> 2] = _[158]),
                (_[155] = Ge),
                (_[156] = ze),
                (_[158] = 0),
                (_[157] = Xe),
                (Xe = ($e + 24) | 0));
              do ((Xe = (Xe + 4) | 0), (_[Xe >> 2] = 7));
              while (((Xe + 4) | 0) >>> 0 < Rt >>> 0);
              if (($e | 0) != (je | 0)) {
                if (
                  ((Xe = ($e - je) | 0),
                  (_[Fe >> 2] = _[Fe >> 2] & -2),
                  (_[(je + 4) >> 2] = Xe | 1),
                  (_[$e >> 2] = Xe),
                  (xe = Xe >>> 3),
                  Xe >>> 0 < 256)
                ) {
                  ((Ke = (212 + ((xe << 1) << 2)) | 0),
                    (Qe = _[43] | 0),
                    (He = 1 << xe),
                    Qe & He
                      ? ((xe = (Ke + 8) | 0),
                        (s = _[xe >> 2] | 0),
                        s >>> 0 < (_[47] | 0) >>> 0
                          ? nt()
                          : ((Lt = xe), (Et = s)))
                      : ((_[43] = Qe | He), (Lt = (Ke + 8) | 0), (Et = Ke)),
                    (_[Lt >> 2] = je),
                    (_[(Et + 12) >> 2] = je),
                    (_[(je + 8) >> 2] = Et),
                    (_[(je + 12) >> 2] = Ke));
                  break;
                }
                if (
                  ((Ke = Xe >>> 8),
                  Ke
                    ? Xe >>> 0 > 16777215
                      ? (kt = 31)
                      : ((He = (((Ke + 1048320) | 0) >>> 16) & 8),
                        (Qe = Ke << He),
                        (Ke = (((Qe + 520192) | 0) >>> 16) & 4),
                        (s = Qe << Ke),
                        (Qe = (((s + 245760) | 0) >>> 16) & 2),
                        (xe = (14 - (Ke | He | Qe) + ((s << Qe) >>> 15)) | 0),
                        (kt = ((Xe >>> ((xe + 7) | 0)) & 1) | (xe << 1)))
                    : (kt = 0),
                  (xe = (476 + (kt << 2)) | 0),
                  (_[(je + 28) >> 2] = kt),
                  (_[(je + 20) >> 2] = 0),
                  (_[We >> 2] = 0),
                  (Qe = _[44] | 0),
                  (s = 1 << kt),
                  !(Qe & s))
                ) {
                  ((_[44] = Qe | s),
                    (_[xe >> 2] = je),
                    (_[(je + 24) >> 2] = xe),
                    (_[(je + 12) >> 2] = je),
                    (_[(je + 8) >> 2] = je));
                  break;
                }
                for (
                  s = Xe << ((kt | 0) == 31 ? 0 : (25 - (kt >>> 1)) | 0),
                    Qe = _[xe >> 2] | 0;
                  ;
                ) {
                  if (((_[(Qe + 4) >> 2] & -8) | 0) == (Xe | 0)) {
                    ((Tt = Qe), (Re = 307));
                    break;
                  }
                  if (
                    ((xe = (Qe + 16 + ((s >>> 31) << 2)) | 0),
                    (He = _[xe >> 2] | 0),
                    He)
                  )
                    ((s = s << 1), (Qe = He));
                  else {
                    ((Dt = xe), (xt = Qe), (Re = 304));
                    break;
                  }
                }
                if ((Re | 0) == 304)
                  if (Dt >>> 0 < (_[47] | 0) >>> 0) nt();
                  else {
                    ((_[Dt >> 2] = je),
                      (_[(je + 24) >> 2] = xt),
                      (_[(je + 12) >> 2] = je),
                      (_[(je + 8) >> 2] = je));
                    break;
                  }
                else if ((Re | 0) == 307)
                  if (
                    ((Qe = (Tt + 8) | 0),
                    (s = _[Qe >> 2] | 0),
                    (Xe = _[47] | 0),
                    (s >>> 0 >= Xe >>> 0) & (Tt >>> 0 >= Xe >>> 0))
                  ) {
                    ((_[(s + 12) >> 2] = je),
                      (_[Qe >> 2] = je),
                      (_[(je + 8) >> 2] = s),
                      (_[(je + 12) >> 2] = Tt),
                      (_[(je + 24) >> 2] = 0));
                    break;
                  } else nt();
              }
            } else {
              ((s = _[47] | 0),
                ((s | 0) == 0) | (Ge >>> 0 < s >>> 0) && (_[47] = Ge),
                (_[155] = Ge),
                (_[156] = ze),
                (_[158] = 0),
                (_[52] = _[161]),
                (_[51] = -1),
                (s = 0));
              do
                ((Qe = (212 + ((s << 1) << 2)) | 0),
                  (_[(Qe + 12) >> 2] = Qe),
                  (_[(Qe + 8) >> 2] = Qe),
                  (s = (s + 1) | 0));
              while ((s | 0) != 32);
              ((s = (Ge + 8) | 0),
                (Qe = ((s & 7) | 0) == 0 ? 0 : (0 - s) & 7),
                (s = (Ge + Qe) | 0),
                (Xe = (ze + -40 - Qe) | 0),
                (_[49] = s),
                (_[46] = Xe),
                (_[(s + 4) >> 2] = Xe | 1),
                (_[(s + Xe + 4) >> 2] = 40),
                (_[50] = _[165]));
            }
          while (!1);
          if (((ze = _[46] | 0), ze >>> 0 > ye >>> 0))
            return (
              (Ge = (ze - ye) | 0),
              (_[46] = Ge),
              (ze = _[49] | 0),
              (je = (ze + ye) | 0),
              (_[49] = je),
              (_[(je + 4) >> 2] = Ge | 1),
              (_[(ze + 4) >> 2] = ye | 3),
              (ee = (ze + 8) | 0),
              ee | 0
            );
        }
        return ((_[(It() | 0) >> 2] = 12), (ee = 0), ee | 0);
      }
      function Bt(t) {
        t = t | 0;
        var r = 0,
          o = 0,
          i = 0,
          s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          j = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0,
          _e = 0,
          fe = 0,
          ge = 0,
          he = 0,
          ye = 0,
          Ce = 0,
          be = 0,
          ve = 0,
          Se = 0,
          Re = 0,
          Le = 0;
        if (t) {
          ((r = (t + -8) | 0),
            (o = _[47] | 0),
            r >>> 0 < o >>> 0 && nt(),
            (i = _[(t + -4) >> 2] | 0),
            (t = i & 3),
            (t | 0) == 1 && nt(),
            (s = i & -8),
            (g = (r + s) | 0));
          do
            if (i & 1) ((Q = r), (ee = s));
            else {
              if (((C = _[r >> 2] | 0), !t)) return;
              if (
                ((k = (r + (0 - C)) | 0),
                (x = (C + s) | 0),
                k >>> 0 < o >>> 0 && nt(),
                (k | 0) == (_[48] | 0))
              ) {
                if (
                  (($ = (g + 4) | 0), (j = _[$ >> 2] | 0), ((j & 3) | 0) != 3)
                ) {
                  ((Q = k), (ee = x));
                  break;
                }
                ((_[45] = x),
                  (_[$ >> 2] = j & -2),
                  (_[(k + 4) >> 2] = x | 1),
                  (_[(k + x) >> 2] = x));
                return;
              }
              if (((j = C >>> 3), C >>> 0 < 256)) {
                if (
                  ((C = _[(k + 8) >> 2] | 0),
                  ($ = _[(k + 12) >> 2] | 0),
                  (te = (212 + ((j << 1) << 2)) | 0),
                  (C | 0) != (te | 0) &&
                    (C >>> 0 < o >>> 0 && nt(),
                    (_[(C + 12) >> 2] | 0) != (k | 0) && nt()),
                  ($ | 0) == (C | 0))
                ) {
                  ((_[43] = _[43] & ~(1 << j)), (Q = k), (ee = x));
                  break;
                }
                (($ | 0) != (te | 0)
                  ? ($ >>> 0 < o >>> 0 && nt(),
                    (te = ($ + 8) | 0),
                    (_[te >> 2] | 0) == (k | 0) ? (ne = te) : nt())
                  : (ne = ($ + 8) | 0),
                  (_[(C + 12) >> 2] = $),
                  (_[ne >> 2] = C),
                  (Q = k),
                  (ee = x));
                break;
              }
              ((C = _[(k + 24) >> 2] | 0), ($ = _[(k + 12) >> 2] | 0));
              do
                if (($ | 0) == (k | 0)) {
                  if (
                    ((te = (k + 16) | 0),
                    (j = (te + 4) | 0),
                    (re = _[j >> 2] | 0),
                    re)
                  )
                    ((ie = re), (le = j));
                  else if (((oe = _[te >> 2] | 0), oe)) ((ie = oe), (le = te));
                  else {
                    ae = 0;
                    break;
                  }
                  for (;;) {
                    if (((j = (ie + 20) | 0), (re = _[j >> 2] | 0), re)) {
                      ((ie = re), (le = j));
                      continue;
                    }
                    if (((j = (ie + 16) | 0), (re = _[j >> 2] | 0), re))
                      ((ie = re), (le = j));
                    else {
                      ((se = ie), (ue = le));
                      break;
                    }
                  }
                  if (ue >>> 0 < o >>> 0) nt();
                  else {
                    ((_[ue >> 2] = 0), (ae = se));
                    break;
                  }
                } else if (
                  ((j = _[(k + 8) >> 2] | 0),
                  j >>> 0 < o >>> 0 && nt(),
                  (re = (j + 12) | 0),
                  (_[re >> 2] | 0) != (k | 0) && nt(),
                  (te = ($ + 8) | 0),
                  (_[te >> 2] | 0) == (k | 0))
                ) {
                  ((_[re >> 2] = $), (_[te >> 2] = j), (ae = $));
                  break;
                } else nt();
              while (!1);
              if (C) {
                if (
                  (($ = _[(k + 28) >> 2] | 0),
                  (j = (476 + ($ << 2)) | 0),
                  (k | 0) == (_[j >> 2] | 0))
                ) {
                  if (((_[j >> 2] = ae), !ae)) {
                    ((_[44] = _[44] & ~(1 << $)), (Q = k), (ee = x));
                    break;
                  }
                } else if (
                  (C >>> 0 < (_[47] | 0) >>> 0 && nt(),
                  ($ = (C + 16) | 0),
                  (_[$ >> 2] | 0) == (k | 0)
                    ? (_[$ >> 2] = ae)
                    : (_[(C + 20) >> 2] = ae),
                  !ae)
                ) {
                  ((Q = k), (ee = x));
                  break;
                }
                (($ = _[47] | 0),
                  ae >>> 0 < $ >>> 0 && nt(),
                  (_[(ae + 24) >> 2] = C),
                  (j = (k + 16) | 0),
                  (te = _[j >> 2] | 0));
                do
                  if (te)
                    if (te >>> 0 < $ >>> 0) nt();
                    else {
                      ((_[(ae + 16) >> 2] = te), (_[(te + 24) >> 2] = ae));
                      break;
                    }
                while (!1);
                if (((te = _[(j + 4) >> 2] | 0), te))
                  if (te >>> 0 < (_[47] | 0) >>> 0) nt();
                  else {
                    ((_[(ae + 20) >> 2] = te),
                      (_[(te + 24) >> 2] = ae),
                      (Q = k),
                      (ee = x));
                    break;
                  }
                else ((Q = k), (ee = x));
              } else ((Q = k), (ee = x));
            }
          while (!1);
          if (
            (Q >>> 0 >= g >>> 0 && nt(),
            (s = (g + 4) | 0),
            (r = _[s >> 2] | 0),
            r & 1 || nt(),
            r & 2)
          )
            ((_[s >> 2] = r & -2),
              (_[(Q + 4) >> 2] = ee | 1),
              (_[(Q + ee) >> 2] = ee),
              (ge = ee));
          else {
            if ((g | 0) == (_[49] | 0)) {
              if (
                ((ae = ((_[46] | 0) + ee) | 0),
                (_[46] = ae),
                (_[49] = Q),
                (_[(Q + 4) >> 2] = ae | 1),
                (Q | 0) != (_[48] | 0))
              )
                return;
              ((_[48] = 0), (_[45] = 0));
              return;
            }
            if ((g | 0) == (_[48] | 0)) {
              ((ae = ((_[45] | 0) + ee) | 0),
                (_[45] = ae),
                (_[48] = Q),
                (_[(Q + 4) >> 2] = ae | 1),
                (_[(Q + ae) >> 2] = ae));
              return;
            }
            ((ae = ((r & -8) + ee) | 0), (o = r >>> 3));
            do
              if (r >>> 0 >= 256) {
                ((se = _[(g + 24) >> 2] | 0), (ue = _[(g + 12) >> 2] | 0));
                do
                  if ((ue | 0) == (g | 0)) {
                    if (
                      ((le = (g + 16) | 0),
                      (ie = (le + 4) | 0),
                      (ne = _[ie >> 2] | 0),
                      ne)
                    )
                      ((de = ne), (me = ie));
                    else if (((t = _[le >> 2] | 0), t)) ((de = t), (me = le));
                    else {
                      ce = 0;
                      break;
                    }
                    for (;;) {
                      if (((ie = (de + 20) | 0), (ne = _[ie >> 2] | 0), ne)) {
                        ((de = ne), (me = ie));
                        continue;
                      }
                      if (((ie = (de + 16) | 0), (ne = _[ie >> 2] | 0), ne))
                        ((de = ne), (me = ie));
                      else {
                        ((pe = de), (_e = me));
                        break;
                      }
                    }
                    if (_e >>> 0 < (_[47] | 0) >>> 0) nt();
                    else {
                      ((_[_e >> 2] = 0), (ce = pe));
                      break;
                    }
                  } else if (
                    ((ie = _[(g + 8) >> 2] | 0),
                    ie >>> 0 < (_[47] | 0) >>> 0 && nt(),
                    (ne = (ie + 12) | 0),
                    (_[ne >> 2] | 0) != (g | 0) && nt(),
                    (le = (ue + 8) | 0),
                    (_[le >> 2] | 0) == (g | 0))
                  ) {
                    ((_[ne >> 2] = ue), (_[le >> 2] = ie), (ce = ue));
                    break;
                  } else nt();
                while (!1);
                if (se) {
                  if (
                    ((ue = _[(g + 28) >> 2] | 0),
                    (x = (476 + (ue << 2)) | 0),
                    (g | 0) == (_[x >> 2] | 0))
                  ) {
                    if (((_[x >> 2] = ce), !ce)) {
                      _[44] = _[44] & ~(1 << ue);
                      break;
                    }
                  } else if (
                    (se >>> 0 < (_[47] | 0) >>> 0 && nt(),
                    (ue = (se + 16) | 0),
                    (_[ue >> 2] | 0) == (g | 0)
                      ? (_[ue >> 2] = ce)
                      : (_[(se + 20) >> 2] = ce),
                    !ce)
                  )
                    break;
                  ((ue = _[47] | 0),
                    ce >>> 0 < ue >>> 0 && nt(),
                    (_[(ce + 24) >> 2] = se),
                    (x = (g + 16) | 0),
                    (k = _[x >> 2] | 0));
                  do
                    if (k)
                      if (k >>> 0 < ue >>> 0) nt();
                      else {
                        ((_[(ce + 16) >> 2] = k), (_[(k + 24) >> 2] = ce));
                        break;
                      }
                  while (!1);
                  if (((k = _[(x + 4) >> 2] | 0), k))
                    if (k >>> 0 < (_[47] | 0) >>> 0) nt();
                    else {
                      ((_[(ce + 20) >> 2] = k), (_[(k + 24) >> 2] = ce));
                      break;
                    }
                }
              } else {
                if (
                  ((k = _[(g + 8) >> 2] | 0),
                  (ue = _[(g + 12) >> 2] | 0),
                  (se = (212 + ((o << 1) << 2)) | 0),
                  (k | 0) != (se | 0) &&
                    (k >>> 0 < (_[47] | 0) >>> 0 && nt(),
                    (_[(k + 12) >> 2] | 0) != (g | 0) && nt()),
                  (ue | 0) == (k | 0))
                ) {
                  _[43] = _[43] & ~(1 << o);
                  break;
                }
                ((ue | 0) != (se | 0)
                  ? (ue >>> 0 < (_[47] | 0) >>> 0 && nt(),
                    (se = (ue + 8) | 0),
                    (_[se >> 2] | 0) == (g | 0) ? (fe = se) : nt())
                  : (fe = (ue + 8) | 0),
                  (_[(k + 12) >> 2] = ue),
                  (_[fe >> 2] = k));
              }
            while (!1);
            if (
              ((_[(Q + 4) >> 2] = ae | 1),
              (_[(Q + ae) >> 2] = ae),
              (Q | 0) == (_[48] | 0))
            ) {
              _[45] = ae;
              return;
            } else ge = ae;
          }
          if (((ee = ge >>> 3), ge >>> 0 < 256)) {
            ((r = (212 + ((ee << 1) << 2)) | 0),
              (s = _[43] | 0),
              (ae = 1 << ee),
              s & ae
                ? ((ee = (r + 8) | 0),
                  (fe = _[ee >> 2] | 0),
                  fe >>> 0 < (_[47] | 0) >>> 0 ? nt() : ((he = ee), (ye = fe)))
                : ((_[43] = s | ae), (he = (r + 8) | 0), (ye = r)),
              (_[he >> 2] = Q),
              (_[(ye + 12) >> 2] = Q),
              (_[(Q + 8) >> 2] = ye),
              (_[(Q + 12) >> 2] = r));
            return;
          }
          ((r = ge >>> 8),
            r
              ? ge >>> 0 > 16777215
                ? (Ce = 31)
                : ((ye = (((r + 1048320) | 0) >>> 16) & 8),
                  (he = r << ye),
                  (r = (((he + 520192) | 0) >>> 16) & 4),
                  (ae = he << r),
                  (he = (((ae + 245760) | 0) >>> 16) & 2),
                  (s = (14 - (r | ye | he) + ((ae << he) >>> 15)) | 0),
                  (Ce = ((ge >>> ((s + 7) | 0)) & 1) | (s << 1)))
              : (Ce = 0),
            (s = (476 + (Ce << 2)) | 0),
            (_[(Q + 28) >> 2] = Ce),
            (_[(Q + 20) >> 2] = 0),
            (_[(Q + 16) >> 2] = 0),
            (he = _[44] | 0),
            (ae = 1 << Ce));
          do
            if (he & ae) {
              for (
                ye = ge << ((Ce | 0) == 31 ? 0 : (25 - (Ce >>> 1)) | 0),
                  r = _[s >> 2] | 0;
                ;
              ) {
                if (((_[(r + 4) >> 2] & -8) | 0) == (ge | 0)) {
                  ((be = r), (ve = 130));
                  break;
                }
                if (
                  ((fe = (r + 16 + ((ye >>> 31) << 2)) | 0),
                  (ee = _[fe >> 2] | 0),
                  ee)
                )
                  ((ye = ye << 1), (r = ee));
                else {
                  ((Se = fe), (Re = r), (ve = 127));
                  break;
                }
              }
              if ((ve | 0) == 127)
                if (Se >>> 0 < (_[47] | 0) >>> 0) nt();
                else {
                  ((_[Se >> 2] = Q),
                    (_[(Q + 24) >> 2] = Re),
                    (_[(Q + 12) >> 2] = Q),
                    (_[(Q + 8) >> 2] = Q));
                  break;
                }
              else if ((ve | 0) == 130)
                if (
                  ((r = (be + 8) | 0),
                  (ye = _[r >> 2] | 0),
                  (x = _[47] | 0),
                  (ye >>> 0 >= x >>> 0) & (be >>> 0 >= x >>> 0))
                ) {
                  ((_[(ye + 12) >> 2] = Q),
                    (_[r >> 2] = Q),
                    (_[(Q + 8) >> 2] = ye),
                    (_[(Q + 12) >> 2] = be),
                    (_[(Q + 24) >> 2] = 0));
                  break;
                } else nt();
            } else
              ((_[44] = he | ae),
                (_[s >> 2] = Q),
                (_[(Q + 24) >> 2] = s),
                (_[(Q + 12) >> 2] = Q),
                (_[(Q + 8) >> 2] = Q));
          while (!1);
          if (((Q = ((_[51] | 0) + -1) | 0), (_[51] = Q), !Q)) Le = 628;
          else return;
          for (; (Q = _[Le >> 2] | 0), Q; ) Le = (Q + 8) | 0;
          _[51] = -1;
        }
      }
      function Wt() {}
      function qt(t, r, o) {
        return (
          (t = t | 0),
          (r = r | 0),
          (o = o | 0),
          (o | 0) < 32
            ? ((ye = r >> o), (t >>> o) | ((r & ((1 << o) - 1)) << (32 - o)))
            : ((ye = (r | 0) < 0 ? -1 : 0), (r >> (o - 32)) | 0)
        );
      }
      function Ut(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0;
        return (
          (s = (r - i) >>> 0),
          (s = (r - i - ((o >>> 0 > t >>> 0) | 0)) >>> 0),
          (ye = s),
          ((t - o) >>> 0) | 0 | 0
        );
      }
      function Vt(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0;
        return (
          (s = (t + o) >>> 0),
          (ye = (r + i + ((s >>> 0 < t >>> 0) | 0)) >>> 0),
          s | 0 | 0
        );
      }
      function Ht(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var s = 0,
          g = 0,
          C = 0,
          k = 0;
        if (((s = (t + o) | 0), (o | 0) >= 20)) {
          if (
            ((r = r & 255),
            (g = t & 3),
            (C = r | (r << 8) | (r << 16) | (r << 24)),
            (k = s & -4),
            g)
          )
            for (g = (t + 4 - g) | 0; (t | 0) < (g | 0); )
              ((i[t >> 0] = r), (t = (t + 1) | 0));
          for (; (t | 0) < (k | 0); ) ((_[t >> 2] = C), (t = (t + 4) | 0));
        }
        for (; (t | 0) < (s | 0); ) ((i[t >> 0] = r), (t = (t + 1) | 0));
        return (t - o) | 0;
      }
      function Gt(t, r, o) {
        return (
          (t = t | 0),
          (r = r | 0),
          (o = o | 0),
          (o | 0) < 32
            ? ((ye = r >>> o), (t >>> o) | ((r & ((1 << o) - 1)) << (32 - o)))
            : ((ye = 0), (r >>> (o - 32)) | 0)
        );
      }
      function zt(t, r, o) {
        return (
          (t = t | 0),
          (r = r | 0),
          (o = o | 0),
          (o | 0) < 32
            ? ((ye =
                (r << o) | ((t & (((1 << o) - 1) << (32 - o))) >>> (32 - o))),
              t << o)
            : ((ye = t << (o - 32)), 0)
        );
      }
      function jt(t, r, o) {
        ((t = t | 0), (r = r | 0), (o = o | 0));
        var s = 0;
        if ((o | 0) >= 4096) return it(t | 0, r | 0, o | 0) | 0;
        if (((s = t | 0), (t & 3) == (r & 3))) {
          for (; t & 3; ) {
            if (!o) return s | 0;
            ((i[t >> 0] = i[r >> 0] | 0),
              (t = (t + 1) | 0),
              (r = (r + 1) | 0),
              (o = (o - 1) | 0));
          }
          for (; (o | 0) >= 4; )
            ((_[t >> 2] = _[r >> 2]),
              (t = (t + 4) | 0),
              (r = (r + 4) | 0),
              (o = (o - 4) | 0));
        }
        for (; (o | 0) > 0; )
          ((i[t >> 0] = i[r >> 0] | 0),
            (t = (t + 1) | 0),
            (r = (r + 1) | 0),
            (o = (o - 1) | 0));
        return s | 0;
      }
      function Kt(t) {
        t = t | 0;
        var r = 0;
        return (
          (r = i[(ne + (t & 255)) >> 0] | 0),
          (r | 0) < 8
            ? r | 0
            : ((r = i[(ne + ((t >> 8) & 255)) >> 0] | 0),
              (r | 0) < 8
                ? (r + 8) | 0
                : ((r = i[(ne + ((t >> 16) & 255)) >> 0] | 0),
                  (r | 0) < 8
                    ? (r + 16) | 0
                    : ((i[(ne + (t >>> 24)) >> 0] | 0) + 24) | 0))
        );
      }
      function Qt(t, r) {
        ((t = t | 0), (r = r | 0));
        var o = 0,
          i = 0,
          s = 0,
          _ = 0;
        return (
          (o = t & 65535),
          (i = r & 65535),
          (s = Ue(i, o) | 0),
          (_ = t >>> 16),
          (t = ((s >>> 16) + (Ue(i, _) | 0)) | 0),
          (i = r >>> 16),
          (r = Ue(i, o) | 0),
          (ye =
            ((t >>> 16) + (Ue(i, _) | 0) + ((((t & 65535) + r) | 0) >>> 16)) |
            0),
          ((t + r) << 16) | (s & 65535) | 0 | 0
        );
      }
      function Xt(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0,
          _ = 0,
          g = 0,
          C = 0,
          k = 0;
        return (
          (s = (r >> 31) | (((r | 0) < 0 ? -1 : 0) << 1)),
          (_ = (((r | 0) < 0 ? -1 : 0) >> 31) | (((r | 0) < 0 ? -1 : 0) << 1)),
          (g = (i >> 31) | (((i | 0) < 0 ? -1 : 0) << 1)),
          (C = (((i | 0) < 0 ? -1 : 0) >> 31) | (((i | 0) < 0 ? -1 : 0) << 1)),
          (k = Ut(s ^ t, _ ^ r, s, _) | 0),
          (r = ye),
          (t = g ^ s),
          (s = C ^ _),
          Ut(
            (tn(k, r, Ut(g ^ o, C ^ i, g, C) | 0, ye, 0) | 0) ^ t,
            ye ^ s,
            t,
            s,
          ) | 0
        );
      }
      function Yt(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0,
          g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          Q = 0;
        return (
          (s = j),
          (j = (j + 16) | 0),
          (g = s | 0),
          (C = (r >> 31) | (((r | 0) < 0 ? -1 : 0) << 1)),
          (k = (((r | 0) < 0 ? -1 : 0) >> 31) | (((r | 0) < 0 ? -1 : 0) << 1)),
          (x = (i >> 31) | (((i | 0) < 0 ? -1 : 0) << 1)),
          ($ = (((i | 0) < 0 ? -1 : 0) >> 31) | (((i | 0) < 0 ? -1 : 0) << 1)),
          (Q = Ut(C ^ t, k ^ r, C, k) | 0),
          (r = ye),
          tn(Q, r, Ut(x ^ o, $ ^ i, x, $) | 0, ye, g) | 0,
          ($ = Ut(_[g >> 2] ^ C, _[(g + 4) >> 2] ^ k, C, k) | 0),
          (k = ye),
          (j = s),
          (ye = k),
          $ | 0
        );
      }
      function Jt(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0,
          _ = 0;
        return (
          (s = t),
          (t = o),
          (o = Qt(s, t) | 0),
          (_ = ye),
          (ye = ((Ue(r, t) | 0) + (Ue(i, s) | 0) + _) | (_ & 0)),
          o | 0 | 0 | 0
        );
      }
      function Zt(t, r, o, i) {
        return (
          (t = t | 0),
          (r = r | 0),
          (o = o | 0),
          (i = i | 0),
          tn(t, r, o, i, 0) | 0
        );
      }
      function en(t, r, o, i) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0));
        var s = 0,
          g = 0;
        return (
          (s = j),
          (j = (j + 16) | 0),
          (g = s | 0),
          tn(t, r, o, i, g) | 0,
          (j = s),
          (ye = _[(g + 4) >> 2] | 0),
          _[g >> 2] | 0 | 0
        );
      }
      function tn(t, r, o, i, s) {
        ((t = t | 0), (r = r | 0), (o = o | 0), (i = i | 0), (s = s | 0));
        var g = 0,
          C = 0,
          k = 0,
          x = 0,
          $ = 0,
          j = 0,
          Q = 0,
          ee = 0,
          te = 0,
          ne = 0,
          re = 0,
          oe = 0,
          ae = 0,
          ie = 0,
          le = 0,
          se = 0,
          ue = 0,
          ce = 0,
          de = 0,
          me = 0,
          pe = 0,
          _e = 0,
          fe = 0,
          ge = 0,
          he = 0,
          Ce = 0,
          be = 0;
        if (((g = t), (C = r), (k = C), (x = o), ($ = i), (j = $), !k))
          return (
            (Q = (s | 0) != 0),
            j
              ? Q
                ? ((_[s >> 2] = t | 0),
                  (_[(s + 4) >> 2] = r & 0),
                  (ee = 0),
                  (te = 0),
                  (ye = ee),
                  te | 0)
                : ((ee = 0), (te = 0), (ye = ee), te | 0)
              : (Q &&
                  ((_[s >> 2] = (g >>> 0) % (x >>> 0)), (_[(s + 4) >> 2] = 0)),
                (ee = 0),
                (te = ((g >>> 0) / (x >>> 0)) >>> 0),
                (ye = ee),
                te | 0)
          );
        Q = (j | 0) == 0;
        do
          if (x) {
            if (!Q) {
              if (
                ((ne = ((He(j | 0) | 0) - (He(k | 0) | 0)) | 0), ne >>> 0 <= 31)
              ) {
                ((re = (ne + 1) | 0),
                  (oe = (31 - ne) | 0),
                  (ae = (ne - 31) >> 31),
                  (ie = re),
                  (le = ((g >>> (re >>> 0)) & ae) | (k << oe)),
                  (se = (k >>> (re >>> 0)) & ae),
                  (ue = 0),
                  (ce = g << oe));
                break;
              }
              return s
                ? ((_[s >> 2] = t | 0),
                  (_[(s + 4) >> 2] = C | (r & 0)),
                  (ee = 0),
                  (te = 0),
                  (ye = ee),
                  te | 0)
                : ((ee = 0), (te = 0), (ye = ee), te | 0);
            }
            if (((oe = (x - 1) | 0), oe & x)) {
              ((ae = ((He(x | 0) | 0) + 33 - (He(k | 0) | 0)) | 0),
                (re = (64 - ae) | 0),
                (ne = (32 - ae) | 0),
                (de = ne >> 31),
                (me = (ae - 32) | 0),
                (pe = me >> 31),
                (ie = ae),
                (le =
                  (((ne - 1) >> 31) & (k >>> (me >>> 0))) |
                  (((k << ne) | (g >>> (ae >>> 0))) & pe)),
                (se = pe & (k >>> (ae >>> 0))),
                (ue = (g << re) & de),
                (ce =
                  (((k << re) | (g >>> (me >>> 0))) & de) |
                  ((g << ne) & ((ae - 33) >> 31))));
              break;
            }
            return (
              s && ((_[s >> 2] = oe & g), (_[(s + 4) >> 2] = 0)),
              (x | 0) == 1
                ? ((ee = C | (r & 0)), (te = t | 0 | 0), (ye = ee), te | 0)
                : ((oe = Kt(x | 0) | 0),
                  (ee = (k >>> (oe >>> 0)) | 0),
                  (te = (k << (32 - oe)) | (g >>> (oe >>> 0)) | 0),
                  (ye = ee),
                  te | 0)
            );
          } else {
            if (Q)
              return (
                s &&
                  ((_[s >> 2] = (k >>> 0) % (x >>> 0)), (_[(s + 4) >> 2] = 0)),
                (ee = 0),
                (te = ((k >>> 0) / (x >>> 0)) >>> 0),
                (ye = ee),
                te | 0
              );
            if (!g)
              return (
                s &&
                  ((_[s >> 2] = 0), (_[(s + 4) >> 2] = (k >>> 0) % (j >>> 0))),
                (ee = 0),
                (te = ((k >>> 0) / (j >>> 0)) >>> 0),
                (ye = ee),
                te | 0
              );
            if (((oe = (j - 1) | 0), !(oe & j)))
              return (
                s &&
                  ((_[s >> 2] = t | 0), (_[(s + 4) >> 2] = (oe & k) | (r & 0))),
                (ee = 0),
                (te = k >>> ((Kt(j | 0) | 0) >>> 0)),
                (ye = ee),
                te | 0
              );
            if (
              ((oe = ((He(j | 0) | 0) - (He(k | 0) | 0)) | 0), oe >>> 0 <= 30)
            ) {
              ((ae = (oe + 1) | 0),
                (ne = (31 - oe) | 0),
                (ie = ae),
                (le = (k << ne) | (g >>> (ae >>> 0))),
                (se = k >>> (ae >>> 0)),
                (ue = 0),
                (ce = g << ne));
              break;
            }
            return s
              ? ((_[s >> 2] = t | 0),
                (_[(s + 4) >> 2] = C | (r & 0)),
                (ee = 0),
                (te = 0),
                (ye = ee),
                te | 0)
              : ((ee = 0), (te = 0), (ye = ee), te | 0);
          }
        while (!1);
        if (!ie)
          ((_e = ce), (fe = ue), (ge = se), (he = le), (Ce = 0), (be = 0));
        else {
          ((r = o | 0 | 0),
            (o = $ | (i & 0)),
            (i = Vt(r | 0, o | 0, -1, -1) | 0),
            ($ = ye),
            (C = ce),
            (ce = ue),
            (ue = se),
            (se = le),
            (le = ie),
            (ie = 0));
          do
            ((t = C),
              (C = (ce >>> 31) | (C << 1)),
              (ce = ie | (ce << 1)),
              (g = (se << 1) | (t >>> 31) | 0),
              (t = (se >>> 31) | (ue << 1) | 0),
              Ut(i, $, g, t) | 0,
              (k = ye),
              (j = (k >> 31) | (((k | 0) < 0 ? -1 : 0) << 1)),
              (ie = j & 1),
              (se =
                Ut(
                  g,
                  t,
                  j & r,
                  ((((k | 0) < 0 ? -1 : 0) >> 31) |
                    (((k | 0) < 0 ? -1 : 0) << 1)) &
                    o,
                ) | 0),
              (ue = ye),
              (le = (le - 1) | 0));
          while ((le | 0) != 0);
          ((_e = C), (fe = ce), (ge = ue), (he = se), (Ce = 0), (be = ie));
        }
        return (
          (ie = fe),
          (fe = 0),
          s && ((_[s >> 2] = he), (_[(s + 4) >> 2] = ge)),
          (ee =
            ((ie | 0) >>> 31) |
            ((_e | fe) << 1) |
            (((fe << 1) | (ie >>> 31)) & 0) |
            Ce),
          (te = (((ie << 1) | 0) & -2) | be),
          (ye = ee),
          te | 0
        );
      }
      function nn(t, r) {
        return ((t = t | 0), (r = r | 0), un[t & 1](r | 0) | 0);
      }
      function rn(t, r, o, i) {
        return (
          (t = t | 0),
          (r = r | 0),
          (o = o | 0),
          (i = i | 0),
          cn[t & 3](r | 0, o | 0, i | 0) | 0
        );
      }
      function on(t, r) {
        ((t = t | 0), (r = r | 0), dn[t & 1](r | 0));
      }
      function an(t) {
        return ((t = t | 0), Ge(0), 0);
      }
      function ln(t, r, o) {
        return ((t = t | 0), (r = r | 0), (o = o | 0), Ge(1), 0);
      }
      function sn(t) {
        ((t = t | 0), Ge(2));
      }
      var un = [an, $t],
        cn = [ln, Mt, Pt, Nt],
        dn = [sn, At];
      return {
        _curve25519_donna: Rt,
        _free: Bt,
        _i64Add: Vt,
        _bitshift64Ashr: qt,
        _i64Subtract: Ut,
        _memset: Ht,
        _malloc: Ot,
        _memcpy: jt,
        _bitshift64Lshr: Gt,
        _fflush: wt,
        ___errno_location: It,
        _bitshift64Shl: zt,
        runPostSets: Wt,
        stackAlloc: _t,
        stackSave: ft,
        stackRestore: gt,
        establishStackSpace: ht,
        setThrew: yt,
        setTempRet0: vt,
        getTempRet0: St,
        dynCall_ii: nn,
        dynCall_iiii: rn,
        dynCall_vi: on,
      };
    })(e.Na, e.Oa, buffer);
    e._curve25519_donna = Z._curve25519_donna;
    var Da = (e._free = Z._free);
    e.runPostSets = Z.runPostSets;
    var cb = (e._i64Add = Z._i64Add),
      ab = (e._bitshift64Ashr = Z._bitshift64Ashr),
      bb = (e._i64Subtract = Z._i64Subtract),
      db = (e._memset = Z._memset),
      ua = (e._malloc = Z._malloc),
      gc = (e._memcpy = Z._memcpy),
      fb = (e._bitshift64Lshr = Z._bitshift64Lshr);
    ((e._fflush = Z._fflush), (e.___errno_location = Z.___errno_location));
    var gb = (e._bitshift64Shl = Z._bitshift64Shl);
    ((e.dynCall_ii = Z.dynCall_ii),
      (e.dynCall_iiii = Z.dynCall_iiii),
      (e.dynCall_vi = Z.dynCall_vi),
      (n.W = Z.stackAlloc),
      (n.na = Z.stackSave),
      (n.X = Z.stackRestore),
      (n.md = Z.establishStackSpace),
      (n.cb = Z.setTempRet0),
      (n.Ua = Z.getTempRet0));
    function xc(t) {
      ((this.name = "ExitStatus"),
        (this.message = "Program terminated with exit(" + t + ")"),
        (this.status = t));
    }
    ((xc.prototype = Error()), (xc.prototype.constructor = xc));
    var Yc = null,
      Xa = function t() {
        (e.calledRun || $c(), e.calledRun || (Xa = t));
      };
    e.callMain = e.jd = function (t) {
      function r() {
        for (var t = 0; 3 > t; t++) i.push(0);
      }
      (assert(
        L == 0,
        "cannot call main when async dependencies remain! (listen on __ATMAIN__)",
      ),
        assert(
          Pa.length == 0,
          "cannot call main when preRun functions remain to be called",
        ),
        (t = t || []),
        xa || ((xa = !0), Oa(Qa)));
      var o = t.length + 1,
        i = [G(Va(e.thisProgram), "i8", 0)];
      r();
      for (var s = 0; s < o - 1; s += 1) (i.push(G(Va(t[s]), "i8", 0)), r());
      (i.push(0), (i = G(i, "i32", 0)));
      try {
        var _ = e._main(o, i, 0);
        ad(_, !0);
      } catch (t) {
        if (!(t instanceof xc))
          if (t == "SimulateInfiniteLoop") e.noExitRuntime = !0;
          else
            throw (
              t &&
                typeof t == "object" &&
                t.stack &&
                e.S("exception thrown: " + [t, t.stack]),
              t
            );
      } finally {
      }
    };
    function $c(t) {
      function r() {
        if (!e.calledRun && ((e.calledRun = !0), !A)) {
          if (
            (xa || ((xa = !0), Oa(Qa)),
            Oa(Ra),
            e.onRuntimeInitialized && e.onRuntimeInitialized(),
            e._main && bd && e.callMain(t),
            e.postRun)
          )
            for (
              typeof e.postRun == "function" && (e.postRun = [e.postRun]);
              e.postRun.length;
            )
              Ua(e.postRun.shift());
          Oa(Sa);
        }
      }
      if (
        ((t = t || e.arguments), Yc === null && (Yc = Date.now()), !(0 < L))
      ) {
        if (e.preRun)
          for (
            typeof e.preRun == "function" && (e.preRun = [e.preRun]);
            e.preRun.length;
          )
            Ta(e.preRun.shift());
        (Oa(Pa),
          0 < L ||
            e.calledRun ||
            (e.setStatus
              ? (e.setStatus("Running..."),
                setTimeout(function () {
                  (setTimeout(function () {
                    e.setStatus("");
                  }, 1),
                    r());
                }, 1))
              : r()));
      }
    }
    e.run = e.run = $c;
    function ad(t, r) {
      if (!r || !e.noExitRuntime)
        throw (
          !e.noExitRuntime &&
            ((A = !0), (m = void 0), Oa(K), e.onExit) &&
            e.onExit(t),
          new xc(t)
        );
    }
    e.exit = e.exit = ad;
    var cd = [];
    function z(t) {
      (t !== void 0 ? (e.print(t), e.S(t), (t = JSON.stringify(t))) : (t = ""),
        (A = !0));
      var r =
        "abort(" +
        t +
        ") at " +
        Ea() +
        "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
      throw (
        cd &&
          cd.forEach(function (o) {
            r = o(r, t);
          }),
        r
      );
    }
    if (((e.abort = e.abort = z), e.preInit))
      for (
        typeof e.preInit == "function" && (e.preInit = [e.preInit]);
        0 < e.preInit.length;
      )
        e.preInit.pop()();
    var bd = !0;
    (e.noInitialRun && (bd = !1), $c(), (module.exports = e));
  },
  null,
);

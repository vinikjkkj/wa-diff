__d(
  "WAWebDebugRoutingToken",
  [
    "WABase64",
    "WAWebProtobufsRoutingInfo.pb",
    "WAWebUserPrefsMultiDeviceDebug",
    "encodeProtobuf",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = p(e);
      o("WAWebUserPrefsMultiDeviceDebug").setDebugRoutingTokenPref(t);
    }
    var s = Object.freeze({ chatd: 0, cbiz: 1, cdev: 2, cexp: 3 }),
      u = Object.freeze({
        ash: 1,
        frc: 2,
        lla: 3,
        prn: 4,
        atn: 5,
        sgp: 6,
        ftw: 7,
        vll: 8,
        cln: 9,
        pnb: 10,
        odn: 11,
        nao: 12,
        rva: 13,
        eag: 14,
        ldc: 15,
        nha: 16,
        ncg: 17,
        cco: 18,
        hil: 19,
      });
    function c(e) {
      var t = Object.keys(s).find(function (t) {
        return t === e;
      });
      if (t != null) return s[t];
      throw r("err")("Not a valid cluster " + e);
    }
    function d(e) {
      var t = Object.keys(u).find(function (t) {
        return t === e;
      });
      if (t != null) return u[t];
      throw r("err")("Not a valid region " + e);
    }
    function m(e) {
      var t = e.match(/^\s*(([a-z]+)([0-9]+)?\.)?(\w+)\s*$/);
      if (!t) throw r("err")("Invalid token: " + e);
      var n = void 0,
        o = void 0,
        a = t[2],
        i = t[3],
        l = t[4];
      a != null ? ((o = c(a)), (n = d(l))) : l in s ? (o = c(l)) : (n = d(l));
      var u = Number.parseInt(i, 10);
      return (Number.isNaN(u) && (u = void 0), [n, o, u]);
    }
    function p(e) {
      var t = e.toLowerCase();
      if (!t || t.match(/^\s*default\s*$/)) return "";
      var n = r("lodash").unzip(e.split(",").map(m)),
        a = n[0],
        i = babelHelpers.arrayLikeToArray(n).slice(1),
        l = i[0],
        s = i[1],
        u = {};
      if (((l = Array.from(new Set(l))), l.length !== 1))
        throw r("err")("Too many clusters: " + l.toString());
      if (
        (l[0] != null && (u.clusterId = [l[0]]),
        (s = Array.from(new Set(s))),
        s.length !== 1)
      )
        throw r("err")("Too many tasks: " + s.toString());
      s[0] != null && (u.taskId = s[0]);
      var c = Array.from(new Set(a)),
        d = !1,
        p = c.reduce(function (e, t) {
          return (t === void 0 ? (d = !0) : e.push(t), e);
        }, []);
      if (a.length !== c.length)
        throw r("err")("Redundant regions: " + a.toString());
      if (c.length > 1 && d)
        throw r("err")(
          "May not mix clusters with and without region: " + a.toString(),
        );
      d || (u.regionId = p);
      var _ = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsRoutingInfo.pb").RoutingInfoSpec,
        u,
      );
      return o("WABase64").encodeB64UrlSafe(_.readByteArrayView());
    }
    var _ = { setDebugRoutingToken: e };
    l.default = _;
  },
  98,
);

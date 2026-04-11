__d(
  "useWAWebGdprStatus",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WANullthrows",
    "WAWap",
    "WAWebCommsExperimental",
    "WAWebGdprConstants",
    "WAWebGdprHookUtils",
    "WAWebProtobufsE2E.pb",
    "decodeProtobuf",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState,
      p = new (r("WADeprecatedWapParser"))("parseStatus", function (e) {
        if (!e.hasChild("gdpr")) return null;
        var t = e.child("gdpr");
        if (t.hasChild("document")) {
          var n = t.child("document");
          return {
            creation: n.attrTime("creation"),
            documentMessage: r("WANullthrows")(
              o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                n.contentBytes(),
              ).documentMessage,
            ),
            expiration: n.attrTime("expiration"),
            type: "GdprAvailableStatusResponse",
          };
        }
        return {
          timestamp: t.attrTime("timestamp"),
          type: "GdprPendingStatusResponse",
        };
      }),
      _ = new Map([
        [o("WAWebGdprConstants").ReportType.Account, o("WAWap").generateId()],
        [
          o("WAWebGdprConstants").ReportType.Newsletters,
          o("WAWap").generateId(),
        ],
      ]);
    function f(e) {
      return e.some(function (e) {
        return (
          (e == null ? void 0 : e.type) === "GdprPendingStatusResponse" ||
          (e == null ? void 0 : e.type) === "GdprAvailableStatusResponse"
        );
      });
    }
    function g(t, a, i) {
      r("useWAWebOnUnmount")(function () {
        _.set(a, o("WAWap").generateId());
      });
      var l = m(_.get(a)),
        s = l[0],
        u = l[1],
        c = d(
          function () {
            return t(r("WANullthrows")(s));
          },
          [t, s],
        ),
        f = r("useWAWebAsync")(
          function (t) {
            return i && !t.aborted
              ? o("WAWebCommsExperimental").sendSuspensefulIq(c, p)
              : (e || (e = n("Promise"))).resolve();
          },
          [c, i],
        );
      return [
        f.loading,
        f.value,
        function () {
          return u(o("WAWap").generateId());
        },
      ];
    }
    function h(e, t) {
      var n = o("react-compiler-runtime").c(6),
        r;
      n[0] !== e
        ? ((r = function (n) {
            return o("WAWebGdprHookUtils").getGdprIq(n, e, "status");
          }),
          (n[0] = e),
          (n[1] = r))
        : (r = n[1]);
      var a = r,
        i = g(a, e, t),
        l = i[0],
        s = i[1],
        u = i[2],
        c = s == null ? void 0 : s.result,
        d;
      return (
        n[2] !== l || n[3] !== u || n[4] !== c
          ? ((d = [l, c, u]), (n[2] = l), (n[3] = u), (n[4] = c), (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    ((l.GdprStatusWapParser = p),
      (l.doOtherPendingRequestsExist = f),
      (l.useGdprStatus = h));
  },
  98,
);

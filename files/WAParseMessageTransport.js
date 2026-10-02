__d(
  "WAParseMessageTransport",
  ["WALogger", "decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return { version: "v3", type: "error", error: e };
    }
    function u(e, t) {
      return (
        e != null &&
        (t.dsm == null ||
          t.dsm.destinationJid == null ||
          t.dsm.destinationJid !== e)
      );
    }
    function c(t, n) {
      var r = t.payload,
        a = t.protocol;
      if (r == null && a == null)
        return s("There is no payload and protocol in the message transport");
      if (a == null)
        return s("There is no protocol part in the message transport");
      var i = a.integral;
      if (i == null)
        return s("There is no integral part in the message transport");
      if (i.padding == null)
        return s("There is no padding in the message transport");
      if (u(n, i))
        return s(
          "The recipient does not match the device sent message recipient",
        );
      if (o("decodeProtobuf").getUnknownFields(i) != null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "There are unknown fields in the integral",
              ])),
          ),
          babelHelpers.extends(
            {},
            s("There are unknown fields in the integral"),
            { futureProof: r == null ? void 0 : r.futureProof },
          )
        );
      if (r != null) {
        var l = r.applicationPayload;
        return l == null
          ? s("There is no applicationPayload payload in the message transport")
          : {
              type: "applicationPayload",
              applicationPayload: l,
              skdm: m(a.ancillary),
            };
      }
      var c = m(a.ancillary);
      return c != null
        ? { type: "skdm", skdm: c }
        : d(t) === !0
          ? { type: "empty", version: "v3" }
          : { type: "unknown" };
    }
    function d(e) {
      var t, n;
      if (e.payload != null) return !1;
      if (e.protocol == null) return !0;
      var r = e.protocol,
        o = new Set(["$$unknownFieldCount", "padding", "backupDirective"]),
        a = Object.keys((t = r.integral) != null ? t : {}).filter(function (e) {
          return !o.has(e);
        }),
        i = Object.keys((n = r.ancillary) != null ? n : {}).filter(
          function (e) {
            return !o.has(e);
          },
        );
      return i.length === 0 && a.length === 0;
    }
    function m(e) {
      return e == null ? null : e.skdm;
    }
    l.parseMessageTransport = c;
  },
  98,
);

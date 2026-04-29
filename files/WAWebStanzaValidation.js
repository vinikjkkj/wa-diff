__d(
  "WAWebStanzaValidation",
  [
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    function g(t) {
      try {
        (h(t), C(t), R(t), E(t), k(t), I(t));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[stanza-validation]",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("stanza-validation-error");
      }
    }
    function h(e) {
      if (!(e.tag !== "receipt" || e.attrs.type !== "sender")) {
        e.attrs.recipient == null &&
          e.attrs.participant == null &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] sender rcpt: no recipient/participant",
                ])),
            )
            .sendLogs(
              "stanza-validation-sender-receipt-without-participant-nor-recipient",
            );
        var t = e.attrs.recipient,
          n = e.attrs.to;
        if (t != null && n != null) {
          var r = o("WAWap").decodeAsString(t),
            a = o("WAWap").decodeAsString(n),
            i = b(r),
            l = b(a);
          a.includes("@lid") && r.includes("@s.whatsapp.net")
            ? o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] sender rcpt: pn recipient=",
                      " to=",
                      "",
                    ])),
                  i,
                  l,
                )
                .sendLogs("stanza-validation-sender-receipt-pn-recipient")
            : a.includes("@s.whatsapp.net") &&
              r.includes("@lid") &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] sender rcpt: pn to=",
                      " recipient=",
                      "",
                    ])),
                  l,
                  i,
                )
                .sendLogs("stanza-validation-sender-receipt-pn-to");
        }
      }
    }
    function y(e) {
      if (!Array.isArray(e.content)) return [];
      var t = e.content.find(function (e) {
          return (e == null ? void 0 : e.tag) === "participants";
        }),
        n = t == null ? void 0 : t.content;
      if (!Array.isArray(n)) return [];
      var r = [];
      return (
        n.forEach(function (e) {
          var t;
          (e == null ? void 0 : e.tag) === "to" &&
            ((t = e.attrs) == null ? void 0 : t.jid) != null &&
            r.push(o("WAWap").decodeAsString(e.attrs.jid));
        }),
        r
      );
    }
    function C(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (
          !(t == null || !o("WAWap").decodeAsString(t).endsWith("@broadcast"))
        ) {
          var n = y(e);
          if (n.length !== 0) {
            var r = [],
              a = !1,
              i = 0;
            if (
              (n.forEach(function (e) {
                if (!e.includes("@lid")) {
                  r.push(e);
                  try {
                    var t = o("WAWebWidFactory").asUserWidOrThrow(
                      o("WAWebWidFactory").createWid(e),
                    );
                    (o("WAWebUserPrefsMeUser").isMeAccount(t) && (a = !0),
                      o("WAWebLidMigrationUtils").toLid(t) != null && i++);
                  } catch (e) {}
                }
              }),
              r.length > 0)
            ) {
              var l = r.map(b).join(",");
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] broadcast pn-fanout: ",
                      "/",
                      " <to> nodes using PN in broadcast ",
                      ", includesSelfPn=",
                      ", pnWithLid=",
                      ", pnWithoutLid=",
                      ": ",
                      "",
                    ])),
                  r.length,
                  n.length,
                  o("WAWap").decodeAsString(t),
                  a,
                  i,
                  r.length - i,
                  l,
                )
                .sendLogs("stanza-validation-broadcast-pn-fanout-to-node");
            }
          }
        }
      }
    }
    function b(e) {
      try {
        return o("WAWebWidFactory").createWid(e).toLogString();
      } catch (t) {
        return e;
      }
    }
    function v(e) {
      return e.tag !== "message" || !Array.isArray(e.content)
        ? !1
        : e.content.some(function (e) {
            var t;
            return (
              (e == null ? void 0 : e.tag) === "enc" &&
              ((t = e.attrs) == null ? void 0 : t.count) != null
            );
          });
    }
    function S(e) {
      var t = o("WAWebWidValidator").validateAndGetParts(e);
      if (t == null || t.userPart == null) return !1;
      var n = o("WAWebWidFactory").createWid(e);
      return o("WAWebLidMigrationUtils").shouldHaveAccountLid(n) && !n.isLid();
    }
    function R(e) {
      if (!(e.tag === "receipt" || e.tag === "ack")) {
        var t = e.attrs.to;
        if (t != null) {
          var n = o("WAWap").decodeAsString(t);
          if (
            S(n) &&
            !(
              e.attrs.category === "peer" &&
              o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(n),
              )
            ) &&
            !v(e) &&
            o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
          ) {
            var r = b(n);
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] pnless-stanza: <",
                    "> to=",
                    " is PN despite web_pnless_stanzas being enabled",
                  ])),
                e.tag,
                r,
              )
              .sendLogs("stanza-validation-pnless-to-pn-leak");
          }
        }
      }
    }
    function L(e) {
      if (e.tag !== "message") return null;
      var t = e.attrs.to;
      if (t == null) return null;
      var n = o("WAWap").decodeAsString(t),
        r = o("WAWebWidValidator").validateAndGetParts(n);
      if (r == null || r.userPart == null) return null;
      var a = o("WAWebWidFactory").createWid(n);
      return a.isUser() ? n : null;
    }
    function E(e) {
      if (L(e) != null) {
        var t = y(e),
          n = t.filter(S);
        if (
          n.length !== 0 &&
          o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
        ) {
          var r = n.map(b).join(",");
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] pnless-stanza: <",
                  "> participant(s) using PN despite web_pnless_stanzas being enabled: ",
                  "",
                ])),
              e.tag,
              r,
            )
            .sendLogs("stanza-validation-pnless-participant-pn-leak");
        }
      }
    }
    function k(e) {
      if (e.tag === "message") {
        var t = y(e);
        if (t.length !== 0) {
          var n = 0,
            r = 0,
            a = [];
          if (
            (t.forEach(function (e) {
              e.includes("@lid")
                ? n++
                : e.includes("@s.whatsapp.net") && (r++, a.push(e));
            }),
            n > 0 && r > 0)
          ) {
            var i = a.map(b).join(",");
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] mixed-participants: <message> has both LID (",
                    ") and PN (",
                    ") participants: ",
                    "",
                  ])),
                n,
                r,
                i,
              )
              .sendLogs("stanza-validation-mixed-addressing-participants");
          }
        }
      }
    }
    function I(e) {
      var t = L(e);
      if (t != null) {
        var n;
        if (t.endsWith("@lid")) n = "@s.whatsapp.net";
        else if (t.endsWith("@s.whatsapp.net")) n = "@lid";
        else return;
        var r = y(e).filter(function (e) {
          return e.endsWith(n);
        });
        if (r.length !== 0) {
          var a = b(t),
            i = r.map(b).join(",");
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] 1to1-mixed-domain: <message> to=",
                  " but participant(s) on different domain: ",
                  "",
                ])),
              a,
              i,
            )
            .sendLogs("stanza-validation-mixed-domain-1to1-participants");
        }
      }
    }
    l.validateSentStanza = g;
  },
  98,
);

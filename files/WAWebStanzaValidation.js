__d(
  "WAWebStanzaValidation",
  [
    "WALogger",
    "WAWap",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(t) {
      try {
        (b(t), S(t), k(t), T(t), D(t), x(t), P(t), N(t));
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
    function b(e) {
      if (e.tag === "receipt") {
        var t = e.attrs.type,
          n = t != null ? o("WAWap").decodeAsString(t) : "unknown";
        n === "sender" &&
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
        var r = e.attrs.recipient,
          a = e.attrs.to;
        if (r != null && a != null) {
          var i = o("WAWap").decodeAsString(r),
            l = o("WAWap").decodeAsString(a),
            d = R(i),
            m = R(l);
          l.includes("@lid") && i.includes("@s.whatsapp.net")
            ? o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] ",
                      " rcpt: pn recipient=",
                      " to=",
                      "",
                    ])),
                  n,
                  d,
                  m,
                )
                .sendLogs("stanza-validation-" + n + "-receipt-pn-recipient")
            : l.includes("@s.whatsapp.net") &&
              i.includes("@lid") &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] ",
                      " rcpt: pn to=",
                      " recipient=",
                      "",
                    ])),
                  n,
                  m,
                  d,
                )
                .sendLogs("stanza-validation-" + n + "-receipt-pn-to");
        }
      }
    }
    function v(e) {
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
    function S(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (
          !(t == null || !o("WAWap").decodeAsString(t).endsWith("@broadcast"))
        ) {
          var n = v(e);
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
              var l = r.map(R).join(",");
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
    function R(e) {
      try {
        return o("WAWebWidFactory").createWid(e).toLogString();
      } catch (t) {
        return e;
      }
    }
    function L(e) {
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
    function E(e) {
      var t = o("WAWebWidValidator").validateAndGetParts(e);
      if (t == null || t.userPart == null) return !1;
      var n = o("WAWebWidFactory").createWid(e);
      return (
        o("WAWebLidMigrationUtils").shouldHaveAccountLid(n) &&
        !n.isLid() &&
        !n.isHostedLid()
      );
    }
    function k(e) {
      if (!(e.tag === "receipt" || e.tag === "ack")) {
        var t = e.attrs.to;
        if (t != null) {
          var n = o("WAWap").decodeAsString(t);
          if (E(n)) {
            if (e.attrs.category === "peer") {
              if (
                o(
                  "WAWebBeyondPhoneNumberGatingUtils",
                ).peerMessageLidMigrationOutgoingEnabled()
              ) {
                var r = R(n);
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[stanza-validation] pnless-stanza: peer <",
                        "> to=",
                        " is PN",
                      ])),
                    e.tag,
                    r,
                  )
                  .sendLogs(
                    "stanza-validation-pnless-to-pn-leak-peer-" + e.tag,
                  );
              }
              return;
            }
            if (!L(e)) {
              var a = R(n);
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] pnless-stanza: <",
                      "> to=",
                      " is PN",
                    ])),
                  e.tag,
                  a,
                )
                .sendLogs("stanza-validation-pnless-to-pn-leak-" + e.tag);
            }
          }
        }
      }
    }
    function I(e) {
      if (e.tag !== "message") return null;
      var t = e.attrs.to;
      if (t == null) return null;
      var n = o("WAWap").decodeAsString(t),
        r = o("WAWebWidValidator").validateAndGetParts(n);
      if (r == null || r.userPart == null) return null;
      var a = o("WAWebWidFactory").createWid(n);
      return a.isUser() ? n : null;
    }
    function T(e) {
      if (I(e) != null) {
        var t = v(e),
          n = t.filter(E);
        if (n.length !== 0) {
          var r = n.map(R).join(",");
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] pnless-stanza: <",
                  "> participant(s) using PN: ",
                  "",
                ])),
              e.tag,
              r,
            )
            .sendLogs("stanza-validation-pnless-participant-pn-leak");
        }
      }
    }
    function D(e) {
      if (e.tag === "message") {
        var t = v(e);
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
            var i = a.map(R).join(",");
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
    function x(e) {
      var t = I(e);
      if (t != null) {
        var n;
        if (t.endsWith("@lid")) n = "@s.whatsapp.net";
        else if (t.endsWith("@s.whatsapp.net")) n = "@lid";
        else return;
        var r = v(e).filter(function (e) {
          return e.endsWith(n);
        });
        if (r.length !== 0) {
          var a = R(t),
            i = r.map(R).join(",");
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function $(e, t) {
      var n = e == null ? void 0 : e.content;
      return Array.isArray(n)
        ? n.find(function (e) {
            return e.tag === t;
          })
        : null;
    }
    function P(e) {
      if (e.tag === "iq") {
        var t = e.attrs.xmlns,
          n = e.attrs.type;
        if (
          !(
            t == null ||
            o("WAWap").decodeAsString(t) !== "privacy" ||
            n == null ||
            o("WAWap").decodeAsString(n) !== "get"
          )
        ) {
          var r = $(e, "privacy");
          if (r != null) {
            var a = r.attrs.addressing_mode;
            if (!(a != null && o("WAWap").decodeAsString(a) === "lid")) {
              var i = $(r, "list"),
                l = i == null ? void 0 : i.attrs.value;
              if (
                !(
                  l == null ||
                  o("WAWap").decodeAsString(l) !== "contact_blacklist"
                )
              ) {
                var s = i == null ? void 0 : i.attrs.name,
                  u = s != null ? o("WAWap").decodeAsString(s) : "unknown";
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        '[stanza-validation] privacy-list-pn-query: <iq> privacy list "',
                        '" fetched using legacy PN addressing',
                      ])),
                    u,
                  )
                  .sendLogs("stanza-validation-privacy-list-pn-query", {
                    sampling: 0.01,
                  });
              }
            }
          }
        }
      }
    }
    function N(e) {
      if (e.tag === "iq") {
        var t = e.attrs.xmlns,
          n = e.attrs.type;
        if (
          !(
            t == null ||
            o("WAWap").decodeAsString(t) !== "usync" ||
            n == null ||
            o("WAWap").decodeAsString(n) !== "get"
          )
        ) {
          var r = $(e, "usync"),
            a = $($(r, "query"), "contact");
          if (a != null) {
            var i = a.attrs.addressing_mode;
            if (!(i != null && o("WAWap").decodeAsString(i) === "lid")) {
              var l = r == null ? void 0 : r.attrs.context,
                s = l != null ? o("WAWap").decodeAsString(l) : "unknown";
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] usync-contact-pn-query: <iq> usync contact protocol using PN addressing (context=",
                      ")",
                    ])),
                  s,
                )
                .sendLogs("stanza-validation-usync-contact-pn-query", {
                  sampling: 0.01,
                });
            }
          }
        }
      }
    }
    l.validateSentStanza = C;
  },
  98,
);

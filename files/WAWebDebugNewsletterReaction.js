__d(
  "WAWebDebugNewsletterReaction",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDebugUtils",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMyAddOnsJob",
    "WAWebNewsletterSendReactionAction",
    "WAWebUserPrefsMeUser",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n &&
            t.forEach(function (e) {
              ((e.parentMsgKey = n.id.toString()),
                (e.serverTimestamp = Date.now()));
            });
          try {
            (yield o(
              "WAWebdbCRUDOperationsNewsletterReaction",
            ).createOrUpdateNewsletterReactions(t),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrUpdateNewsletterReactionsDebug: SUCCESS",
                  ])),
              ));
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrUpdateNewsletterReactionsDebug: ",
                  "",
                ])),
              e,
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    c.doc = "Create or update newsletter reactions";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = window.msg;
          try {
            yield o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(
              t,
              e,
            );
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sendReaction] Failed to send reaction: ",
                  "",
                ])),
              e,
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    m.doc = "Send newsletter reaction";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDebugUtils").getSelectedChat(),
            n = {
              msgKey: yield r("WAWebMsgKey").newId(),
              parentMsgKey: o("WAWebNewsletterDBUtils")
                .craftNewsletterMsgKeyFromServerId(e, t.id)
                .toString(),
              senderUserJid: o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toString(),
              reactionText: "\u2764\uFE0F",
              timestamp: o("WATimeUtils").unixTime() * 1e3,
              orphan: 1,
              read: !0,
              ack: o("WAAckLevel").ACK.SENT,
            };
          yield o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([
            n,
          ]);
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebNewsletterGetMyAddOnsJob").getMyNewsletterAddOnsJob({
            count: 5e3,
          });
        })),
        h.apply(this, arguments)
      );
    }
    var y = {
      createOrUpdateNewsletterReactionsDebug: c,
      sendReaction: m,
      createNewsletterOrphanReaction: _,
      getMyNewsletterAddOns: g,
    };
    l.default = y;
  },
  98,
);

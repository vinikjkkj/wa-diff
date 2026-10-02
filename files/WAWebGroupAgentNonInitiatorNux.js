__d(
  "WAWebGroupAgentNonInitiatorNux",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebErrorBoundary.react",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebResolveGroupAgentParticipants",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = !1,
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupAgentNonInitiatorNuxModal.react",
        )
          .__setRef("WAWebGroupAgentNonInitiatorNux")
          .load();
      }, "GroupAgentNonInitiatorNuxModal");
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId();
          if (!(c || n == null)) {
            c = !0;
            try {
              var a = yield _(t, Number(n));
              a || h();
            } catch (t) {
              (h(),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[GroupAgentNonInitiatorNux] failed to show the NUX",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("group-agent-non-initiator-nux-failed"));
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(yield y(e)) ||
            (yield o("WAWebBotTos").refreshMuseGroupTosNotices(),
            o("WAWebBotTos").hasAcceptedMuseGroupTos())
          )
            return !1;
          var n = yield d();
          return (yield o("WAWebModalManager").ModalManager.existsAsync())
            ? !1
            : (o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  fallback: o("WAWebNullFunc").returnNull,
                  name: "group-agent-non-initiator-nux",
                  onError: g,
                  children: u.jsx(n, { noticeId: t, onClosed: h }),
                }),
              ),
              !0);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      (h(), o("WAWebModalManager").closeModalManager());
    }
    function h() {
      c = !1;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupMetadata;
          if (
            !e.id.isGroup() ||
            e.isCAG() ||
            t == null ||
            (t.announce === !0 && !e.iAmAdmin()) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId() == null ||
            o("WAWebBotTos").hasAcceptedMuseGroupTos()
          )
            return !1;
          var n = [];
          return (
            t.participants.forEach(function (e) {
              b(e.id) && n.push(e.id);
            }),
            o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(n)
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return (
        e.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    ((l.maybeShowGroupAgentNonInitiatorNux = m),
      (l.isGroupAgentNonInitiatorNuxOwed = y));
  },
  98,
);

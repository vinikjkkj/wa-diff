__d(
  "WAWebGroupAgentNonInitiatorNux",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebErrorBoundary.react",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebResolveGroupAgentParticipants",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = !1,
      m = null,
      p = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupAgentNonInitiatorNuxModal.react",
        )
          .__setRef("WAWebGroupAgentNonInitiatorNux")
          .load();
      }, "GroupAgentNonInitiatorNuxModal");
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield C(e, "modal", r("WAWebNoop"));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield m;
          var t = yield (s || (s = n("Promise"))).all(e.map(E)),
            r = e.find(function (e, n) {
              return t[n];
            });
          r != null && (yield y(r));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = m;
      if (t != null) return t;
      var r = new (s || (s = n("Promise")))(function (t) {
        C(e, "support", t).then(function (e) {
          e || t();
        });
      }).finally(function () {
        m = null;
      });
      return ((m = r), r);
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId();
          if (d || i == null) return !1;
          d = !0;
          var l = function () {
            (L(), a());
          };
          try {
            var s = yield v(t, Number(i), n, l);
            return (s || L(), s);
          } catch (t) {
            return (
              L(),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[GroupAgentNonInitiatorNux] failed to show the NUX",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-agent-non-initiator-nux-failed"),
              !1
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              !(yield E(e)) ||
              (yield o("WAWebBotTos").refreshMuseGroupTosNotices(),
              o("WAWebBotTos").hasAcceptedMuseGroupTos())
            )
              return !1;
            var a = yield p(),
              i = yield o("WAWebModalManager").ModalManager.existsAsync(),
              l = function () {
                (r(), R(n));
              },
              s = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                fallback: o("WAWebNullFunc").returnNull,
                name: "group-agent-non-initiator-nux",
                onError: l,
                children: c.jsx(a, {
                  modalManagerType: n,
                  noticeId: t,
                  onClosed: r,
                }),
              });
            return n === "support"
              ? i
                ? (o("WAWebModalManager").ModalManager.openSupportModal(s, {
                    blockClose: !0,
                  }),
                  !0)
                : !1
              : i
                ? !1
                : (o("WAWebModalManager").ModalManager.open(s), !0);
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      e === "support"
        ? o("WAWebModalManager").ModalManager.closeSupportModal()
        : o("WAWebModalManager").closeModalManager();
    }
    function L() {
      d = !1;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupMetadata;
          if (
            !e.id.isGroup() ||
            e.isCAG() ||
            t == null ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId() == null ||
            o("WAWebBotTos").hasAcceptedMuseGroupTos()
          )
            return !1;
          var n = [];
          return (
            t.participants.forEach(function (e) {
              I(e.id) && n.push(e.id);
            }),
            o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(n)
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return (
        e.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    ((l.maybeShowGroupAgentNonInitiatorNux = _),
      (l.maybeShowGroupAgentNonInitiatorNuxForForward = g),
      (l.isGroupAgentNonInitiatorNuxOwed = E));
  },
  98,
);

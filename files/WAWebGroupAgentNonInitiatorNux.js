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
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebResolveGroupAgentParticipants",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = !1,
      d = null,
      m = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebGroupAgentNonInitiatorNuxModal.react",
        )
          .__setRef("WAWebGroupAgentNonInitiatorNux")
          .load();
      }, "GroupAgentNonInitiatorNuxModal");
    async function p(e) {
      await g(e, "modal", r("WAWebNoop"));
    }
    async function _(e) {
      await d;
      var t = await Promise.all(e.map(b)),
        n = e.find(function (e, n) {
          return t[n];
        });
      n != null && (await f(n));
    }
    function f(e) {
      var t = d;
      if (t != null) return t;
      var n = new Promise(function (t) {
        g(e, "support", t).then(function (e) {
          e || t();
        });
      }).finally(function () {
        d = null;
      });
      return ((d = n), n);
    }
    async function g(t, n, a) {
      var i = o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId();
      if (c || i == null) return !1;
      c = !0;
      var l = function () {
        (C(), a());
      };
      try {
        var s = await h(t, Number(i), n, l);
        return (s || C(), s);
      } catch (t) {
        return (
          C(),
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
    }
    async function h(e, t, n, r) {
      if (
        !(await b(e)) ||
        (await o("WAWebBotTos").refreshMuseGroupTosNotices(),
        o("WAWebBotTos").hasAcceptedMuseGroupTos())
      )
        return !1;
      var a = await m(),
        i = await o("WAWebModalManager").ModalManager.existsAsync(),
        l = function () {
          (r(), y(n));
        },
        s = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          fallback: o("WAWebNullFunc").returnNull,
          name: "group-agent-non-initiator-nux",
          onError: l,
          children: u.jsx(a, { modalManagerType: n, noticeId: t, onClosed: r }),
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
    }
    function y(e) {
      e === "support"
        ? o("WAWebModalManager").ModalManager.closeSupportModal()
        : o("WAWebModalManager").closeModalManager();
    }
    function C() {
      c = !1;
    }
    async function b(e) {
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
          v(e.id) && n.push(e.id);
        }),
        o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(n)
      );
    }
    function v(e) {
      return (
        e.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    ((l.maybeShowGroupAgentNonInitiatorNux = p),
      (l.maybeShowGroupAgentNonInitiatorNuxForForward = _),
      (l.isGroupAgentNonInitiatorNuxOwed = b));
  },
  98,
);

__d(
  "WAWebMetaAiOpenGroupNux",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebCriticalEventWamEvent",
    "WAWebErrorBoundary.react",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebHttpErrors",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsStore",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = "META_AI_OPEN_GROUP_NUX_ENTERED_GROUPS",
      p = "meta_ai_open_group_nux_missing_notice_id",
      _ = null,
      f = !1,
      g = new Set(),
      h = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebMetaAiOpenGroupNuxModal.react",
        )
          .__setRef("WAWebMetaAiOpenGroupNux")
          .load();
      }, "MetaAiOpenGroupNuxModal");
    async function y(e) {
      (await C(e),
        await o(
          "WAWebGroupAgentNonInitiatorNux",
        ).maybeShowGroupAgentNonInitiatorNux(e));
    }
    function C(t, n) {
      if (_ != null) return _;
      if (!v(t)) return Promise.resolve();
      var a = Number(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId());
      if (g.has(a)) return Promise.resolve();
      var i = S(a, n)
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[MetaAiOpenGroupNux] failed to show the NUX",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("meta-ai-open-group-nux-failed");
        })
        .finally(function () {
          _ === i && (_ = null);
        });
      return ((_ = i), i);
    }
    function b(e) {
      var t = e.id.toString();
      return E().includes(t)
        ? Promise.resolve()
        : C(e, function () {
            return k(t);
          });
    }
    function v(e) {
      var t;
      return !e.id.isGroup() ||
        ((t = e.groupMetadata) == null ? void 0 : t.isOpenBotGroup) !== !0 ||
        !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
        ? !1
        : o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() == null
          ? (L(), !1)
          : !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice();
    }
    async function S(e, t) {
      if (
        (await o("WAWebBotTos").refreshMetaAiOpenGroupNotice(),
        !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice() && (await R(e)))
      ) {
        var n = await h();
        (await o("WAWebModalManager").ModalManager.existsAsync()) ||
          (await new Promise(function (r) {
            var a = function (t) {
              (r(), o("WAWebModalManager").closeModalManager());
            };
            (o("WAWebModalManager").ModalManager.open(
              d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                fallback: o("WAWebNullFunc").returnNull,
                name: "meta-ai-open-group-nux",
                onError: a,
                children: d.jsx(n, {
                  noticeId: e,
                  onClosed: r,
                  onLoadFailed: function () {
                    g.add(e);
                  },
                }),
              }),
            ),
              t == null || t());
          }));
      }
    }
    async function R(e) {
      try {
        if (
          (await o(
            "WAWebUserDisclosureCollection",
          ).UserDisclosureCollection.find(e.toString())) != null
        )
          return !0;
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MetaAiOpenGroupNux] notice ",
                " failed to load",
              ])),
            e,
          )
          .sendLogs("meta-ai-open-group-nux-notice-load-failed");
      } catch (t) {
        if (
          (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[MetaAiOpenGroupNux] notice ",
                  " failed to load",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("meta-ai-open-group-nux-notice-load-failed"),
          t instanceof o("WAWebHttpErrors").HttpNetworkError)
        )
          return !1;
      }
      return (g.add(e), !1);
    }
    function L() {
      f ||
        ((f = !0),
        new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: p,
        }).commit());
    }
    function E() {
      var e = r("WAWebUserPrefsStore").getUser(m);
      return Array.isArray(e)
        ? e.filter(function (e) {
            return typeof e == "string";
          })
        : [];
    }
    function k(e) {
      var t = E();
      t.includes(e) || r("WAWebUserPrefsStore").setUser(m, [].concat(t, [e]));
    }
    ((l.maybeShowGroupAgentNuxes = y),
      (l.maybeShowMetaAiOpenGroupNux = C),
      (l.maybeShowMetaAiOpenGroupNuxAtFirstEntry = b),
      (l.isMetaAiOpenGroupNuxOwed = v));
  },
  98,
);

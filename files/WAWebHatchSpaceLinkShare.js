__d(
  "WAWebHatchSpaceLinkShare",
  [
    "fbt",
    "WALogger",
    "WAWebEnvironment",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebHatchPublishedSpaceDialog.react",
    "WAWebHatchShareStatusDecoder",
    "WAWebHatchSpacePublishFlow",
    "WAWebHatchSpacesStream",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebLinkPreviewChatAction",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebSendTextFlow.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSDialogBridge",
    "react",
    "useWAWebLinkPreview",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = 3e4;
    async function p(e, t, n, r) {
      var o = await v(e);
      return o === "unpublished"
        ? _(e, t, n, r)
        : o == null
          ? !1
          : f(e, t, o, !1, n, r);
    }
    async function _(e, t, n, r) {
      var a = await o(
        "WAWebHatchSpacePublishFlow",
      ).publishHatchSpaceWithConsent(e, t, n, r);
      return a === !1 || a == null
        ? a
        : f(e, t, { isDeploying: !0, url: a }, !0, n, r);
    }
    async function f(e, t, n, r, a, i) {
      var l = n.isDeploying,
        s = n.url;
      if (i.aborted) return null;
      (g(s, l),
        o("WAWebHatchLogging").logHatchArtifact(
          "artifact_share_sheet_impression",
          a,
        ));
      var u = await y(s, r, a, i);
      return u === "unpublish" ? h(e, t, s, a, i) : !0;
    }
    function g(t, n) {
      if (!(n || r("WAWebEnvironment").isWindows)) {
        var a = o("useWAWebLinkPreview").findFirstWebLink(t);
        a != null &&
          o("WAWebLinkPreviewChatAction")
            .getLinkPreview(a)
            .catch(function () {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-space-link-share: preview prefetch failed",
                    ])),
                )
                .sendLogs("hatch-space-link-preview-prefetch-failed");
            });
      }
    }
    async function h(e, t, n, r, a) {
      var i,
        l = (await C(e)) ? "unpublished" : await v(e);
      if (l === "unpublished")
        return (
          o("WAWebHatchLogging").logHatchArtifact(
            "artifact_share_sheet_unpublish",
            r,
          ),
          a.aborted ? null : b(t)
        );
      if (a.aborted) return null;
      var s = (i = l == null ? void 0 : l.url) != null ? i : n,
        u = await y(s, !1, r, a);
      return u === "unpublish" ? h(e, t, s, r, a) : !1;
    }
    async function y(e, t, n, r) {
      r.addEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
      try {
        return await o(
          "WAWebHatchPublishedSpaceDialog.react",
        ).showHatchPublishedSpaceDialog(
          e,
          function (e) {
            return S(e, n);
          },
          t,
        );
      } finally {
        r.removeEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
      }
    }
    async function C(e) {
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (t == null) return (L("unpublish.no_session"), !1);
      var n = await t.request(
        "DELETE",
        o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(e),
        { timeoutMs: m },
      );
      return n.kind === "Ok" &&
        o("WAWebHatchJsonReaders").readBool(n.value, "ok") === !0
        ? !0
        : (L("unpublish." + (n.kind === "Ok" ? "not_confirmed" : R(n))), !1);
    }
    function b(e) {
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "", [s._param("Space name", e)]),
          }),
        ),
        !0
      );
    }
    async function v(e) {
      var t, n;
      if (
        ((t = o("WAWebHatchSpacesStream").getHatchSpaceCapabilities(e)) == null
          ? void 0
          : t.canShare) !== !0
      )
        return L("not_granted");
      var r = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (r == null) return L("no_session");
      var a = await r.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(e),
      );
      if (a.kind !== "Ok") return L(R(a));
      var i = o("WAWebHatchShareStatusDecoder").decodeHatchShareStatus(a.value);
      if (i == null) return L("malformed");
      if (i.publishedUrl == null) return "unpublished";
      var l = o("WAWebHatchShareStatusDecoder").toHatchShareableUrl(
        i.publishedUrl,
      );
      return l == null
        ? L("invalid_url")
        : { isDeploying: ((n = i.shareType) != null ? n : "") === "", url: l };
    }
    function S(e, t) {
      (o("WAWebHatchLogging").logHatchArtifact("artifact_share_sheet_tap", t),
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebSendTextFlow.react"), {
            alwaysShowComposeModal: !0,
            onSent: function () {
              return o("WAWebHatchLogging").logHatchArtifactShared(t);
            },
            openChatAfterSingleSend: !0,
            text: e,
          }),
        ),
        o("WAWebHatchLogging").logHatchArtifact(
          "artifact_forward_sheet_impression",
          t,
        ));
    }
    function R(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function L(e) {
      return (
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-space-link-share: failed reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-space-link-share-failed"),
        null
      );
    }
    l.shareHatchSpaceLink = p;
  },
  226,
);

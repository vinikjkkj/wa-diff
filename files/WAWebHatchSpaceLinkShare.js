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
    "asyncToGeneratorRuntime",
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
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield I(e);
            return o === "unpublished"
              ? f(e, t, n, r)
              : o == null
                ? !1
                : h(e, t, o, !1, n, r);
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebHatchSpacePublishFlow",
            ).publishHatchSpaceWithConsent(e, t, n, r);
            return a === !1 || a == null
              ? a
              : h(e, t, { isDeploying: !0, url: a }, !0, n, r);
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o, a) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = n.isDeploying,
              s = n.url;
            if (i.aborted) return null;
            (C(s, l),
              o("WAWebHatchLogging").logHatchArtifact(
                "artifact_share_sheet_impression",
                a,
              ));
            var u = yield S(s, r, a, i);
            return u === "unpublish" ? b(e, t, s, a, i) : !0;
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
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
    function b(e, t, n, r, o) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l = (yield L(e)) ? "unpublished" : yield I(e);
            if (l === "unpublished")
              return (
                o("WAWebHatchLogging").logHatchArtifact(
                  "artifact_share_sheet_unpublish",
                  r,
                ),
                a.aborted ? null : k(t)
              );
            if (a.aborted) return null;
            var s = (i = l == null ? void 0 : l.url) != null ? i : n,
              u = yield S(s, !1, r, a);
            return u === "unpublish" ? b(e, t, s, r, a) : !1;
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r.addEventListener("abort", o("WDSDialogBridge").closeWDSDialog);
            try {
              return yield o(
                "WAWebHatchPublishedSpaceDialog.react",
              ).showHatchPublishedSpaceDialog(
                e,
                function (e) {
                  return D(e, n);
                },
                t,
              );
            } finally {
              r.removeEventListener(
                "abort",
                o("WDSDialogBridge").closeWDSDialog,
              );
            }
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (t == null) return ($("unpublish.no_session"), !1);
          var n = yield t.request(
            "DELETE",
            o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(e),
            { timeoutMs: m },
          );
          return n.kind === "Ok" &&
            o("WAWebHatchJsonReaders").readBool(n.value, "ok") === !0
            ? !0
            : ($("unpublish." + (n.kind === "Ok" ? "not_confirmed" : x(n))),
              !1);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ '"{Space name}" unpublished', [
              s._param("Space name", e),
            ]),
          }),
        ),
        !0
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (
            ((t = o("WAWebHatchSpacesStream").getHatchSpaceCapabilities(e)) ==
            null
              ? void 0
              : t.canShare) !== !0
          )
            return $("not_granted");
          var r = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (r == null) return $("no_session");
          var a = yield r.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.SPACE_SHARE(e),
          );
          if (a.kind !== "Ok") return $(x(a));
          var i = o("WAWebHatchShareStatusDecoder").decodeHatchShareStatus(
            a.value,
          );
          if (i == null) return $("malformed");
          if (i.publishedUrl == null) return "unpublished";
          var l = o("WAWebHatchShareStatusDecoder").toHatchShareableUrl(
            i.publishedUrl,
          );
          return l == null
            ? $("invalid_url")
            : {
                isDeploying: ((n = i.shareType) != null ? n : "") === "",
                url: l,
              };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      (o("WAWebHatchLogging").logHatchArtifact("artifact_share_sheet_tap", t),
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebSendTextFlow.react"), {
            alwaysShowComposeModal: !0,
            openChatAfterSingleSend: !0,
            text: e,
          }),
        ),
        o("WAWebHatchLogging").logHatchArtifact(
          "artifact_forward_sheet_impression",
          t,
        ));
    }
    function x(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function $(e) {
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

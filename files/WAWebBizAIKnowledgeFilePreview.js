__d(
  "WAWebBizAIKnowledgeFilePreview",
  [
    "WAWebBizAIKnowledgeImageViewer.react",
    "WAWebBizAIKnowledgeLocalImageViewer.react",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a) {
      if (t.startsWith("image/")) {
        o("WAWebModalManager").ModalManager.openMedia(
          s.jsx(r("WAWebBizAIKnowledgeImageViewer.react"), {
            fileName: e,
            getZoomNode: a,
            mediaUrl: n,
          }),
          { transition: "profile-viewer" },
        );
        return;
      }
      o("WAWebExternalLink.react").openExternalLink(n, {
        noApiCmdHandling: !0,
      });
    }
    function c(e, t) {
      o("WAWebModalManager").ModalManager.openMedia(
        s.jsx(r("WAWebBizAIKnowledgeLocalImageViewer.react"), {
          fileName: e.name,
          getZoomNode: t,
          mediaUrl: URL.createObjectURL(e),
        }),
        { transition: "profile-viewer" },
      );
    }
    ((l.openKnowledgeFilePreview = u), (l.openKnowledgeLocalImagePreview = c));
  },
  98,
);

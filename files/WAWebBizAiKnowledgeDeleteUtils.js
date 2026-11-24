__d(
  "WAWebBizAiKnowledgeDeleteUtils",
  ["fbt", "WAWebBizAiSaveUtils", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return {
        cancelLabel: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        destructive: !0,
        confirmLabel: s._(/*BTDS*/ ""),
        testid: "bizai_knowledge_delete_product_confirm",
        title: s._(/*BTDS*/ ""),
      };
    }
    function d(e) {
      return e.source_type === "FILE_UPLOAD"
        ? {
            cancelText: s._(/*BTDS*/ ""),
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: s._(/*BTDS*/ ""),
            }),
            okButtonType: "solid-warning",
            okText: s._(/*BTDS*/ ""),
            testid: "bizai_knowledge_delete_file_confirm",
            title: s._(/*BTDS*/ "", [
              s._param("filename", e.user_provided_file_name),
            ]),
          }
        : e.source_type === "CHAT_HISTORY"
          ? {
              cancelText: s._(/*BTDS*/ ""),
              children: u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(/*BTDS*/ ""),
              }),
              okButtonType: "solid-warning",
              okText: s._(/*BTDS*/ ""),
              testid: "bizai_knowledge_delete_chat_history_confirm",
              title: s._(/*BTDS*/ ""),
            }
          : null;
    }
    function m(e) {
      return e.source_type === "FILE_UPLOAD"
        ? o("WAWebBizAiSaveUtils").showDeletedFileToast
        : e.source_type === "CHAT_HISTORY"
          ? o("WAWebBizAiSaveUtils").showDeletedAIKnowledgeToast
          : o("WAWebBizAiSaveUtils").showDeletedToast;
    }
    function p() {
      return {
        cancelText: s._(/*BTDS*/ ""),
        children: u.jsx(r("WDSText.react"), {
          colorName: "contentDeemphasized",
          type: "Body2",
          children: s._(/*BTDS*/ ""),
        }),
        okButtonType: "solid-warning",
        okText: s._(/*BTDS*/ ""),
        testid: "bizai_knowledge_delete_gdrive_file_confirm",
        title: s._(/*BTDS*/ ""),
      };
    }
    ((l.getDeleteConfirmPropsForProduct = c),
      (l.getDeleteConfirmPropsForSource = d),
      (l.getDeletedToastForSource = m),
      (l.getDeleteConfirmPropsForGoogleDriveFile = p));
  },
  226,
);

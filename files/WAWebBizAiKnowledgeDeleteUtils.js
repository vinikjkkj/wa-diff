__d(
  "WAWebBizAiKnowledgeDeleteUtils",
  ["fbt", "WAWebBizAiSaveUtils", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e.source_type === "FILE_UPLOAD"
        ? {
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: s._(
                /*BTDS*/ "Deleting this file will also delete everything your AI learned from it.",
              ),
            }),
            okButtonType: "solid-warning",
            okText: s._(/*BTDS*/ "Delete"),
            testid: "bizai_knowledge_delete_file_confirm",
            title: s._(/*BTDS*/ "Delete {filename} ?", [
              s._param("filename", e.user_provided_file_name),
            ]),
          }
        : e.source_type === "CHAT_HISTORY"
          ? {
              cancelText: s._(/*BTDS*/ "Cancel"),
              children: u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Your AI will lose what it learned from this conversation.",
                ),
              }),
              okButtonType: "solid-warning",
              okText: s._(/*BTDS*/ "Delete"),
              testid: "bizai_knowledge_delete_chat_history_confirm",
              title: s._(/*BTDS*/ "Delete this chat export?"),
            }
          : null;
    }
    function d(e) {
      return e.source_type === "FILE_UPLOAD"
        ? o("WAWebBizAiSaveUtils").showDeletedFileToast
        : e.source_type === "CHAT_HISTORY"
          ? o("WAWebBizAiSaveUtils").showDeletedAIKnowledgeToast
          : o("WAWebBizAiSaveUtils").showDeletedToast;
    }
    ((l.getDeleteConfirmPropsForSource = c), (l.getDeletedToastForSource = d));
  },
  226,
);

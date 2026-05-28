__d(
  "WAWebBizAiKnowledgeSourcesQuery",
  ["WAWebBizAiKnowledgeSourcesQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiKnowledgeSourcesQuery.graphql"));
    function u(e) {
      var t = e.xfb_meta_ai_biz_agent_wa_ai_home;
      if ((t == null ? void 0 : t.knowledge_sources) == null)
        return { chatHistoryExportStatus: "NOT_ALLOWED", sources: [] };
      var n = [];
      for (var r of t.knowledge_sources)
        if (!(r == null || r.source_type == null)) {
          if (
            r.source_type === "FILE_UPLOAD" &&
            r.user_provided_file_name != null
          ) {
            var o, a, i, l, s, u;
            n.push({
              source_type: "FILE_UPLOAD",
              id: (o = r.id) != null ? o : "",
              update_time: (a = r.update_time) != null ? a : 0,
              label: (i = r.label) != null ? i : "",
              user_provided_file_name: r.user_provided_file_name,
              cdn_url: (l = r.cdn_url) != null ? l : null,
              thumbnail_url: (s = r.thumbnail_url) != null ? s : null,
              file_type: r.file_type === "IMAGE" ? "IMAGE" : "DOCUMENT",
              mime_type: (u = r.mime_type) != null ? u : "",
            });
          } else if (r.source_type === "CHAT_HISTORY") {
            var c, d, m, p;
            n.push({
              source_type: "CHAT_HISTORY",
              id: (c = r.id) != null ? c : "",
              update_time: (d = r.update_time) != null ? d : 0,
              label: (m = r.label) != null ? m : "",
              creation_time: (p = r.creation_time) != null ? p : 0,
            });
          } else if (r.source_type === "WEBSITE") {
            var _, f, g, h;
            n.push({
              source_type: "WEBSITE",
              id: (_ = r.id) != null ? _ : "",
              update_time: (f = r.update_time) != null ? f : 0,
              label: (g = r.label) != null ? g : "",
              creation_time: (h = r.creation_time) != null ? h : 0,
            });
          }
        }
      var y = t.chat_history_export_status,
        C =
          y === "NOT_STARTED" || y === "IN_PROGRESS" || y === "COMPLETE"
            ? y
            : "NOT_ALLOWED";
      return { chatHistoryExportStatus: C, sources: n };
    }
    ((l.KnowledgeSourcesQuery = s), (l.deriveKnowledgeSources = u));
  },
  98,
);

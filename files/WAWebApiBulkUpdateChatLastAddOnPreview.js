__d(
  "WAWebApiBulkUpdateChatLastAddOnPreview",
  ["WALogger", "WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "bulkUpdateChatLastAddOnPreview: bulkCreateOrMerge",
            ])),
        )
        .tags("missing-lid");
      var n = Array.from(t).map(function (e) {
        var t = e[0],
          n = e[1];
        return { id: t, chatlistPreview: n, lastReactionPreview: void 0 };
      });
      return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(n);
    }
    l.bulkUpdateChatLastAddOnPreview = s;
  },
  98,
);

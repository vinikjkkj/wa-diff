__d(
  "validateMAIBAEntitySelectionParams",
  ["AssetSelectionCTAType", "refine"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("refine")).object({
        thread_id: e.string(),
        title: e.string(),
        botResponseId: e.string(),
        elements: e.array(
          e.object({
            buttons: e.array(
              e.object({
                platform_token: e.optional(e.string()),
                postback_action_text: e.optional(e.string()),
                title: e.string(),
                type: e.custom(function (e) {
                  return r("AssetSelectionCTAType").cast(String(e));
                }),
                url: e.optional(e.string()),
                payload: e.optional(e.nullable(e.string())),
              }),
            ),
            image_url: e.optional(e.string()),
            eyebrow: e.optional(e.string()),
            description: e.optional(e.string()),
            subtitle: e.optional(e.string()),
            title: e.string(),
          }),
        ),
      }),
      u = e.assertion(s),
      c = function (t) {
        var e = u(t);
        return e;
      },
      d = c;
    l.default = d;
  },
  98,
);

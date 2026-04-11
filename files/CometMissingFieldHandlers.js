__d(
  "CometMissingFieldHandlers",
  [
    "UFI2CommentsConnectionHandler",
    "getRelayFBMissingFieldHandlers",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [].concat(r("getRelayFBMissingFieldHandlers")(), [
        {
          handle: function (t, n, r, a) {
            if (
              n != null &&
              n.getType() === o("relay-runtime").ROOT_TYPE &&
              t.name === "user" &&
              Object.prototype.hasOwnProperty.call(r, "id")
            )
              return r.id;
            if (
              n != null &&
              n.getType() === o("relay-runtime").ROOT_TYPE &&
              t.name === "story" &&
              Object.prototype.hasOwnProperty.call(r, "story_id")
            )
              return r.story_id;
            if (
              n != null &&
              n.getType() === "Story" &&
              t.name === "comet_sections"
            ) {
              var e = n.getLinkedRecord(t.name, {
                renderLocation: "homepage_stream",
              });
              if (e != null) return e.getDataID();
            }
            var i = n == null ? void 0 : n.getValue("id");
            if (
              n != null &&
              typeof i == "string" &&
              n.getType() === "Feedback" &&
              t.name.startsWith(
                "__UFI2CommentsProvider_feedback_display_comments_ufi2_comments",
              )
            ) {
              var l = a.get(i);
              if (!l) return;
              var s = o("UFI2CommentsConnectionHandler").getConnection(
                l,
                "UFI2CommentsProvider_feedback_display_comments",
                { feedback_source: 1 },
              );
              return s ? s.getDataID() : void 0;
            }
            if (
              n != null &&
              typeof i == "string" &&
              n.getType() === "Feedback" &&
              t.name === "display_comments"
            ) {
              var u = a.get(i);
              if (!u) return;
              var c = u.getLinkedRecord("display_comments", r);
              return c ||
                ((c = u.getLinkedRecord("display_comments")), c) ||
                (Object.prototype.hasOwnProperty.call(r, "is_initial_fetch") &&
                  (c = u.getLinkedRecord(
                    "display_comments",
                    babelHelpers.extends({}, r, {
                      is_initial_fetch: !r.is_initial_fetch,
                    }),
                  )),
                c)
                ? c.getDataID()
                : void 0;
            }
            if (
              n != null &&
              t.name === "video" &&
              Object.prototype.hasOwnProperty.call(r, "id")
            )
              return r.id;
          },
          kind: "linked",
        },
      ]),
      s = e;
    l.default = s;
  },
  98,
);

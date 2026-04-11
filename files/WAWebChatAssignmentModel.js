__d(
  "WAWebChatAssignmentModel",
  ["WAWebBaseModel", "WAWebChatAssignmentCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.chatId = o("WAWebBaseModel").prop()),
          (t.agent = o("WAWebBaseModel").prop()),
          (t.agentId = o("WAWebBaseModel").prop()),
          (t.chatOpenedByAgent = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebChatAssignmentCollection").ChatAssignmentCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "chat_assignment";
    var s = o("WAWebBaseModel").defineModel(e);
    l.ChatAssignment = s;
  },
  98,
);

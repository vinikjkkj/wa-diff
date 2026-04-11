__d(
  "WAWebChatAssignmentCollection",
  [
    "WALogger",
    "WAWebAgentCollection",
    "WAWebAssignedAgentsCollection",
    "WAWebBaseCollection",
    "WAWebChatAssignmentModel",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$ChatAssignmentCollectionImpl$p_1 = new Map()),
            (e.$ChatAssignmentCollectionImpl$p_2 = new Map()),
            (e.$ChatAssignmentCollectionImpl$p_3 = []),
            e.listenTo(e, "add", function (t) {
              return e.$ChatAssignmentCollectionImpl$p_4(t);
            }),
            e.listenTo(e, "remove", function (t) {
              return e.$ChatAssignmentCollectionImpl$p_5(t);
            }),
            e.listenTo(e, "change", function (t) {
              return e.$ChatAssignmentCollectionImpl$p_6(t);
            }),
            e.listenTo(
              o("WAWebAgentCollection").AgentCollection,
              "add",
              function (t) {
                return e.$ChatAssignmentCollectionImpl$p_7(t);
              },
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$ChatAssignmentCollectionImpl$p_4 = function (n) {
            this.$ChatAssignmentCollectionImpl$p_1.set(
              n.chatId,
              !n.chatOpenedByAgent,
            );
            var t = this.getAgentCollectionForChatId(
              o("WAWebWidFactory").createWid(n.chatId),
            );
            if (n.agent == null) {
              var r = o("WAWebAgentCollection").AgentCollection.get(n.agentId);
              r != null
                ? (n.agent = r)
                : o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "chat_assignment_collection:_handleAdd failed",
                        ])),
                    )
                    .sendLogs(
                      "chat_assignment_collection:_handleAdd: attempted to add assignment without agent",
                    );
            }
            n.agent != null && t.add(n.agent);
          }),
          (r.$ChatAssignmentCollectionImpl$p_5 = function (t) {
            var e = this.$ChatAssignmentCollectionImpl$p_2.get(t.chatId);
            (e && e.remove(t.agent),
              this.$ChatAssignmentCollectionImpl$p_1.delete(t.chatId));
          }),
          (r.$ChatAssignmentCollectionImpl$p_6 = function (t) {
            (this.$ChatAssignmentCollectionImpl$p_1.set(
              t.chatId,
              !t.chatOpenedByAgent,
            ),
              this.getAgentCollectionForChatId(
                o("WAWebWidFactory").createWid(t.chatId),
              ).trigger("change", []));
          }),
          (r.$ChatAssignmentCollectionImpl$p_7 = function (t) {
            var e = this.$ChatAssignmentCollectionImpl$p_3.filter(function (e) {
              return e.agentId === t.id;
            });
            this.processChatAssignments(e);
          }),
          (r.processChatAssignments = function (t) {
            var e = this,
              n = [];
            (t.forEach(function (t) {
              var r,
                a = o("WAWebAgentCollection").AgentCollection.get(t.agentId);
              if (
                ((r = e.get(t.id)) == null ? void 0 : r.agent.id) === t.agentId
              ) {
                var i;
                (i = e.get(t.id)) == null ||
                  i.set({ chatOpenedByAgent: t.chatOpenedByAgent });
              } else
                a && !a.isDeleted
                  ? n.push(
                      new (o("WAWebChatAssignmentModel").ChatAssignment)({
                        id: t.id,
                        chatId: t.chatId,
                        chatOpenedByAgent: t.chatOpenedByAgent,
                        agent: a,
                      }),
                    )
                  : e.$ChatAssignmentCollectionImpl$p_3.push(t);
            }),
              this.add(n, { merge: !0 }));
          }),
          (r.getChatUnopenedStatus = function (t) {
            return !!this.$ChatAssignmentCollectionImpl$p_1.get(
              t.toString({ legacy: !0 }),
            );
          }),
          (r.reset = function () {
            (this.$ChatAssignmentCollectionImpl$p_2.forEach(function (e) {
              e.reset();
            }),
              t.prototype.reset.call(this));
          }),
          (r.getAgentCollectionForChatId = function (t) {
            var e = this.$ChatAssignmentCollectionImpl$p_2.get(
              t.toString({ legacy: !0 }),
            );
            return (
              e ||
                ((e = new (o(
                  "WAWebAssignedAgentsCollection",
                ).AssignedAgentsCollection)()),
                this.$ChatAssignmentCollectionImpl$p_2.set(
                  t.toString({ legacy: !0 }),
                  e,
                )),
              e
            );
          }),
          (r.initializeFromCache = function (t) {
            this.processChatAssignments(t);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebChatAssignmentModel").ChatAssignment;
    var u = new s();
    l.ChatAssignmentCollection = u;
  },
  98,
);

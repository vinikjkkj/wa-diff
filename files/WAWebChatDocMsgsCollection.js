__d(
  "WAWebChatDocMsgsCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.hasDocBefore = !0),
            (a.$ChatDocMsgsCollection$p_1 = null),
            (a.$ChatDocMsgsCollection$p_2 = null),
            (a.count = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var i;
                  if (n && !n.equals(a.$ChatDocMsgsCollection$p_2))
                    ((a.$ChatDocMsgsCollection$p_1 = null),
                      (a.$ChatDocMsgsCollection$p_2 = n));
                  else if (a.$ChatDocMsgsCollection$p_1 != null)
                    return a.$ChatDocMsgsCollection$p_1;
                  var l =
                      n != null
                        ? t.msgs.filter(function (e) {
                            return (
                              c(e) &&
                              o("WAWebThreadMsgUtils").isMsgInThread(e, n)
                            );
                          })
                        : t.msgs.filter(c),
                    s = (i = l[0]) != null ? i : t.msgs.head();
                  if (s == null) return 0;
                  try {
                    var u,
                      d = yield o(
                        "WAWebMsgCollection",
                      ).MsgCollection.queryMedia(
                        s.id.remote,
                        1 / 0,
                        "before",
                        s.id,
                        "document",
                      ),
                      m =
                        n != null
                          ? d.filter(function (e) {
                              return o("WAWebThreadMsgUtils").isMsgInThread(
                                e,
                                n,
                              );
                            })
                          : d,
                      p = (u = m.length) != null ? u : 0,
                      _ = p > 0 && l.length > 0 ? 1 : 0;
                    return (
                      (a.$ChatDocMsgsCollection$p_1 = p + l.length - _),
                      a.$ChatDocMsgsCollection$p_1
                    );
                  } catch (n) {
                    var f = r("getErrorSafe")(n);
                    return (
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to count docs for chat ",
                              "",
                            ])),
                          t.id,
                        )
                        .verbose()
                        .sendLogs("md-failed-docs-count: " + f.message),
                      null
                    );
                  }
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(a) ||
              babelHelpers.assertThisInitialized(a)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.delete = function () {
            (t.prototype.delete.call(this), this.stopListening(), this.reset());
          }),
          (i.add = function (n, r) {
            return (
              (this.$ChatDocMsgsCollection$p_1 = null),
              t.prototype.add.call(this, n, r)
            );
          }),
          (i.remove = function (n, r) {
            return (
              (this.$ChatDocMsgsCollection$p_1 = null),
              t.prototype.remove.call(this, n, r)
            );
          }),
          (i.queryDocs = function (t, a) {
            var e = this;
            if (a) {
              if (this.queryDocBefore) return this.queryDocBefore;
              var i = (this.queryDocBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  a.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  "before",
                  a.id,
                  "document",
                )
                .then(function (t) {
                  ((!t ||
                    t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                    (e.hasDocBefore = !1),
                    e.add(t.filter(c), { at: 0 }));
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").E404,
                    r("WAWebNoop"),
                  ),
                )
                .finally(function () {
                  ((e.queryDocBefore = null), e.trigger("query_doc_before"));
                }));
              return (this.trigger("query_doc_before"), i);
            }
            var l = t.msgs;
            if (this.length === 0) {
              if (!l || l.length === 0)
                return (
                  (this.hasDocBefore = !1),
                  (s || (s = n("Promise"))).resolve()
                );
              this.add(l.filter(c), { at: 0 });
            }
            if (t.msgs.msgLoadState.noEarlierMsgs)
              return (
                (this.hasDocBefore = !1),
                (s || (s = n("Promise"))).resolve()
              );
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var u = this.length === 0 ? l.head() : this.head();
              return this.queryDocs(t, u);
            }
            return (s || (s = n("Promise"))).resolve();
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebMsgModel").Msg;
    function c(e) {
      return (
        o("WAWebFrontendMsgGetters").getAsDoc(e) != null &&
        !e.isVcardOverMmsDocument
      );
    }
    l.default = u;
  },
  98,
);

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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (r = t.call.apply(t, [this].concat(i)) || this),
            (r.hasDocBefore = !0),
            (r.$ChatDocMsgsCollection$p_1 = null),
            (r.$ChatDocMsgsCollection$p_2 = null),
            (r.count = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var a;
                  if (n && !n.equals(r.$ChatDocMsgsCollection$p_2))
                    ((r.$ChatDocMsgsCollection$p_1 = null),
                      (r.$ChatDocMsgsCollection$p_2 = n));
                  else if (r.$ChatDocMsgsCollection$p_1 != null)
                    return r.$ChatDocMsgsCollection$p_1;
                  var i =
                      n != null
                        ? t.msgs.filter(function (e) {
                            return (
                              c(e) &&
                              o("WAWebThreadMsgUtils").isMsgInThread(e, n)
                            );
                          })
                        : t.msgs.filter(c),
                    l = (a = i[0]) != null ? a : t.msgs.head();
                  if (l == null) return 0;
                  try {
                    var s,
                      u = yield o(
                        "WAWebMsgCollection",
                      ).MsgCollection.queryMedia(
                        l.id.remote,
                        1 / 0,
                        "before",
                        l.id,
                        "document",
                      ),
                      d =
                        n != null
                          ? u.filter(function (e) {
                              return o("WAWebThreadMsgUtils").isMsgInThread(
                                e,
                                n,
                              );
                            })
                          : u,
                      m = (s = d.length) != null ? s : 0,
                      p = m > 0 && i.length > 0 ? 1 : 0;
                    return (
                      (r.$ChatDocMsgsCollection$p_1 = m + i.length - p),
                      r.$ChatDocMsgsCollection$p_1
                    );
                  } catch (n) {
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
                        .sendLogs("md-failed-docs-count: " + n.message),
                      null
                    );
                  }
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(r) ||
              babelHelpers.assertThisInitialized(r)
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

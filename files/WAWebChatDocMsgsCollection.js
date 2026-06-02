__d(
  "WAWebChatDocMsgsCollection",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.hasDocBefore = !0),
            (n.$ChatDocMsgsCollection$p_1 = null),
            (n.$ChatDocMsgsCollection$p_2 = null),
            (n.count = async function (t, a) {
              var i;
              if (a && !a.equals(n.$ChatDocMsgsCollection$p_2))
                ((n.$ChatDocMsgsCollection$p_1 = null),
                  (n.$ChatDocMsgsCollection$p_2 = a));
              else if (n.$ChatDocMsgsCollection$p_1 != null)
                return n.$ChatDocMsgsCollection$p_1;
              var l =
                  a != null
                    ? t.msgs.filter(function (e) {
                        return (
                          u(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, a)
                        );
                      })
                    : t.msgs.filter(u),
                s = (i = l[0]) != null ? i : t.msgs.head();
              if (s == null) return 0;
              try {
                var c,
                  d = await o("WAWebMsgCollection").MsgCollection.queryMedia(
                    s.id.remote,
                    1 / 0,
                    "before",
                    s.id,
                    "document",
                  ),
                  m =
                    a != null
                      ? d.filter(function (e) {
                          return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                        })
                      : d,
                  p = (c = m.length) != null ? c : 0,
                  _ = p > 0 && l.length > 0 ? 1 : 0;
                return (
                  (n.$ChatDocMsgsCollection$p_1 = p + l.length - _),
                  n.$ChatDocMsgsCollection$p_1
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
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.delete = function () {
            (t.prototype.delete.call(this), this.stopListening(), this.reset());
          }),
          (a.add = function (n, r) {
            return (
              (this.$ChatDocMsgsCollection$p_1 = null),
              t.prototype.add.call(this, n, r)
            );
          }),
          (a.remove = function (n, r) {
            return (
              (this.$ChatDocMsgsCollection$p_1 = null),
              t.prototype.remove.call(this, n, r)
            );
          }),
          (a.queryDocs = function (t, n) {
            var e = this;
            if (n) {
              if (this.queryDocBefore) return this.queryDocBefore;
              var a = (this.queryDocBefore = o("WAWebMsgCollection")
                .MsgCollection.queryMedia(
                  n.id.remote,
                  o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
                  "before",
                  n.id,
                  "document",
                )
                .then(function (t) {
                  ((!t ||
                    t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) &&
                    (e.hasDocBefore = !1),
                    e.add(t.filter(u), { at: 0 }));
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
              return (this.trigger("query_doc_before"), a);
            }
            var i = t.msgs;
            if (this.length === 0) {
              if (!i || i.length === 0)
                return ((this.hasDocBefore = !1), Promise.resolve());
              this.add(i.filter(u), { at: 0 });
            }
            if (t.msgs.msgLoadState.noEarlierMsgs)
              return ((this.hasDocBefore = !1), Promise.resolve());
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
              var l = this.length === 0 ? i.head() : this.head();
              return this.queryDocs(t, l);
            }
            return Promise.resolve();
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebMsgModel").Msg;
    function u(e) {
      return (
        o("WAWebFrontendMsgGetters").getAsDoc(e) != null &&
        !e.isVcardOverMmsDocument
      );
    }
    l.default = s;
  },
  98,
);

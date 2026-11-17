__d(
  "WAWebFtsMsgsCollectionBase",
  [
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebFrontendMsgGetters",
    "WAWebMsgModel",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.hasMoreMsgs = !0),
          (n.resultPage = 0),
          (n.searchPromise = null),
          (n.searchAbortController = null),
          (n.searchTerm = null),
          (n.searchLabel = null),
          (n.updateFtsAfterMsgLabelUpdate = function () {
            var e = n.currentLabelSearch;
            if (!r("isStringNullOrEmpty")(e)) {
              var t = n.filter(function (t) {
                return !t.labels || !t.labels.includes(e);
              });
              n.remove(t, { silent: !0 });
            }
          }),
          n.listenTo(t, "remove_msgs", function (e) {
            var t = n.remove(e, { silent: !0 }).filter(function (e) {
              return !!e;
            });
            t.length && n.trigger("bulk_remove");
          }),
          n.listenTo(
            o("WAWebChatCollection").ChatCollection,
            "remove",
            function (e) {
              var t = [];
              n.forEach(function (n) {
                n.id.remote.equals(e.id) && t.push(n);
              });
              var r = n.remove(t, { silent: !0 }).filter(function (e) {
                return !!e;
              });
              r.length && n.trigger("bulk_remove");
            },
          ),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.searchImpl = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.chat,
              n = e.count,
              o = e.direction,
              a = e.filter,
              i = e.page,
              l = i === void 0 ? 1 : i,
              s = e.searchTerm;
            throw r("err")("searchImpl must be implemented");
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.onSeachPromiseComplete = function (t) {}),
        (a.delete = function (n) {
          (n && this.stopListening(), e.prototype.delete.call(this));
        }),
        (a.resetSearch = function () {
          var e;
          ((this.hasMoreMsgs = !0),
            (this.resultPage = 0),
            (this.searchTerm = null),
            (e = this.searchAbortController) == null || e.abort());
        }),
        (a.search = function (t) {
          var e,
            n = this,
            a = t.chat,
            i = t.count,
            l = t.filter,
            s = l === void 0 ? {} : l,
            u = t.searchTerm,
            c = t.direction,
            d =
              s.kind != null
                ? "" + s.kind + ((e = s.orgId) != null ? e : "")
                : "",
            m = u + "__" + (s.label != null && s.label !== "" ? s.label : d);
          this.currentLabelSearch = s.label;
          var p = !1,
            _ = u !== this.searchTerm;
          if (
            (this.searchTerm !== m
              ? (this.searchTerm != null &&
                this.searchTerm !== "" &&
                u.indexOf(this.searchTerm) === 0
                  ? (p = !0)
                  : ((this.searchTerm = m), this.delete()),
                _ && ((this.resultPage = 0), (this.hasMoreMsgs = !0)))
              : (p = !0),
            this.searchPromise)
          ) {
            var f;
            if (this.searchTerm === m) return this.searchPromise;
            (f = this.searchAbortController) == null || f.abort();
          }
          this.searchAbortController = new AbortController();
          var g = this.searchAbortController.signal,
            h = this.searchImpl({
              chat: a,
              count: i,
              direction: c,
              filter: s,
              page: ++this.resultPage,
              searchTerm: u,
            });
          return (
            (this.searchPromise = r("WAPromiseRaceAbort")(h, g)
              .then(function (e) {
                return (
                  e.eof && (n.hasMoreMsgs = !1),
                  n.searchTerm !== m && _ && n.delete(),
                  (n.searchTerm = m),
                  e.messages &&
                    ((s.kind || s.label != null) &&
                      (e.messages = e.messages.filter(function (e) {
                        return (
                          o("WAWebFrontendMsgGetters").getChat(e) &&
                          o("WAWebChatMessageSearch").matchFilter(
                            o("WAWebFrontendMsgGetters").getChat(e),
                            s,
                          )
                        );
                      })),
                    n.add(
                      e.messages.filter(function (e) {
                        return (
                          !o("WAWebFrontendMsgGetters").getAsRevoked(e) &&
                          o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                            o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
                            e.viewMode,
                          )
                        );
                      }),
                    )),
                  n.onSeachPromiseComplete(p),
                  e
                );
              })
              .catch(
                o("WAAbortError").catchAbort(function () {
                  n.resultPage -= 1;
                }),
              )
              .finally(function () {
                ((n.searchPromise = null),
                  (n.searchAbortController = null),
                  n.trigger("searchPromise_update"));
              })),
            this.trigger("searchPromise_update"),
            this.searchPromise
          );
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebMsgModel").Msg), (l.default = e));
  },
  98,
);

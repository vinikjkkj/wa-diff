__d(
  "ACQWebBloksComponentQueryDataModule",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WebBloksUtils").cast(t(e));
    }
    function s(t, n, r) {
      if (n == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "AsyncComponentQuery data manifest entry must specify " + t + ".",
        );
      var a = e(n, r);
      if (a == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "AsyncComponentQuery data manifest entry must specify a non-null " +
            t +
            ".",
        );
      return o("WebBloksUtils").cast(a);
    }
    var u = (function () {
        function e(e, t, n, r, o, a, i) {
          ((this.$5 = null),
            (this.$6 = null),
            (this.$7 = e),
            (this.$9 = t),
            (this.$1 = n),
            (this.$2 = r),
            (this.$8 = o),
            (this.$3 = a),
            (this.$4 = i),
            (this.initialValue =
              e == null ? null : this.$10(e, "resolved_sync")));
        }
        var t = e.prototype;
        return (
          (t.commitToStore = function (t, n) {
            var e = this;
            if (this.$7 != null || n == null) return null;
            var r = this.$4.getCachedComponentsOrSubscribeToQuery(
              this.$1,
              this.$8,
              this.$2,
              function (r, o) {
                n.enqueueVariableUpdateOperation(t, e.$10(o, "resolved_async"));
              },
            );
            return r.value != null
              ? (n.enqueueVariableUpdateOperation(
                  t,
                  this.$10(r.value, "resolved_sync"),
                ),
                null)
              : r.cancelToken;
          }),
          (t.$10 = function (t, n) {
            if (!t.success) {
              var e = t.error instanceof Error ? t.error.message : null;
              return {
                components: null,
                info: {
                  error_info: e == null ? {} : { errorMessage: e },
                  resolution_type: "failed",
                  response_summary: {},
                },
              };
            }
            var r = this.$5;
            if (r == null || this.$6 !== t) {
              var a = {};
              for (var i of t.result.components) {
                var l = i[0],
                  s = i[1];
                a[l] = {
                  templateId: l,
                  expandedVariables: new Map(Object.entries(this.$3)),
                  scopeKey: this.$9,
                  keyPathBase: o("WebBloksUtils").EMPTY_KEY_PATH,
                  parseResult: s,
                  resourceIdentifier: this.$9 + ":" + l,
                };
              }
              ((this.$5 = a), (this.$6 = t), (r = a));
            }
            return {
              components: r,
              info: {
                error_info: {},
                resolution_type: n,
                response_summary: {},
              },
            };
          }),
          e
        );
      })(),
      c = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.setup = function (n, r, a, i) {
            var t,
              l,
              c = o("WebBloksUtils").cast(r.data),
              d = s("app_id", c.app_id, a),
              m = s("cache_ttl", c.cache_ttl, a),
              p = c.params == null ? {} : (t = e(c.params, a)) != null ? t : {},
              _ =
                c.client_params == null
                  ? {}
                  : (l = e(c.client_params, a)) != null
                    ? l
                    : {},
              f = c.query_id;
            if (f == null || f === "")
              throw new (o("WebBloksErrors").WebBloksError)(
                "AsyncComponentQuery data manifest entry must specify query_id.",
              );
            var g = n.objectSet.componentQueryStore,
              h = g.getCachedComponents(d, p, m);
            return { initialData: new u(h, f, d, m, p, _, g), snapshot: i };
          }),
          t
        );
      })();
    l.ACQWebBloksComponentQueryDataModule = c;
  },
  98,
);

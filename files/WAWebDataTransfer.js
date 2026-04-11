__d(
  "WAWebDataTransfer",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e,
      l = /\r\n/g,
      s = (function () {
        function t(e) {
          var t = this;
          ((this.hasText = function () {
            return t.hasType("text/plain");
          }),
            (this.hasType = function (e) {
              return t.types.includes(e);
            }),
            (this.data = e),
            (this.types = e.types
              ? Array.isArray(e.types)
                ? e.types
                : Object.keys(e.types).map(function (t) {
                    return e.types[t];
                  })
              : []));
        }
        var r = t.prototype;
        return (
          (r.getItems = function () {
            var e = this;
            if (this.data.items)
              return Array.prototype.slice.call(this.data.items);
            var t = this.$1();
            return this.types.map(function (n) {
              return {
                type: n,
                data: e.data.getData(n),
                kind: t.includes(n) ? "string" : "file",
              };
            });
          }),
          (r.$1 = function () {
            return Array.prototype.slice
              .call(this.data.files)
              .map(function (e) {
                var t = e.type;
                return t;
              });
          }),
          (r.getText = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$2(e);
                return t ? t.replace(l, "\n") : null;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = t || [];
                r.length === 0 && r.push("text/plain");
                var o = this.data;
                if (o.getData) {
                  var a;
                  return (
                    r.some(function (e) {
                      var t = o.getData(e);
                      if (t) return ((a = o.getData(e)), !0);
                    }),
                    (e || (e = n("Promise"))).resolve(a)
                  );
                }
                var i = u(this.data.items, r);
                if (i.length) {
                  var l = (e || (e = n("Promise"))).all(
                      i.map(function (t) {
                        return new (e || (e = n("Promise")))(function (e) {
                          return t.getAsString(e);
                        });
                      }),
                    ),
                    s = yield l;
                  return s.find(function (e) {
                    return e.length;
                  });
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .filter(function (e) {
                    var t = e.kind;
                    return t === "file";
                  })
                  .map(function (e) {
                    return e.getAsFile();
                  })
                  .filter(function (e) {
                    return !!e;
                  })
              : Array.prototype.slice.call(this.data.files || []);
          }),
          (r.getData = function (t) {
            return this.data.getData(t);
          }),
          (r.hasFiles = function () {
            return this.data.items
              ? Array.prototype.slice.call(this.data.items).some(function (e) {
                  var t = e.kind;
                  return t === "file";
                })
              : !!Array.prototype.slice.call(this.data.files || []).length;
          }),
          t
        );
      })();
    function u(e, t) {
      var n = Array.from(e);
      return t.reduce(function (e, t) {
        var r = n.find(function (e) {
          return e.type === t;
        });
        return (r && e.push(r), e);
      }, []);
    }
    i.default = s;
  },
  66,
);

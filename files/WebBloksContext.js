__d(
  "WebBloksContext",
  ["WebBloksErrors", "WebBloksLocalState", "WebBloksScopedIds"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.treeManager = e),
          (this.objectSet = t),
          (this.associatedObjectsByClientId = {}),
          (this.bkContextKeyStates = new Map()),
          (this.bkContextKeyAnimations = new Map()),
          (this.localStateDataModule = new (o(
            "WebBloksLocalState",
          ).WebBloksLocalStateDataModule)()),
          (this.scopedClientIdMapper = new (o(
            "WebBloksScopedIds",
          ).ClientIdToScopedIdMapper)()));
      }
      var t = e.prototype;
      return (
        (t.initAssociatedObject_INTERNAL = function (t, n, r) {
          var e = t.clientId,
            a = this.getAssociatedObject_INTERNAL(t, n);
          if (a != null) return a;
          if (
            (this.$1(e) || (this.associatedObjectsByClientId[e] = {}),
            (this.associatedObjectsByClientId[e][n] = r),
            this.associatedObjectsByClientId[e][n] == null)
          )
            throw new (o("WebBloksErrors").WebBloksError)(
              "Failed to initialize associated object for clientId: " +
                e +
                " and assocObjId: " +
                n,
              null,
              !0,
            );
          return this.associatedObjectsByClientId[e][n];
        }),
        (t.getAssociatedObject_INTERNAL = function (t, n) {
          var e,
            r = t.clientId,
            o = (e = this.associatedObjectsByClientId) == null ? void 0 : e[r];
          return o == null ? void 0 : o[n];
        }),
        (t.updateAssociatedObject_INTERNAL = function (t, n, r) {
          var e = t.clientId;
          if (this.associatedObjectsByClientId[e][n] == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "Attempted to update a associated object which has not been initialized",
              null,
              !0,
            );
          if (
            ((this.associatedObjectsByClientId[e][n] = babelHelpers.extends(
              {},
              this.associatedObjectsByClientId[e][n],
              r,
            )),
            this.associatedObjectsByClientId[e][n] == null)
          )
            throw new (o("WebBloksErrors").WebBloksError)(
              "Failed to update associated object for clientId: " +
                e +
                " and assocObjId: " +
                n,
              null,
              !0,
            );
          return this.associatedObjectsByClientId[e][n];
        }),
        (t.$1 = function (t) {
          return Object.prototype.hasOwnProperty.call(
            this.associatedObjectsByClientId,
            t,
          );
        }),
        e
      );
    })();
    l.WebBloksContext = e;
  },
  98,
);

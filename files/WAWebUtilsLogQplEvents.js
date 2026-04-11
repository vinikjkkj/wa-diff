__d(
  "WAWebUtilsLogQplEvents",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = r("qpl"))._(774774619, "3426"),
      u = e._(774777518, "3433"),
      c = e._(774769843, "3425"),
      d = e._(774777556, "3427"),
      m = e._(774775607, "3430"),
      p = e._(774775117, "3428"),
      _ = e._(774780089, "3436"),
      f = e._(774771408, "3435"),
      g = e._(774781666, "3445"),
      h = e._(774768970, "3447");
    function y(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(s, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function C(e, t) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
        bool: { IsConsumer: e },
        int: { ProductsCount: t },
      });
    }
    function b(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(s, e);
    }
    function v(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(u, {
        annotations: { int: { ProductsCount: e } },
      });
    }
    function S(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(u, e);
    }
    function R(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
        int: { ProductsCount: e },
      });
    }
    function L(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(c, e);
    }
    function E() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(c);
    }
    function k(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(d, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function I(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(m, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function T(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(d, {
        int: { CategoryCount: e },
      });
    }
    function D(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(d, e);
    }
    function x(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(p, {
        annotations: { string: { Field: e } },
      });
    }
    function $(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(p, e);
    }
    function P(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(m, {
        bool: { IsConsumer: e },
      });
    }
    function N() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(m);
    }
    function M(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(m, e);
    }
    function w(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(_, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function A(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(f, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function F(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(f, { bool: { IsCached: e } });
    }
    function O(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(f, e);
    }
    function B() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(f);
    }
    function W(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(g, {
        annotations: { string: { EntryPoint: e } },
      });
    }
    function q(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(g, e);
    }
    function U() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(g);
    }
    function V(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(h, e);
    }
    ((l.qplStartCartView = y),
      (l.qplAnnotateCartView = C),
      (l.qplEndCartView = b),
      (l.qplStartOrderCreate = v),
      (l.qplEndOrderCreate = S),
      (l.qplAnnotateOrderView = R),
      (l.qplEndOrderView = L),
      (l.qplDropOrderView = E),
      (l.qplStartProfileCatsView = k),
      (l.qplStartProductView = I),
      (l.qplAnnotateProfileCatsView = T),
      (l.qplEndProfileCatsView = D),
      (l.qplStartProfileSave = x),
      (l.qplEndProfileSave = $),
      (l.qplAnnotateProductView = P),
      (l.qplDropProductView = N),
      (l.qplEndProductView = M),
      (l.qplStartCollectionViewAll = w),
      (l.qplStartCatalogView = A),
      (l.qplAnnotateCatalogView = F),
      (l.qplEndCatalogView = O),
      (l.qplDropCatalogView = B),
      (l.qplStartCatalogCollectionsView = W),
      (l.qplEndCatalogCollectionsView = q),
      (l.qplDropCatalogCollectionsView = U),
      (l.qplEndCollectionsManagementView = V));
  },
  98,
);

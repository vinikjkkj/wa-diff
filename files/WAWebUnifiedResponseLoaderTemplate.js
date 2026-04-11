__d(
  "WAWebUnifiedResponseLoaderTemplate",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      layout: {
        bloks_payload: {
          data: [],
          error_attribution: {
            logging_id:
              '{"callsite":"{\\"product\\":\\"unified_response\\",\\"feature\\":\\"unified_response_loader\\",\\"oncall\\":\\"product_elements\\"}","push_phase":"sandcastle","version":1,"request_id":"AOfW5lA1QNsVgTYWpNcp4ak","www_revision":1035118642}',
            source_map_id: "JP8J4MZqDXPjFActo5Td0g",
          },
          tree: {
            "bk.components.Flexbox": {
              children: [
                {
                  "bk.components.Flexbox": {
                    children: [
                      {
                        "bk.components.Flexbox": {
                          justify_content: "center",
                          align_items: "center",
                          children: [{ "bk.components.Spinner": {} }],
                          _style: { flex: { width: "100%" } },
                        },
                      },
                    ],
                    id: "1gy2m0:1",
                  },
                },
              ],
              extensions: [
                {
                  "bk.extensions.OnDataChange": {
                    on_change:
                      '(bk.action.core.Apply, (bk.action.core.FuncConst, (bk.action.core.TakeLast, (bk.action.core.If, (bk.action.core.Match, "failed", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), (bk.action.core.Apply, (bk.action.core.FuncConst, 1), (bk.action.core.GetArg, 0)), null), (bk.action.core.If, (bk.action.core.If, (bk.action.core.Match, "resolved_sync", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), true, (bk.action.core.Match, "resolved_async", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false)))), (bk.action.core.Apply, (bk.action.core.FuncConst, 1), (bk.action.core.GetArg, 0)), null))), (bk.action.core.GetArg, 0), (bk.action.core.GetArg, 2))',
                    on_bind:
                      '(bk.action.array.Make, "data", (bk.action.core.If, (bk.action.core.Match, (bk.action.bloks.GetVariable2, "query_info_35hdhx340"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), null, (bk.action.map.Get, (bk.action.bloks.GetVariable2, "query_info_35hdhx340"), "resolution_type")))',
                  },
                },
                {
                  "bk.components.OnMount": {
                    on_first_mount:
                      '(bk.action.bloks.FetchAsyncComponents, "com.bloks.www.async.components.BloksURComponentAsyncComponentQuery", (bk.action.map.Make, (bk.action.array.Make, "type", "data", "uuid"), (bk.action.array.Make, (bk.action.bloks.GetParameter, "type"), (bk.action.bloks.GetParameter, "data"), (bk.action.bloks.GetParameter, "uuid"))), (bk.action.i64.Const, 604800), (bk.action.tree.Make, "bk.data.action.bloks.FetchAsyncComponentsOptions"))',
                  },
                },
              ],
            },
          },
          component_queries: [
            {
              id: "35hdhx340",
              targets: { component: "1gy2m0:1" },
              app_id_expr:
                '(bk.action.core.TakeLast, "com.bloks.www.async.components.BloksURComponentAsyncComponentQuery")',
              params:
                '(bk.action.map.Make, (bk.action.array.Make, "type", "data", "uuid"), (bk.action.array.Make, (bk.action.bloks.GetParameter, "type"), (bk.action.bloks.GetParameter, "data"), (bk.action.bloks.GetParameter, "uuid")))',
              client_params:
                '(bk.action.map.Make, (bk.action.array.Make, "__ref_store", "__infra_component_did_render"), (bk.action.array.Make, (bk.action.map.Make, (bk.action.array.Make), (bk.action.array.Make)), null))',
              cache_ttl_expr: "(bk.action.i64.Const, 604800)",
              is_scoped: !0,
            },
          ],
        },
      },
    };
    i.LOADER_TEMPLATE = e;
  },
  66,
);

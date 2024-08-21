// node_modules/.pnpm/@mercuryworkshop+epoxy-tls@2.1.2-1/node_modules/@mercuryworkshop/epoxy-tls/full/epoxy-bundled.js
import { object_get, object_set, convert_body_inner, entries_of_object_inner, define_property, ws_key } from "data:application/javascript;base64,CmV4cG9ydCBmdW5jdGlvbiBvYmplY3RfZ2V0KG9iaiwgaykgeyAKCXRyeSB7CgkJcmV0dXJuIG9ialtrXQoJfSBjYXRjaCB7CgkJcmV0dXJuIHVuZGVmaW5lZAoJfQp9OwpleHBvcnQgZnVuY3Rpb24gb2JqZWN0X3NldChvYmosIGssIHYpIHsKCXRyeSB7IG9ialtrXSA9IHYgfSBjYXRjaCB7fQp9OwoKZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRfYm9keV9pbm5lcihib2R5KSB7CglsZXQgcmVxID0gbmV3IFJlcXVlc3QoIiIsIHsgbWV0aG9kOiAiUE9TVCIsIGR1cGxleDogImhhbGYiLCBib2R5IH0pOwoJbGV0IHR5cGUgPSByZXEuaGVhZGVycy5nZXQoImNvbnRlbnQtdHlwZSIpOwoJcmV0dXJuIFtuZXcgVWludDhBcnJheShhd2FpdCByZXEuYXJyYXlCdWZmZXIoKSksIHR5cGVdOwp9CgpleHBvcnQgZnVuY3Rpb24gZW50cmllc19vZl9vYmplY3RfaW5uZXIob2JqKSB7CglyZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoeCA9PiB4Lm1hcChTdHJpbmcpKTsKfQoKZXhwb3J0IGZ1bmN0aW9uIGRlZmluZV9wcm9wZXJ0eShvYmosIGssIHYpIHsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGssIHsgdmFsdWU6IHYsIHdyaXRhYmxlOiBmYWxzZSB9KTsKfQoKZXhwb3J0IGZ1bmN0aW9uIHdzX2tleSgpIHsKCWxldCBrZXkgPSBuZXcgVWludDhBcnJheSgxNik7CgljcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGtleSk7CglyZXR1cm4gYnRvYShBcnJheS5mcm9tKGtleSkubWFwKFN0cmluZy5mcm9tQ2hhckNvZGUpLmpvaW4oJycpKTsKfQo=";
var wasm;
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var WASM_VECTOR_LEN = 0;
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.buffer !== wasm.memory.buffer) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
var cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} };
var encodeString = function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.buffer !== wasm.memory.buffer) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
if (typeof TextDecoder !== "undefined") {
  cachedTextDecoder.decode();
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));
}
function dropObject(idx) {
  if (idx < 132)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => {
  wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
});
function makeClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    try {
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
        state.a = 0;
        CLOSURE_DTORS.unregister(state);
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_34(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1df17eea5d152e58(arg0, arg1, addHeapObject(arg2));
}
function __wbg_adapter_37(arg0, arg1) {
  wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h625e9f08854c28a1(arg0, arg1);
}
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_3.get(state.dtor)(a, state.b);
        CLOSURE_DTORS.unregister(state);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_40(arg0, arg1) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h254fb9d77ab5ab00(arg0, arg1);
}
function __wbg_adapter_43(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h42c69c7dd59fa550(arg0, arg1, addHeapObject(arg2));
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
var cachedUint32Memory0 = null;
function getUint32Memory0() {
  if (cachedUint32Memory0 === null || cachedUint32Memory0.buffer !== wasm.memory.buffer) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32Memory0;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getUint32Memory0();
  for (let i = 0; i < array.length; i++) {
    mem[ptr / 4 + i] = addHeapObject(array[i]);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getUint32Memory0();
  const slice = mem.subarray(ptr / 4, ptr / 4 + len);
  const result = [];
  for (let i = 0; i < slice.length; i++) {
    result.push(takeObject(slice[i]));
  }
  return result;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
function __wbg_adapter_162(arg0, arg1, arg2, arg3) {
  wasm.wasm_bindgen__convert__closures__invoke2_mut__h3b11eef3b4066485(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
var EpoxyClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclient_free(ptr >>> 0));
var EpoxyClient = class {
  toJSON() {
    return {
      redirect_limit: this.redirect_limit,
      user_agent: this.user_agent
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclient_free(ptr);
  }
  /**
  * @returns {number}
  */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclient_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclient_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {string}
  */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclient_user_agent(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * @param {string} arg0
  */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclient_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @param {string} wisp_url
  * @param {EpoxyClientOptions} options
  */
  constructor(wisp_url, options) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(wisp_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      _assertClass(options, EpoxyClientOptions);
      var ptr1 = options.__destroy_into_raw();
      wasm.epoxyclient_new(retptr, ptr0, len0, ptr1);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {Promise<void>}
  */
  replace_stream_provider() {
    const ret = wasm.epoxyclient_replace_stream_provider(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @param {(string)[]} protocols
  * @param {any} headers
  * @returns {Promise<EpoxyWebSocket>}
  */
  connect_websocket(handlers, url, protocols, headers) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArrayJsValueToWasm0(protocols, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_websocket(this.__wbg_ptr, ptr0, ptr1, len1, ptr2, len2, addHeapObject(headers));
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyIoStream>}
  */
  connect_tcp(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_tcp(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyIoStream>}
  */
  connect_tls(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_tls(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {EpoxyHandlers} handlers
  * @param {string} url
  * @returns {Promise<EpoxyUdpStream>}
  */
  connect_udp(handlers, url) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_udp(this.__wbg_ptr, ptr0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * @param {string} url
  * @param {object} options
  * @returns {Promise<Response>}
  */
  fetch(url, options) {
    const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_fetch(this.__wbg_ptr, ptr0, len0, addHeapObject(options));
    return takeObject(ret);
  }
};
var EpoxyClientOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclientoptions_free(ptr >>> 0));
var EpoxyClientOptions = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclientoptions_free(ptr);
  }
  /**
  * @returns {boolean}
  */
  get wisp_v2() {
    const ret = wasm.__wbg_get_epoxyclientoptions_wisp_v2(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set wisp_v2(arg0) {
    wasm.__wbg_set_epoxyclientoptions_wisp_v2(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {boolean}
  */
  get udp_extension_required() {
    const ret = wasm.__wbg_get_epoxyclientoptions_udp_extension_required(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} arg0
  */
  set udp_extension_required(arg0) {
    wasm.__wbg_set_epoxyclientoptions_udp_extension_required(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {(string)[]}
  */
  get websocket_protocols() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclientoptions_websocket_protocols(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {(string)[]} arg0
  */
  set websocket_protocols(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_websocket_protocols(this.__wbg_ptr, ptr0, len0);
  }
  /**
  * @returns {number}
  */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclientoptions_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} arg0
  */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclientoptions_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
  * @returns {string}
  */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_epoxyclientoptions_user_agent(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
  * @param {string} arg0
  */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
  */
  constructor() {
    const ret = wasm.epoxyclientoptions_new_default();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
};
var EpoxyHandlersFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyhandlers_free(ptr >>> 0));
var EpoxyHandlers = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyHandlersFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyhandlers_free(ptr);
  }
  /**
  * @returns {Function}
  */
  get onopen() {
    const ret = wasm.__wbg_get_epoxyhandlers_onopen(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onopen(arg0) {
    wasm.__wbg_set_epoxyhandlers_onopen(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onclose() {
    const ret = wasm.__wbg_get_epoxyhandlers_onclose(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onclose(arg0) {
    wasm.__wbg_set_epoxyhandlers_onclose(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onerror() {
    const ret = wasm.__wbg_get_epoxyhandlers_onerror(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onerror(arg0) {
    wasm.__wbg_set_epoxyhandlers_onerror(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @returns {Function}
  */
  get onmessage() {
    const ret = wasm.__wbg_get_epoxyhandlers_onmessage(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Function} arg0
  */
  set onmessage(arg0) {
    wasm.__wbg_set_epoxyhandlers_onmessage(this.__wbg_ptr, addHeapObject(arg0));
  }
  /**
  * @param {Function} onopen
  * @param {Function} onclose
  * @param {Function} onerror
  * @param {Function} onmessage
  */
  constructor(onopen, onclose, onerror, onmessage) {
    const ret = wasm.epoxyhandlers_new(addHeapObject(onopen), addHeapObject(onclose), addHeapObject(onerror), addHeapObject(onmessage));
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
};
var EpoxyIoStreamFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyiostream_free(ptr >>> 0));
var EpoxyIoStream = class _EpoxyIoStream {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyIoStream.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyIoStreamFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyIoStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyiostream_free(ptr);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxyiostream_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @returns {Promise<void>}
  */
  close() {
    const ret = wasm.epoxyiostream_close(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var EpoxyUdpStreamFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyudpstream_free(ptr >>> 0));
var EpoxyUdpStream = class _EpoxyUdpStream {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyUdpStream.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyUdpStreamFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyUdpStreamFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyudpstream_free(ptr);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxyudpstream_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @returns {Promise<void>}
  */
  close() {
    const ret = wasm.epoxyudpstream_close(this.__wbg_ptr);
    return takeObject(ret);
  }
};
var EpoxyWebSocketFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxywebsocket_free(ptr >>> 0));
var EpoxyWebSocket = class _EpoxyWebSocket {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyWebSocket.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyWebSocketFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyWebSocketFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxywebsocket_free(ptr);
  }
  /**
  * @param {any} payload
  * @returns {Promise<void>}
  */
  send(payload) {
    const ret = wasm.epoxywebsocket_send(this.__wbg_ptr, addHeapObject(payload));
    return takeObject(ret);
  }
  /**
  * @param {number} code
  * @param {string} reason
  * @returns {Promise<void>}
  */
  close(code, reason) {
    const ptr0 = passStringToWasm0(reason, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.epoxywebsocket_close(this.__wbg_ptr, code, ptr0, len0);
    return takeObject(ret);
  }
};
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0));
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0));
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0));
var IntoUnderlyingSource = class _IntoUnderlyingSource {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_IntoUnderlyingSource.prototype);
    obj.__wbg_ptr = ptr;
    IntoUnderlyingSourceFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsource_free(ptr);
  }
  /**
  * @param {ReadableStreamDefaultController} controller
  * @returns {Promise<any>}
  */
  pull(controller) {
    const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  /**
  */
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingsource_cancel(ptr);
  }
};
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_get_bd8e338fbd5f5cc8 = function(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof ArrayBuffer;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof obj === "string" ? obj : void 0;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbindgen_is_falsy = function(arg0) {
    const ret = !getObject(arg0);
    return ret;
  };
  imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_epoxyudpstream_new = function(arg0) {
    const ret = EpoxyUdpStream.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_wskey_c4e2f12f6db0b4e7 = function(arg0) {
    const ret = ws_key();
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbg_epoxywebsocket_new = function(arg0) {
    const ret = EpoxyWebSocket.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_16b304a2cfa7ff4a = function() {
    const ret = new Array();
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_of_647f9238b4d5407a = function(arg0, arg1) {
    const ret = Array.of(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_push_a5b05aedc7234f9f = function(arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    return ret;
  };
  imports.wbg.__wbg_new_72fb9a18b5ae2624 = function() {
    const ret = new Object();
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_number_new = function(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_sethighWaterMark_ea50ed3ec2143088 = function(arg0, arg1) {
    getObject(arg0).highWaterMark = arg1;
  };
  imports.wbg.__wbg_newwithintounderlyingsource_a03a82aa1bbbb292 = function(arg0, arg1) {
    const ret = new ReadableStream(IntoUnderlyingSource.__wrap(arg0), takeObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithoptreadablestreamandinit_0b825f969ca543d6 = function() {
    return handleError(function(arg0, arg1) {
      const ret = new Response(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_defineproperty_6a16ad2af4917cea = function(arg0, arg1, arg2, arg3) {
    define_property(getObject(arg0), getStringFromWasm0(arg1, arg2), takeObject(arg3));
  };
  imports.wbg.__wbg_objectget_6caeba1c15433099 = function(arg0, arg1, arg2) {
    const ret = object_get(getObject(arg0), getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_array = function(arg0) {
    const ret = Array.isArray(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_objectset_eedaed7d2cda5a74 = function(arg0, arg1, arg2, arg3) {
    object_set(getObject(arg0), getStringFromWasm0(arg1, arg2), takeObject(arg3));
  };
  imports.wbg.__wbg_from_89e3fc3ba5e6fb48 = function(arg0) {
    const ret = Array.from(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
      obj.a = 0;
      return true;
    }
    const ret = false;
    return ret;
  };
  imports.wbg.__wbg_clearTimeout_76877dbc010e786d = function(arg0) {
    const ret = clearTimeout(takeObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_63b92bc8671ed464 = function(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_epoxyiostream_new = function(arg0) {
    const ret = EpoxyIoStream.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithstrsequence_9bc178264d955680 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_new_6c74223c77cfabad = function() {
    return handleError(function(arg0, arg1) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_setbinaryType_b0cf5103cd561959 = function(arg0, arg1) {
    getObject(arg0).binaryType = takeObject(arg1);
  };
  imports.wbg.__wbg_setonmessage_2af154ce83a3dc94 = function(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
  };
  imports.wbg.__wbg_setonopen_ce7a4c51e5cf5788 = function(arg0, arg1) {
    getObject(arg0).onopen = getObject(arg1);
  };
  imports.wbg.__wbg_setonclose_b9929b1c1624dff3 = function(arg0, arg1) {
    getObject(arg0).onclose = getObject(arg1);
  };
  imports.wbg.__wbg_setonerror_39a785302b0cd2e9 = function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
  };
  imports.wbg.__wbg_setTimeout_75cb9b6991a4031d = function() {
    return handleError(function(arg0, arg1) {
      const ret = setTimeout(getObject(arg0), arg1);
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_log_625338adaf6c9cd7 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbg_convertbodyinner_e9b0ed309599fae3 = function() {
    return handleError(function(arg0) {
      const ret = convert_body_inner(takeObject(arg0));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_then_a73caa9a87991566 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_at_c729a14f9fc27c62 = function(arg0, arg1) {
    const ret = getObject(arg0).at(arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_entriesofobjectinner_2911c6420a76cec8 = function(arg0, arg1) {
    const ret = entries_of_object_inner(getObject(arg1));
    const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbg_length_cd7af8117672b8b8 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_data_3ce7c145ca4fbcdc = function(arg0) {
    const ret = getObject(arg0).data;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_81740750da40724f = function(arg0, arg1) {
    try {
      var state0 = { a: arg0, b: arg1 };
      var cb0 = (arg02, arg12) => {
        const a = state0.a;
        state0.a = 0;
        try {
          return __wbg_adapter_162(a, state0.b, arg02, arg12);
        } finally {
          state0.a = a;
        }
      };
      const ret = new Promise(cb0);
      return addHeapObject(ret);
    } finally {
      state0.a = state0.b = 0;
    }
  };
  imports.wbg.__wbg_send_5fcd7bab9777194e = function() {
    return handleError(function(arg0, arg1, arg2) {
      getObject(arg0).send(new Uint8Array(getArrayU8FromWasm0(arg1, arg2)).buffer);
    }, arguments);
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_12d079cc21e14bdb = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).randomFillSync(takeObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_crypto_1d1f22824a6a080c = function(arg0) {
    const ret = getObject(arg0).crypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_process_4a72847cc503995b = function(arg0) {
    const ret = getObject(arg0).process;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_versions_f686565e586dd935 = function(arg0) {
    const ret = getObject(arg0).versions;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_node_104a2ff8d6ea03a2 = function(arg0) {
    const ret = getObject(arg0).node;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_string = function(arg0) {
    const ret = typeof getObject(arg0) === "string";
    return ret;
  };
  imports.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return handleError(function() {
      const ret = module.require;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_is_function = function(arg0) {
    const ret = typeof getObject(arg0) === "function";
    return ret;
  };
  imports.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(arg0) {
    const ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_call_27c0f87801dedf93 = function() {
    return handleError(function(arg0, arg1) {
      const ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_self_ce0dbfc45cf2f5be = function() {
    return handleError(function() {
      const ret = self.self;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_window_c6fb939a7f436783 = function() {
    return handleError(function() {
      const ret = window.window;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_globalThis_d1e6af4856ba331b = function() {
    return handleError(function() {
      const ret = globalThis.globalThis;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_global_207b558942527489 = function() {
    return handleError(function() {
      const ret = global.global;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    const ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbg_newnoargs_e258087cd0daa0ea = function(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_call_b3ca7c6051f9bec1 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_fromEntries_c9d8ec8925e677a8 = function() {
    return handleError(function(arg0) {
      const ret = Object.fromEntries(getObject(arg0));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_set_1f9b04f170055d33 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_then_0c86a60e8fcfe9f6 = function(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_a47bac70306a19a7 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
  };
  imports.wbg.__wbg_length_c20a40f15020d68a = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_now_3014639a94423537 = function() {
    const ret = Date.now();
    return ret;
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
  };
  imports.wbg.__wbg_waitAsync_5d743fc9058ba01a = function() {
    const ret = Atomics.waitAsync;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_8cccba86b0f574cb = function(arg0) {
    const ret = new Int32Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_waitAsync_46d5c36955b71a79 = function(arg0, arg1, arg2) {
    const ret = Atomics.waitAsync(getObject(arg0), arg1, arg2);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_async_19c0400d97cc72fe = function(arg0) {
    const ret = getObject(arg0).async;
    return ret;
  };
  imports.wbg.__wbg_value_571d60108110e917 = function(arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_link_fc1eedd35dc7e0a6 = function(arg0) {
    const ret = "data:application/javascript," + encodeURIComponent(`onmessage = function (ev) {
            let [ia, index, value] = ev.data;
            ia = new Int32Array(ia.buffer);
            let result = Atomics.wait(ia, index, value);
            postMessage(result);
        };
        `);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbg_new_d1187ae36d662ef9 = function() {
    return handleError(function(arg0, arg1) {
      const ret = new Worker(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_setonmessage_503809e5bb51bd33 = function(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
  };
  imports.wbg.__wbg_of_6a70eed8d41f469c = function(arg0, arg1, arg2) {
    const ret = Array.of(getObject(arg0), getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_postMessage_7380d10e8b8269df = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).postMessage(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function(arg0) {
    queueMicrotask(getObject(arg0));
  };
  imports.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_resolve_b0083a7967828ec8 = function(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_byobRequest_72fca99f9c32c193 = function(arg0) {
    const ret = getObject(arg0).byobRequest;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_view_7f0ce470793a340f = function(arg0) {
    const ret = getObject(arg0).view;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_byteLength_58f7b4fab1919d44 = function(arg0) {
    const ret = getObject(arg0).byteLength;
    return ret;
  };
  imports.wbg.__wbg_close_184931724d961ccc = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_new_28c511d9baebfa89 = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_dd7f74bc60f1faab = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_byteOffset_81d60f7392524f62 = function(arg0) {
    const ret = getObject(arg0).byteOffset;
    return ret;
  };
  imports.wbg.__wbg_close_a994f9425dab445c = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_enqueue_ea194723156c0cc2 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).enqueue(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_setTimeout_fba1b48a90e30862 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_performance_1430613edb72ce03 = function(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_now_eab901b1d3b8a295 = function(arg0) {
    const ret = getObject(arg0).now();
    return ret;
  };
  imports.wbg.__wbg_instanceof_Headers_e8d8a8f38d11f7d7 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Headers;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_respond_b1a43b2e3a06d525 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).respond(arg1 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_close_acd9532ff5c093ea = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper307 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 5, __wbg_adapter_34);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper309 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 5, __wbg_adapter_37);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper1590 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 94, __wbg_adapter_40);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper1634 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_43);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper3747 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_43);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_closure_wrapper3903 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_40);
    return addHeapObject(ret);
  };
  return imports;
}
function __wbg_init_memory(imports, maybe_memory) {
  imports.wbg.memory = maybe_memory || new WebAssembly.Memory({ initial: 22, maximum: /iPad|iPhone|iPod/.test(navigator.userAgent) ? 4096 : 8192, shared: true });
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module2;
  cachedInt32Memory0 = null;
  cachedUint32Memory0 = null;
  cachedUint8Memory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_init(maybe_memory) {
  if (wasm !== void 0)
    return wasm;
  if (typeof input === "undefined") {
    input = new URL("epoxy.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  __wbg_init_memory(imports, maybe_memory);
  const { instance, module: module2 } = await __wbg_load(await input, imports);
  __wbg_finalize_init(instance, module2);
}
var epoxy_bundled_default = __wbg_init;

// src/main.ts
var EpoxyTransport = class {
  canstart = true;
  epxclient = null;
  wisp;
  wisp_v2;
  udp_extension_required;
  EpoxyHandlers = null;
  constructor({ wisp, wisp_v2, udp_extension_required }) {
    this.wisp = wisp;
    this.wisp_v2 = wisp_v2 || false;
    this.udp_extension_required = udp_extension_required || false;
  }
  async init() {
    await epoxy_bundled_default();
    let options = new EpoxyClientOptions();
    options.user_agent = navigator.userAgent;
    options.udp_extension_required = this.udp_extension_required;
    options.wisp_v2 = this.wisp_v2;
    this.epxclient = new EpoxyClient(this.wisp, options);
    this.EpoxyHandlers = EpoxyHandlers;
    this.ready = true;
  }
  ready = false;
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    if (body instanceof Blob)
      body = await body.arrayBuffer();
    try {
      let payload = await this.epxclient.fetch(remote.href, { method, body, headers, redirect: "manual" });
      return {
        body: payload.body,
        headers: payload.rawHeaders,
        status: payload.status,
        statusText: payload.statusText
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  connect(url, origin, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    let handlers = new this.EpoxyHandlers(
      onopen,
      onclose,
      onerror,
      (data) => data instanceof Uint8Array ? onmessage(data.buffer) : onmessage(data)
    );
    let epsocket = this.epxclient.connect_websocket(
      handlers,
      url.href,
      protocols,
      { "Origin": origin }
    );
    return [
      async (data) => {
        (await epsocket).send(data);
      },
      async (code, reason) => {
        (await epsocket).close(close, reason);
      }
    ];
  }
};
export {
  EpoxyTransport as default
};
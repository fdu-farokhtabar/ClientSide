// source: order.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.DeliveryType', null, global);
goog.exportSymbol('proto.OrderRequestMessage', null, global);
goog.exportSymbol('proto.OrderResponseMessage', null, global);
goog.exportSymbol('proto.PriceType', null, global);
goog.exportSymbol('proto.ProductOrder', null, global);
goog.exportSymbol('proto.TariffType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProductOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProductOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProductOrder.displayName = 'proto.ProductOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OrderRequestMessage.repeatedFields_, null);
};
goog.inherits(proto.OrderRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderRequestMessage.displayName = 'proto.OrderRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderResponseMessage.displayName = 'proto.OrderResponseMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProductOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.ProductOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProductOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    productslug: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProductOrder}
 */
proto.ProductOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProductOrder;
  return proto.ProductOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProductOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProductOrder}
 */
proto.ProductOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductslug(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProductOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProductOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProductOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProductOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductslug();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string ProductSlug = 1;
 * @return {string}
 */
proto.ProductOrder.prototype.getProductslug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProductOrder} returns this
 */
proto.ProductOrder.prototype.setProductslug = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double Count = 2;
 * @return {number}
 */
proto.ProductOrder.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProductOrder} returns this
 */
proto.ProductOrder.prototype.setCount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OrderRequestMessage.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerusername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pricetype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    delivery: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tariff: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto.ProductOrder.toObject, includeInstance),
    confirmedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ponumber: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    marketspecial: jspb.Message.getFieldWithDefault(msg, 10, ""),
    countofcustomershareacontainer: (f = msg.getCountofcustomershareacontainer()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    adddiscounttosample: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderRequestMessage}
 */
proto.OrderRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderRequestMessage;
  return proto.OrderRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderRequestMessage}
 */
proto.OrderRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerusername(value);
      break;
    case 2:
      var value = /** @type {!proto.PriceType} */ (reader.readEnum());
      msg.setPricetype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 4:
      var value = /** @type {!proto.DeliveryType} */ (reader.readEnum());
      msg.setDelivery(value);
      break;
    case 5:
      var value = /** @type {!proto.TariffType} */ (reader.readEnum());
      msg.setTariff(value);
      break;
    case 6:
      var value = new proto.ProductOrder;
      reader.readMessage(value,proto.ProductOrder.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPonumber(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketspecial(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setCountofcustomershareacontainer(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdddiscounttosample(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerusername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPricetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDelivery();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTariff();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ProductOrder.serializeBinaryToWriter
    );
  }
  f = message.getConfirmedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPonumber();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMarketspecial();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountofcustomershareacontainer();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getAdddiscounttosample();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string CustomerUserName = 1;
 * @return {string}
 */
proto.OrderRequestMessage.prototype.getCustomerusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setCustomerusername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PriceType PriceType = 2;
 * @return {!proto.PriceType}
 */
proto.OrderRequestMessage.prototype.getPricetype = function() {
  return /** @type {!proto.PriceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.PriceType} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setPricetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional double Cost = 3;
 * @return {number}
 */
proto.OrderRequestMessage.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional DeliveryType Delivery = 4;
 * @return {!proto.DeliveryType}
 */
proto.OrderRequestMessage.prototype.getDelivery = function() {
  return /** @type {!proto.DeliveryType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.DeliveryType} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setDelivery = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional TariffType Tariff = 5;
 * @return {!proto.TariffType}
 */
proto.OrderRequestMessage.prototype.getTariff = function() {
  return /** @type {!proto.TariffType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.TariffType} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setTariff = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated ProductOrder Orders = 6;
 * @return {!Array<!proto.ProductOrder>}
 */
proto.OrderRequestMessage.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.ProductOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ProductOrder, 6));
};


/**
 * @param {!Array<!proto.ProductOrder>} value
 * @return {!proto.OrderRequestMessage} returns this
*/
proto.OrderRequestMessage.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ProductOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProductOrder}
 */
proto.OrderRequestMessage.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ProductOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};


/**
 * optional string ConfirmedBy = 7;
 * @return {string}
 */
proto.OrderRequestMessage.prototype.getConfirmedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setConfirmedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string PoNumber = 8;
 * @return {string}
 */
proto.OrderRequestMessage.prototype.getPonumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setPonumber = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Description = 9;
 * @return {string}
 */
proto.OrderRequestMessage.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string MarketSpecial = 10;
 * @return {string}
 */
proto.OrderRequestMessage.prototype.getMarketspecial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setMarketspecial = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Int32Value CountOfCustomerShareAContainer = 11;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.OrderRequestMessage.prototype.getCountofcustomershareacontainer = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 11));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.OrderRequestMessage} returns this
*/
proto.OrderRequestMessage.prototype.setCountofcustomershareacontainer = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.clearCountofcustomershareacontainer = function() {
  return this.setCountofcustomershareacontainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderRequestMessage.prototype.hasCountofcustomershareacontainer = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool AddDiscountToSample = 12;
 * @return {boolean}
 */
proto.OrderRequestMessage.prototype.getAdddiscounttosample = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.OrderRequestMessage} returns this
 */
proto.OrderRequestMessage.prototype.setAdddiscounttosample = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iserror: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderResponseMessage}
 */
proto.OrderResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderResponseMessage;
  return proto.OrderResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderResponseMessage}
 */
proto.OrderResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIserror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIserror();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string Message = 1;
 * @return {string}
 */
proto.OrderResponseMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.OrderResponseMessage} returns this
 */
proto.OrderResponseMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool IsError = 2;
 * @return {boolean}
 */
proto.OrderResponseMessage.prototype.getIserror = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.OrderResponseMessage} returns this
 */
proto.OrderResponseMessage.prototype.setIserror = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.PriceType = {
  FOB: 0,
  SAC: 1,
  LANDEDPRICE: 2,
  SAMPLE: 3
};

/**
 * @enum {number}
 */
proto.DeliveryType = {
  CUSTOMERFORWARDER: 0,
  WILLCALL: 1,
  KIANUSA: 2
};

/**
 * @enum {number}
 */
proto.TariffType = {
  IORKIAN: 0,
  IORCUSTOMER: 1
};

goog.object.extend(exports, proto);

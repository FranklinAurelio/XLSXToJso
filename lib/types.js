module.exports = {
  /**
   * sheet(table) tipo
    * Afeta o tipo de saída json
    * Quando existe o tipo #id, a saída da tabela json está no formato de mapa (id: (xx: 1))
    * Quando não há um tipo #id, a saída da tabela json é do tipo array sem índice de identificação
   */
  SheetType: {
    /**
     * Planilha comum
      * Resultado JSON ARRAY
     */
    NORMAL: 0,

    /**
     * Tabela principal com relacionamento de chave estrangeira primária
      * Resultado JSON MAP
     */
    MASTER: 1,

    /**
     * Agendamentos com relacionamentos de chave primária e externa
      * Resultado JSON MAP
     */
    SLAVE: 2
  },

  /**
   * Tipos de dados suportados
   */
  DataType: {
    NUMBER: 'number',
    STRING: 'string',
    BOOL: 'bool',
    DATE: 'date',
    ID: 'id',
    IDS: 'id[]',
    ARRAY: '[]',
    OBJECT: '{}',
    UNKNOWN: 'unknown'
  }

};
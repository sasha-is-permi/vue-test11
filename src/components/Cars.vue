
<template>
     <section class="section-head">
        <div class="container container-head">
            <div class="row">
                <div class="content-head">
                    <img src="img/logo-duck.png" alt=""/>
                </div>
            </div>    
        </div>
    </section>
    <section class="section-form">
        <div class="container container-text">
            <div class="content-heading-text">
                <p>!</p>
                <h1>Ay caramba!</h1>
            </div>
        </div>
        <div class="container container-form">
            <form class="row mt-3">
                <div class="col-12 col-md-4 col-lg-3 mt-2 text-name">
                    <label for="formGroupExampleInput" class="form-label"></label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Название">
                </div>
                <div class="col-6 col-md-4 col-lg-3 text-year mt-2">
                    <label for="formGroupExampleInput" class="form-label"></label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Год">
                </div>
                <div class="col-6 col-md-4 col-lg-3 text-price">
                
                    <label for="formGroupExampleInput" class="form-label">Цена</label>
                    <input type="text" class="form-control" id="formGroupExampleInput">
                </div>
            </form>    
            <form class="row mt-4">    
                <div class="col-12 col-lg-9 text-description mt-4">
                
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Описание">
                </div>
            </form>    
            
            <form class="row mt-4">
                <div class="col-12 col-md-4 col-lg-3 col-color">
                    <h2>Цвет</h2>
                    <input type="radio" name="color" id="wite" />
                    <input type="radio" name="color" id="black" checked="checked" />
                    <input type="radio" name="color" id="gray" />
                    <input type="radio" name="color" id="red" />
                    <input type="radio" name="color" id="green" />
                </div>
                <div class="col-6 col-md-4 col-lg-3 text-status">
                    <input list="list-status" id="status" name="status" placeholder="Статус"/>
                    <datalist id="list-status">
                        <option value="В наличии"/>
                        <option value="Ожидается"/>
                        <option value="Нет в наличии"/>
                    </datalist>
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                    <button type="button" class="btn btn-danger">Отправить<img src="img/arrow-right.png" alt=""/></button>
                </div>
            </form>
        </div>  



        
        <div class="container d-none d-sm-none d-md-block container-table">
            <div class="row content-table-text mt-5">
                <div class="col-12 col-lg-9">
                   
                        
                        <table class="table align-middle caption-top">
                            <caption>&#124; Автомобили в наличии</caption>
                            <thead>
                              <tr>
                                <th scope="col">Название</th>
                                <th scope="col">Год</th>
                                <th scope="col">Цвет</th>
                                <th scope="col">Статус</th>
                                <th scope="col">Цена</th>
                                <th scope="col delete">
                                    <span class="th-delete">Удалить</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                    1.6 MT Ambiente 85 л.с. МКПП
                                    <p>+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3</p>
                                </th>
                                <td>2012</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" class="black"></span>
                                    </div>    
                                </td>
                                <td>Ожидается</td>
                                <td>1&nbsp;189&nbsp;900&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                    1.6 MT Ambiente Plus 105 л.с. МКПП
                                </th>
                                <td>2012</td>
                                <td> 
                                    <div class="color-circle">
                                        <span id="circle" class="wite"></span>
                                    </div>    
                                </td>
                                <td>Ожидается</td>
                                <td>1&nbsp;189&nbsp;900&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                    1.6 MT Trend 105 л.с. МКПП
                                </th>
                                <td>2012</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" class="black"></span>
                                    </div>    
                                </td>
                                <td>В наличии</td>
                                <td>1&nbsp;459&nbsp;000&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                    1.6 PowerShift Trend Sport 105 л.с. АКПП
                                </th>
                                <td>2012</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" class="gray"></span>
                                    </div>    
                                </td>
                                <td>Ожидается</td>
                                <td>1&nbsp;459&nbsp;000&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                    2.0 MT Trend Sport 150 л.с. МКПП
                                </th>
                                <td>2012</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" class="red"></span>
                                    </div>    
                                </td>
                                <td>Ожидается</td>
                                <td>786&nbsp;000&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">
                                    2.0 PowerShift Trend Sport 150 л.с. АКПП
                                    <p>+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3</p>
                                </th>
                                <td>2012</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" class="green"></span>
                                    </div>    
                                </td>
                                <td>Нет в наличии</td>
                                <td>821&nbsp;000&nbsp;руб.</td>
                                <td>
                                    <span class="td-delete">Удалить</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        
                </div>    
            </div>        
        </div>

        <div class="container d-block d-sm-block d-md-none container-table-small">
            <div class="row content-table-text mt-5">
                <div class="col-12">
                   
                        
                        <table class="table table-borderless align-middle caption-top">
                            <caption>&#124; Автомобили в наличии</caption>


                            <thead class="thead-table-small">
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>
                                  <th scope="col"></th>
                                  <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" colspan="2">
                                         1.6 MT Ambiente 85 л.с. МКПП
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="black"></span>
                                        </div>    
                                    </td>
                                    <td>1&nbsp;689&nbsp;000&nbsp;руб.</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="4">
                                         <p>+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3</p>
                                    </th>
                                    
                                </tr>
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       Ожидается
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">
                                        1.6 MT Ambiente Plus 105 л.с. МКПП
                                    </th>
                                    <td> 
                                        <div class="color-circle">
                                            <span id="circle" class="wite"></span>
                                        </div>    
                                    </td>
                                    <td>1&nbsp;189&nbsp;900&nbsp;руб.</td>
                                </tr>
                                
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       Ожидается
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row"  colspan="2">
                                        1.6 MT Trend 105 л.с. МКПП
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="black"></span>
                                        </div>    
                                    </td>
                                    <td>1&nbsp;459&nbsp;000&nbsp;руб.</td>
                                </tr>
                                
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       В наличии
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"  colspan="2">
                                        1.6 PowerShift Trend Sport 105 л.с. АКПП
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="gray"></span>
                                        </div>    
                                    </td>
                                    <td>1&nbsp;459&nbsp;000&nbsp;руб.</td>
                                </tr>
                                
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       Ожидается
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">
                                        2.0 MT Trend Sport 150 л.с. МКПП
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="red"></span>
                                        </div>    
                                    </td>
                                    <td>786&nbsp;000&nbsp;руб.</td>
                                </tr>
                                
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       Ожидается
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"  colspan="2">
                                        2.0 PowerShift Trend Sport 150 л.с. АКПП
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="green"></span>
                                        </div>    
                                    </td>
                                    <td>821&nbsp;000&nbsp;руб.</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="4">
                                         <p>+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3</p>
                                    </th>
                                    
                                </tr>
                                
                                <tr class="borderBottom">
                                    <td class="line_2">
                                        2012
                                    </td>
                                    <td colspan="2">
                                       В наличии
                                    </td>
                                    <td>
                                        <span class="td-delete">Удалить</span>
                                    </td>
                                </tr>
                           
                            </tbody>
                                      
                          
                          </table>
                        
                </div>    
            </div>        
        </div>
    </section>






    <section class="section-footer">
        <div class="container container-footer">
            <div class="row">
                <div class="col content-footer">
                    <h3>&#169; 2020 CAPTAIN QUACK</h3>
                    <p>Десница тысячелетия и моллюск!</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cars',
   data(){
      return{

      }
  },
    methods:{
      setData() {
                        
                this.$store.dispatch('getCars')              
            
        },
            },
             computed: {           
        
            cars() {
                    return this.$store.getters.cars
            }
    
                  },       


        created() {
             this.setData();
        },
  
});
</script>

<style scoped>

body {
    font-family: Roboto;
}

.section-head {
    position: relative;
    background-color: #282D30;
    height: 100px;
}

.container-head {
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: 50px;
    
}

.content-heading-text h1 {
    font-weight: 700;
    font-size: 42px;
   
}   
.content-heading-text {
    margin: 0 auto;
    position: relative;
    color: #282D30;
} 
.container-text {
    margin-top: 50px;
    display: flex;
    /*justify-content: center;*/
}
.content-heading-text p {
    font-weight: 700;
    font-size: 42px;
    position: absolute;
    margin-left: -12px;
    transform: rotateX(180deg);
}
form {
    justify-content: center;
}

.col-color h2 {
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
}
.text-name input, .text-year input, .text-description input, .text-status input {
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
}
.text-price label {
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
    padding-left: 10px;
   
}
.text-price input {
    color: #282D30;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;

}

.text-status input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    
    
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
   
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-danger {
    width: 100%;
    font-size: 16px;
    
    font-weight: 700;
    text-transform: uppercase;
}
.content-table-text {
    justify-content: center;
}
.btn-danger {
    
    background-color: #C3002F;
    
}
tbody tr {
    background-color: #F5F6F6;;
}
table thead {
    background-color: #C3002F;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
}
table tbody th, td {
    background-color: #F5F6F6;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    font-style: normal;
    line-height: 20px;
    color: #323232;
    
}

caption {
        
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    color: #282D30;
    text-transform: uppercase;
    margin-bottom: 20px;

}
th p {
       
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    color: #8B8B8B;
    margin-bottom: 0;

} 

.color-circle {
    text-align: center;
}
#circle {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
   
    
}
.black {
    background-color: #000;
}
.wite {
    background-color: #fff;
    border: 1px solid #ced4da;
}
.gray {
    background-color:#C4C4C4;
}
.red {
    background-color: #DD1C10;
}
.green {
    background-color: #77CF61;
}
.td-delete:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border-radius: 20px;
    
}
.td-delete {
    padding: 5px 10px;
}
.th-delete {
    display: none;
}


.container-table-small {
    
    max-width: 720px;
}
.thead-table-small {
    display: none;
}
.borderBottom {
    border-bottom: 1px solid #DADADA;
}


.section-footer {
    background-color: #282D30;
    margin-top: 200px;
}
.content-footer {
    margin-top: 40px;
    margin-bottom: 40px;
}
.content-footer h3 {
    color: #fff;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: 13px;
    text-align: center;
}
.content-footer p {
    color: #fff;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: 13px;
    text-align: center;
}
.content-footer h3 {
  text-transform: uppercase;
} 
.line_2 {
    width: 80px;
}


@media (max-width: 767.98px) {
    .text-year {
        order:3;

    }
    .text-price {
        order:2;
    }
    .container-head {
       justify-content: baseline;
        margin-left: 20px;
    }

}

@media (max-width: 574.98px) {
   
    
    .content-head img {
        width: 80%;
        margin-top: 20px;
    }
    
    .btn-danger {
        font-size: 14px;
    }
   
    
}


</style>

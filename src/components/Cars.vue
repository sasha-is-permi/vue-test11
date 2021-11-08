
<template>
     
     <section class="section-head">
        <div class="container container-head">
            <div class="row">
                <div class="content-head">
                    <img src="../assets/logo-duck.png" alt=""/>
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
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Название" v-model="title">
                </div>
                <div class="col-6 col-md-4 col-lg-3 text-year">
                    <label for="formGroupExampleInput" class="form-label">Год</label>
                    <input type="text" class="form-control" id="formGroupExampleInput"  v-model="year">
                </div>
                <div class="col-6 col-md-4 col-lg-3 text-price">
                
                    <label for="formGroupExampleInput" class="form-label">Цена</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" v-model="price">
                </div>
            </form>    
            <form class="row mt-4">    
                <div class="col-12 col-lg-9 text-description mt-4">
                
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Описание" v-model="description">
                </div>
            </form>    
            
            <form class="row mt-4">
                <div class="col-12 col-md-4 col-lg-3 col-color">
                    <h2>Цвет</h2>
                    <div class="d1" style="display:inline-block"> </div>
                    <div class="d2" style="display:inline-block" > </div>
                    <div class="d3" style="display:inline-block" > </div>
                    <div class="d4" style="display:inline-block" > </div>
                    <div class="d5" style="display:inline-block" > </div>  
                    <div style="display:block"> </div>
                    <input type="radio" name="color" id="white" value="white" v-model="color" />
                    <input type="radio" name="color" id="black" checked="checked" value="black" v-model="color"  />
                    <input type="radio" name="color" id="gray" value="gray" v-model="color" />
                    <input type="radio" name="color" id="red" value="red" v-model="color" />
                    <input type="radio" name="color" id="green" value="green" v-model="color" />
                </div>
                
                <div class="col-6 col-md-4 col-lg-3 text-status">
                   <select v-model="status" id="list-status">
                   <option disabled value="">Выберите один из вариантов</option>
                   <option value="pednding">Ожидается</option>
                    <option value="in_stock">в наличии</option>
                   <option value="out_of_stock">нет в наличии</option>
                   </select>          
             
                </div>
               
                <div class="col-6 col-md-4 col-lg-3">
                    <button type="button" class="btn btn-danger" @click.stop="addCar">Отправить<img src="../assets/arrow-right.png" alt=""/>
                    </button>
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
                                <th v-for ="item in thArray" :key="item"  scope="col">{{item}}</th>
                               </tr>
                            </thead>
                            <tbody>
                              <tr v-for="car in cars" :key="car.id" >
                                <th scope="row">
                                   {{car.title}}
                                    <p>{{car.description}}</p>
                                </th>
                                <td>{{car.year}}</td>
                                <td>
                                    <div class="color-circle">
                                        <span id="circle" :class="car.color"></span>
                                    </div>    
                                </td>
                                <td v-if="car.status==='pednding'">Ожидается</td>
                                <td v-if="car.status==='in_stock'">в наличии</td>
                                <td v-if="car.status==='out_of_stock'">нет в наличии</td>
                                <td>{{car.price}} руб.</td>                              
                                <td>
                                    <span class="td-delete" @click="deleteCar(car.id)">Удалить</span>
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
                                  <th v-for="n in 4" :key="n" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody v-for="car in cars" :key="car.id">
                               
                               
                                <tr>
                                    <th scope="row" colspan="2">
                                          {{car.title}}
                                    </th>
                                    <td>
                                        <div class="color-circle">
                                            <span id="circle" class="black"></span>
                                        </div>    
                                    </td>
                                    <td>{{car.price}} руб.</td>
                                </tr>
                                <tr>
                                    <th v-if="car.description.trim()!==''"  scope="row" colspan="4">
                                         <p>{{car.description}}</p>
                                    </th>
                                    
                                </tr>
                                <tr class="borderBottom">
                                    <td class="line_2">
                                       {{car.year}}
                                    </td>
                                <td v-if="car.status==='pednding'" colspan="2">Ожидается</td>
                                <td v-if="car.status==='in_stock'" colspan="2">в наличии</td>
                                <td v-if="car.status==='out_of_stock'" colspan="2">нет в наличии</td>
                                    <td>
                                        <span class="td-delete" @click="deleteCar(car.id)" >Удалить</span>
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

type carsObject={id:number,title:string,description:string,year:number,color:string,price:number,status:string}

export default defineComponent({
  name: 'Cars',
   data(){
      return{
            thArray:  ['Название','Год','Цвет','Статус','Цена',""] as Array<string>,
            color:'' as string,            
            status:'pednding' as string,
            title:'' as string,
            year:2000 as number,
            price:0 as number,
            description:'' as string


      }
  },
    methods:{ 
       
      deleteCar(id:number){
           this.$store.dispatch('deleteCar',id)
      }, 
      addCar(){
          if (isNaN(this.year)===true) {
              alert("Год должен быть числом");
          }
          else if (isNaN(this.price)===true) {
                alert("Цена должна быть числом")
          } 
          else if (this.title.trim()==="") {
              alert("Название машины должно быть введено!")
          }  
          else { 
           let newCar= {} as carsObject;
           newCar.id = +this.cars.length +1;
           newCar.title = this.title;
           newCar.description= this.description;
           newCar.year = +this.year;
           newCar.color = this.color;
           newCar.price= +this.price;
           newCar.status= this.status;

           this.$store.dispatch('addCar',newCar)   

         
           this.title="";
           this.description="";
           this.year=2000;
           this.color="black";
           this.price=0;
           this.status="pednding";
          }

      },
      setData() {
                        
                this.$store.dispatch('getCars')              
            
        },
            },
             computed: {           
        
            cars():Array<carsObject>  { 
                    let cars = [] as Array<carsObject> 
                    cars = this.$store.getters.cars 
                    return cars                
            }
    
                  },       


        created() {
             this.setData();
            },
  
});
</script>

<style scoped>

.d1 {
width: 12px; 
height: 12px;
background:white;
border: 1px solid black; 
border-radius: 50%;
margin-right:1px;

}

.d2 {
width: 12px; 
height: 12px;
background:black;
border: 1px solid black; 
border-radius: 50%;
margin-right:1px;

}

.d3 {
width: 12px; 
height: 12px;
background:grey;
border: 1px solid red; 
border-radius: 50%;
margin-right:1px;

}
.d4 {
width: 12px; 
height: 12px;
background:red;
border-radius: 50%;
border: 1px solid red; 
margin-right:1px;

}

.d5 {
width: 12px; 
height: 12px;
background:green;
border-radius: 50%;
border: 1px solid green; 
margin-right:1px;
}



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
.text-name input, input, .text-description input, .text-status input {
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

.text-year label {
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
    padding-left: 10px;
   
}
.text-year input {
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

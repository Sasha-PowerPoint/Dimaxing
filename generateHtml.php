<?php echo '<header>
         <p id="logo"><img src="img/needle.jpg">NeedLe</p>
          <span>
              <span class="show-up-filters show-filters">Відкрити фільтри</span>
              <span class="add-item-mode show-validation">Додати товар</span>
          </span>
      </header>
      <section class="add-item-section">
          <div class="add-wrapper">
              <input type="text" class="filter-adding" types="companies" placeholder="Компанія">
              <input type="text" class="filter-adding" types="products" placeholder="Тип">
              <input type="text" class="filter-adding" types="materials" placeholder="Матеріал">
              <input type="text" types="items" placeholder="Продукт">
              <input type="text" types="values" placeholder="Ціна">
              <input type="text" types="contacts" placeholder="Контакти">
              <input type="text" types="availability" placeholder="Наявність: 1 або 0">
              <button class="add-item-submit add-submit-unactive">Записати</button>
          </div>
      </section>
      <section class="item-send-status">
          <span></span>
      </section>
      <section class="main-section hider">
          <aside>
              <ul class="filters">
                  <li class="filter-button" type="companies">Компанія</li>
                  <li class="filter-button" type="products">Тип</li>
                  <li class="filter-button" type="materials">Матеріал</li>
                  <li class="filter-submit">Відправити</li>
              </ul>
          </aside>
          <div class="main-section-list ">
              <ul class="filter-options">
              </ul>
          </div>
      </section>

      <section class="main-list">
          <ul class="result-list">
          </ul>
      </section>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="js/jquery.cookie.js"></script>
      <script src="js/script.js"></script>'
      ?>